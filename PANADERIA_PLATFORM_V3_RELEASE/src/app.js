import { buildBolyAnswer, normalize, searchLibrary } from './boly-engine.js';

const state = {
  modules: [], diagnostics: [], resources: [], products: [], videos: [], technicalLibrary: [], courseContent: [], certificates: [], config: {},
  user: JSON.parse(localStorage.getItem('panaderia_v2_user') || 'null'),
  progress: JSON.parse(localStorage.getItem('panaderia_v2_progress') || '{}'),
  cart: JSON.parse(localStorage.getItem('panaderia_v2_cart') || '[]')
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const money = (value, currency = 'MXN') => new Intl.NumberFormat('es-MX', { style: 'currency', currency }).format(value);

async function loadData() {
  const [modules, diagnostics, resources, products, videos, technicalLibrary, courseContent, certificates, config] = await Promise.all([
    json('data/modules.json'), json('data/diagnostics.json'), json('data/resources.json'), json('data/products.json'),
    json('data/videos.json'), json('data/technical-library.json'), json('data/course-content.json'), json('data/certificate-templates.json'), json('data/platform-config.json')
  ]);
  Object.assign(state, { modules, diagnostics, resources, products, videos, technicalLibrary, courseContent, certificates, config });
}
function json(path) { return fetch(path).then((response) => response.json()); }
function save() {
  localStorage.setItem('panaderia_v2_user', JSON.stringify(state.user));
  localStorage.setItem('panaderia_v2_progress', JSON.stringify(state.progress));
  localStorage.setItem('panaderia_v2_cart', JSON.stringify(state.cart));
}
function knowledge() { return { modules: state.modules, diagnostics: state.diagnostics, resources: state.resources, products: state.products, videos: state.videos, technicalLibrary: state.technicalLibrary, courseContent: state.courseContent }; }

function route() {
  const view = location.hash.replace('#', '') || 'home';
  const routes = { home, course, library, videos, boly, dashboard, store, certificates, instructor, login };
  (routes[view] || home)();
  $$('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.route === view));
  $('#mainNav').classList.remove('open');
}
function layout(title, content) { $('#app').innerHTML = `<section class="view"><div class="section-title"><p class="eyebrow">PanaderIA™ Platform V3 Release</p><h1>${title}</h1></div>${content}</section>`; }

function home() {
  const completed = Object.values(state.progress).filter(Boolean).length;
  layout('Primer lanzamiento comercial funcional.', `
    <div class="hero-grid"><div class="panel hero-panel"><span class="pill">V3 Release · comercial · estable</span><h2>Curso, libro, Boly™, tienda, alumnos y certificación conectados.</h2><p>PanaderIA™ V3 Release integra biblioteca técnica, buscador global, videos por módulo, descargas, carrito, pagos preparados, dashboard de alumno y certificado desbloqueable por progreso.</p><div class="actions"><a class="btn primary" href="#course">Entrar al curso</a><a class="btn" href="#store">Comprar productos</a><a class="btn" href="#boly">Preguntar a Boly™</a></div></div><div class="panel launch-card"><div class="bread"></div><strong>${completed}/${state.modules.length}</strong><span>módulos completados</span></div></div>
    <div class="metric-grid"><div class="metric"><strong>${state.modules.length}</strong><span>Módulos técnicos</span></div><div class="metric"><strong>${state.technicalLibrary.length}</strong><span>Biblias indexadas</span></div><div class="metric"><strong>${state.resources.length}</strong><span>Descargas</span></div><div class="metric"><strong>${cartTotal().items}</strong><span>Productos en carrito</span></div></div>`);
}

function course() {
  const cards = state.courseContent.map((module) => `<article class="module-card ${state.progress[module.id] ? 'done' : ''}"><img class="ref-img" src="${module.referenceImage}" alt="Referencia visual ${module.title}"><div class="module-number">${String(module.id).padStart(2, '0')}</div><h3>${module.title}</h3><p>${module.summary}</p><details><summary>Lecciones, ejercicios y examen</summary><ol>${module.lessons.map((lesson)=>`<li><strong>${lesson.title}</strong><br><span>${lesson.content}</span><br><em>${lesson.chefTip}</em></li>`).join('')}</ol><h4>Ejercicios</h4><ul>${module.exercises.map((item)=>`<li>${item}</li>`).join('')}</ul><h4>Caso real</h4><p>${module.realCase}</p><h4>Checklist</h4><ul>${module.checklist.map((item)=>`<li>${item}</li>`).join('')}</ul><h4>Examen</h4><ol>${module.exam.questions.map((q)=>`<li>${q}</li>`).join('')}</ol><p><strong>FAQ:</strong> ${module.faq}</p></details><div class="actions"><button class="btn small" data-complete="${module.id}">${state.progress[module.id] ? 'Completado' : 'Marcar avance'}</button>${module.downloads.map((href)=>`<a class="btn small" href="${href}" download>Descargar</a>`).join('')}</div></article>`).join('');
  layout('Curso Maestro de Bolillo completo', `<div class="module-grid">${cards}</div>`);
  $$('[data-complete]').forEach((button) => button.addEventListener('click', () => { state.progress[button.dataset.complete] = !state.progress[button.dataset.complete]; save(); course(); }));
}

function library() {
  layout('Biblioteca y buscador inteligente global', `<div class="search-box"><input id="search" placeholder="Busca en módulos, biblias técnicas, PDFs, videos, tienda y diagnósticos..." autofocus><button class="btn primary" id="searchBtn">Buscar</button></div><div id="results" class="resource-grid"></div>`);
  $('#search').addEventListener('input', renderSearch);
  $('#searchBtn').addEventListener('click', renderSearch);
  renderSearch();
}
function renderSearch() {
  const results = searchLibrary($('#search')?.value || '', knowledge());
  $('#results').innerHTML = results.map((entry) => `<article class="card"><span class="pill">${entry.kind}</span><h3>${entry.title}</h3><p>${snippet(entry.text)}</p>${entry.item.href ? `<a class="btn small primary" href="${entry.item.href}" download>Abrir / descargar</a>` : ''}</article>`).join('');
}

function videos() {
  const groups = state.modules.map((module) => {
    const list = state.videos.filter((video) => video.module === module.id);
    if (!list.length) return '';
    return `<section class="panel"><h2>Módulo ${module.id}: ${module.name}</h2><div class="resource-grid">${list.map((video) => `<article class="card"><span class="pill">${video.duration} · ${video.status}</span><h3>${video.title}</h3><p>${video.tags.join(' · ')}</p><a class="btn small primary" href="${video.href}">Ver video</a></article>`).join('')}</div></section>`;
  }).join('');
  layout('Videos organizados por módulo', groups);
}

function boly() {
  layout('Boly™ conectado a la biblioteca técnica', `<div class="chat-shell"><div id="chatLog" class="chat-log"><div class="bot">¡Qué tal, camarada! Ya puedo consultar módulos, diagnósticos, recursos, videos y biblias técnicas. Cuéntame qué pasó.</div></div><form id="chatForm" class="chat-form"><input id="question" placeholder="Ej. mi bolillo queda denso / no abre / corteza blanda"><button class="btn primary">Enviar</button></form></div>`);
  $('#chatForm').addEventListener('submit', (event) => { event.preventDefault(); const question = $('#question').value.trim(); if (!question) return; const answer = buildBolyAnswer(question, knowledge()); $('#chatLog').insertAdjacentHTML('beforeend', `<div class="user">${escapeHtml(question)}</div><div class="bot">${escapeHtml(answer.text).replaceAll('\n', '<br>')}</div>`); $('#question').value = ''; $('#chatLog').scrollTop = $('#chatLog').scrollHeight; });
}

function dashboard() {
  if (!state.user) return login();
  const completed = Object.values(state.progress).filter(Boolean).length;
  const percent = Math.round((completed / state.modules.length) * 100);
  layout(`Dashboard de ${escapeHtml(state.user.name)}`, `<div class="dashboard-grid"><div class="panel"><h2>${percent}% de avance</h2><progress value="${completed}" max="${state.modules.length}"></progress><p>${completed} de ${state.modules.length} módulos completados.</p><a class="btn primary" href="#course">Continuar curso</a></div><div class="panel"><h2>Descargas rápidas</h2>${state.resources.slice(0,4).map((r)=>`<a class="download-link" href="${r.href}" download>${r.title}</a>`).join('')}</div><div class="panel"><h2>Carrito</h2><p>${cartTotal().items} productos · ${money(cartTotal().total)}</p><a class="btn" href="#store">Ir a tienda</a></div><div class="panel"><h2>Certificación</h2><p>${certificationStatus(completed)}</p><a class="btn" href="#certificates">Ver certificado</a></div></div>`);
}

function certificationStatus(completed) {
  const next = state.certificates.find((cert) => completed < cert.requiredModules);
  return next ? `Faltan ${next.requiredModules - completed} módulos para ${next.name}.` : 'Certificación profesional completa desbloqueada.';
}

function instructor() {
  const rows = state.courseContent.map((module) => {
    const videoCount = state.videos.filter((video) => video.module === module.id).length;
    return `<article class="card"><span class="pill">Módulo ${module.id}</span><h3>${module.title}</h3><p>${module.lessons.length} lecciones · ${module.exercises.length} ejercicios · ${module.exam.questions.length} preguntas · ${videoCount} video(s)</p><p><strong>Revisión:</strong> validar evidencia del alumno contra checklist, caso real y examen descargable.</p><a class="btn small primary" href="${module.downloads[1]}" download>Examen del módulo</a></article>`;
  }).join('');
  layout('Panel del instructor RC1', `<div class="panel"><h2>Lista operativa de revisión</h2><p>Use este panel para revisar consistencia pedagógica, evidencias, exámenes, videos y recursos por módulo antes de certificar alumnos.</p></div><div class="resource-grid">${rows}</div>`);
}

function store() {
  const products = state.products.map((product) => `<article class="card product"><span class="pill">${product.type}</span><h3>${product.name}</h3><p>${product.description}</p><strong>${money(product.price, product.currency)}</strong><div class="actions"><button class="btn small primary" data-add="${product.id}">Agregar</button>${product.download ? `<a class="btn small" href="${product.download}" download>Descargar recurso</a>` : ''}</div></article>`).join('');
  layout('Tienda con carrito y pagos preparados', `<div class="resource-grid">${products}</div>${cartPanel()}`);
  $$('[data-add]').forEach((button) => button.addEventListener('click', () => { state.cart.push(button.dataset.add); save(); store(); }));
  $('#clearCart')?.addEventListener('click', () => { state.cart = []; save(); store(); });
  $('#checkoutStripe')?.addEventListener('click', () => alert('Stripe preparado: conectar createStripeCheckoutSession(cart).'));
  $('#checkoutPayPal')?.addEventListener('click', () => alert('PayPal preparado: conectar createPayPalOrder(cart).'));
}
function cartPanel() { const totals = cartTotal(); return `<div class="panel cart"><h2>Carrito</h2><p>${totals.items} productos · ${money(totals.total)}</p><div class="actions"><button id="checkoutStripe" class="btn primary">Pagar con Stripe</button><button id="checkoutPayPal" class="btn">Pagar con PayPal</button><button id="clearCart" class="btn">Vaciar</button></div><small>${state.config.payments.checkoutMode}</small></div>`; }
function cartTotal() { const products = state.cart.map((id) => state.products.find((p) => p.id === id)).filter(Boolean); return { items: products.length, total: products.reduce((sum, p) => sum + p.price, 0) }; }

function certificates() {
  const completed = Object.values(state.progress).filter(Boolean).length;
  const folio = state.user ? `PAN-${normalize(state.user.email).slice(0, 6).toUpperCase()}-${completed}` : 'PAN-DEMO';
  const cards = state.certificates.map((cert) => {
    const eligible = completed >= cert.requiredModules;
    return `<div class="certificate ${eligible ? 'eligible' : ''}"><p>PanaderIA™</p><h2>${cert.name}</h2><p>Folio: ${folio}</p><p>Requisito: ${cert.requiredModules} módulos · Avance actual: ${completed}/${state.modules.length}</p>${eligible ? `<a class="btn primary" href="${cert.download}" download>Descargar certificado</a>` : '<a class="btn" href="#course">Completar módulos</a>'}</div>`;
  }).join('');
  layout('Sistema de certificaciones funcional', `<div class="resource-grid">${cards}</div>`);
}

function login() {
  layout('Área privada para alumnos', `<form id="loginForm" class="auth panel"><label>Nombre<input id="name" required placeholder="Tu nombre"></label><label>Correo<input id="email" type="email" required placeholder="correo@ejemplo.com"></label><button class="btn primary">Entrar / crear cuenta</button><p>Cuenta local estable para lanzamiento; preparada para migrar a autenticación de producción.</p></form>`);
  $('#loginForm').addEventListener('submit', (event) => { event.preventDefault(); state.user = { name: $('#name').value, email: $('#email').value, createdAt: new Date().toISOString() }; save(); location.hash = 'dashboard'; });
}

function snippet(text) { return escapeHtml(String(text || '').slice(0, 180)) + (String(text || '').length > 180 ? '…' : ''); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char])); }

loadData().then(() => { window.addEventListener('hashchange', route); $('#logout').addEventListener('click', () => { state.user = null; save(); location.hash = 'home'; route(); }); $('#menuToggle').addEventListener('click', () => $('#mainNav').classList.toggle('open')); route(); });
