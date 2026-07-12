import { buildBolyAnswer, normalize } from './boly-engine.js';

const state = {
  modules: [], diagnostics: [], resources: [], products: [], config: {},
  user: JSON.parse(localStorage.getItem('panaderia_user') || 'null'),
  progress: JSON.parse(localStorage.getItem('panaderia_progress') || '{}')
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

async function loadData() {
  const [modules, diagnostics, resources, products, config] = await Promise.all([
    fetch('data/modules.json').then((response) => response.json()),
    fetch('data/diagnostics.json').then((response) => response.json()),
    fetch('data/resources.json').then((response) => response.json()),
    fetch('data/products.json').then((response) => response.json()),
    fetch('data/platform-config.json').then((response) => response.json())
  ]);
  Object.assign(state, { modules, diagnostics, resources, products, config });
}

function save() {
  localStorage.setItem('panaderia_user', JSON.stringify(state.user));
  localStorage.setItem('panaderia_progress', JSON.stringify(state.progress));
}

function getCompletedCount() {
  return Object.values(state.progress).filter(Boolean).length;
}

function getNextModule() {
  return state.modules.find((module) => !state.progress[module.id]) || state.modules[state.modules.length - 1];
}

function route() {
  const view = location.hash.replace('#', '') || 'home';
  const routes = { home, course, library, boly, dashboard, store, certificates, login };
  (routes[view] || home)();
  $$('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.route === view));
}

function layout(title, content, eyebrow = 'PanaderIA™ Curso Maestro de Bolillo') {
  $('#app').innerHTML = `<section class="view"><div class="section-title"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1></div>${content}</section>`;
}

function home() {
  const completed = getCompletedCount();
  const nextModule = getNextModule();
  layout('Bienvenido a tu experiencia Premium de bolillo profesional.', `
    <div class="hero-grid">
      <div class="panel hero-panel">
        <span class="pill">Curso + Libro + Boly™ + Chef Juanote + Certificación</span>
        <h2>Del primer acceso a tu última evidencia: aquí siempre sabes qué hacer después.</h2>
        <p>PanaderIA™ convierte el Curso Maestro de Bolillo en una ruta guiada: bienvenida clara, módulos conectados, recursos descargables, apoyo de Boly™, criterio de Chef Juanote y recompensas para mantenerte avanzando.</p>
        <div class="actions"><a class="btn primary" href="#${state.user ? 'dashboard' : 'login'}">Comenzar onboarding</a><a class="btn" href="#course">Ver ruta completa</a><a class="btn" href="#boly">Preguntar a Boly™</a></div>
      </div>
      <div class="panel bread-card"><div class="bread"></div><strong>Siguiente paso sugerido</strong><span>Módulo ${nextModule?.id}: ${nextModule?.name}</span><small>${completed} de ${state.modules.length} capítulos completados</small></div>
    </div>
    <div class="metric-grid">
      <div class="metric"><strong>${state.modules.length}</strong><span>Capítulos conectados</span></div>
      <div class="metric"><strong>${state.resources.length}</strong><span>Recursos verificados</span></div>
      <div class="metric"><strong>Boly™</strong><span>Acompañamiento técnico</span></div>
      <div class="metric"><strong>Chef</strong><span>Criterio premium</span></div>
    </div>`);
}

function course() {
  const completed = getCompletedCount();
  const percent = Math.round((completed / state.modules.length) * 100);
  const cards = state.modules.map((module, index) => {
    const done = state.progress[module.id];
    const previousDone = index === 0 || state.progress[state.modules[index - 1].id];
    const next = state.modules[index + 1];
    return `<article class="module-card ${done ? 'done' : ''}">
      <div class="module-number">${String(module.id).padStart(2, '0')}</div>
      <span class="pill">${done ? 'Logro desbloqueado' : previousDone ? 'Listo para estudiar' : 'Continúa la ruta'}</span>
      <h3>${module.name}</h3>
      <p>${module.premiumPromise}</p>
      <div class="mentor-note"><strong>Chef Juanote:</strong> ${module.chefJuanoteNote}</div>
      <div class="mentor-note boly-note"><strong>Boly™:</strong> ${module.bolyCompanionNote}</div>
      <small>Recurso recomendado: ${module.recommendedResource}</small>
      <details><summary>Checklist, prompt y continuidad</summary><ul><li><strong>Autoevaluación:</strong> ${module.selfAssessment}</li><li><strong>Prompt:</strong> ${module.practicePrompt}</li><li><strong>Siguiente acción:</strong> ${module.nextAction}</li>${next ? `<li><strong>Puente al módulo ${next.id}:</strong> ${done ? 'Avanza con tus notas listas para' : 'Este capítulo prepara'} ${next.name}.</li>` : '<li><strong>Cierre:</strong> Revisa certificado, costos y primera oferta comercial.</li>'}</ul></details>
      <div class="reward">🏅 ${module.chapterReward}</div>
      <button class="btn small ${done ? '' : 'primary'}" data-complete="${module.id}">${done ? 'Reabrir capítulo' : 'Marcar logro'}</button>
    </article>`;
  }).join('');
  layout('Ruta guiada del Curso Maestro de Bolillo', `<div class="panel progress-panel"><h2>${percent}% de avance</h2><progress value="${completed}" max="${state.modules.length}"></progress><p>${completed} de ${state.modules.length} capítulos con logro registrado. Cada tarjeta incluye mentoría, checklist, prompt, recompensa y puente al siguiente módulo.</p></div><div class="module-grid">${cards}</div>`);
  $$('[data-complete]').forEach((button) => button.addEventListener('click', () => {
    state.progress[button.dataset.complete] = !state.progress[button.dataset.complete];
    save();
    course();
  }));
}

function library() {
  const items = state.resources.map(resourceCard).join('');
  layout('Biblioteca Premium: descargables, videos y búsqueda por etapa', `
    <div class="panel"><h2>Recursos verificados</h2><p>Usa esta biblioteca durante el módulo correspondiente. Los enlaces apuntan a archivos existentes del repositorio y están pensados para imprimirse o abrirse desde GitHub.</p></div>
    <div class="search-box"><input id="search" placeholder="Busca: amasado, corte, fermentación, diagnóstico..." autofocus><button class="btn" id="searchBtn">Buscar</button></div>
    <div id="results" class="resource-grid">${items}</div>`);
  $('#search').addEventListener('input', runSearch);
  $('#searchBtn').addEventListener('click', runSearch);
}

function runSearch() {
  const query = normalize($('#search').value);
  const filtered = state.resources.filter((resource) => normalize([resource.title, resource.type, ...resource.tags].join(' ')).includes(query));
  $('#results').innerHTML = (filtered.length ? filtered : state.resources).map(resourceCard).join('');
}

function resourceCard(resource) {
  const module = state.modules.find((item) => item.id === resource.module);
  return `<article class="card"><span class="pill">${resource.type} · Módulo ${resource.module}</span><h3>${resource.title}</h3><p>${resource.tags.join(' · ')}</p><small>${module ? module.nextAction : 'Recurso de apoyo del curso.'}</small><a class="btn small primary" href="${resource.href}" download>Descargar / abrir</a></article>`;
}

function boly() {
  layout('Boly™ y Chef Juanote te acompañan en cada práctica', `
    <div class="panel"><h2>Consulta técnica premium</h2><p>Escribe síntoma, etapa, temperatura, tiempos y textura. Boly™ conectará tu duda con el capítulo correcto, recursos y preguntas de seguimiento con el tono directo de Chef Juanote.</p></div>
    <div class="chat-shell">
      <div id="chatLog" class="chat-log"><div class="bot">¡Qué tal, camarada! Soy Boly™. Chef Juanote dice: primero datos, luego diagnóstico. Cuéntame qué pasó con tu bolillo y revisamos módulo, causa, solución y siguiente práctica.</div></div>
      <form id="chatForm" class="chat-form"><input id="question" placeholder="Ej. mi masa quedó pegajosa / mi bolillo no abre / corteza blanda"><button class="btn primary">Enviar</button></form>
    </div>`);
  $('#chatForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const question = $('#question').value.trim();
    if (!question) return;
    const answer = buildBolyAnswer(question, state.modules, state.diagnostics);
    $('#chatLog').insertAdjacentHTML('beforeend', `<div class="user">${escapeHtml(question)}</div><div class="bot">${escapeHtml(answer.text).replaceAll('\n', '<br>')}</div>`);
    $('#question').value = '';
    $('#chatLog').scrollTop = $('#chatLog').scrollHeight;
  });
}

function dashboard() {
  if (!state.user) return login();
  const completed = getCompletedCount();
  const percent = Math.round((completed / state.modules.length) * 100);
  const nextModule = getNextModule();
  layout(`Dashboard Premium de ${escapeHtml(state.user.name)}`, `
    <div class="dashboard-grid">
      <div class="panel"><h2>${percent}% de avance</h2><progress value="${completed}" max="${state.modules.length}"></progress><p>${completed} de ${state.modules.length} capítulos completados.</p><a class="btn primary" href="#course">Continuar curso</a></div>
      <div class="panel"><h2>Siguiente capítulo</h2><p>Módulo ${nextModule.id}: ${nextModule.name}</p><p>${nextModule.nextAction}</p><a class="btn" href="#library">Abrir recursos</a></div>
      <div class="panel"><h2>Acompañamiento</h2><ul><li>Chef Juanote aporta criterio profesional.</li><li>Boly™ responde dudas por síntoma y etapa.</li><li>Cada capítulo libera una recompensa de avance.</li></ul><a class="btn" href="#boly">Pedir diagnóstico</a></div>
    </div>`);
}

function store() {
  const products = state.products.map((product) => `<article class="card product"><span class="pill">${product.type}</span><h3>${product.name}</h3><p>${product.description}</p><strong>${product.priceLabel}</strong><button class="btn small primary" data-buy="${product.id}">Preparar pago</button>${product.download ? `<a class="btn small" href="${product.download}" download>Descargar</a>` : ''}</article>`).join('');
  layout('Tienda Premium y pagos preparados', `<div class="panel"><h2>Oferta comercial clara</h2><p>Los productos muestran el valor del curso, la biblioteca y la certificación sin prometer cobros activos hasta conectar el checkout real.</p></div><div class="resource-grid">${products}</div><div class="panel"><h2>Estado de pagos</h2><p>Proveedores preparados: ${state.config.payments.providers.join(', ')}. Modo actual: ${state.config.payments.checkoutMode}.</p></div>`);
  $$('[data-buy]').forEach((button) => button.addEventListener('click', () => alert('Checkout preparado. Conecta Stripe/PayPal keys para activar cobro real.')));
}

function certificates() {
  const completed = getCompletedCount();
  const eligible = completed >= 10;
  layout('Certificados y cierre de experiencia', `<div class="certificate ${eligible ? 'eligible' : ''}"><p>PanaderIA™</p><h2>${eligible ? 'Certificado disponible' : 'Certificado en progreso'}</h2><p>${eligible ? 'Excelente trabajo: ya reuniste avance suficiente para descargar tu certificado demo y preparar evidencias finales.' : `Completa al menos 10 módulos para liberar el certificado demo. Te faltan ${Math.max(10 - completed, 0)} logros.`}</p>${eligible ? '<a class="btn primary" href="downloads/certificates/certificado-demo-panaderia.txt" download>Descargar certificado</a>' : '<a class="btn" href="#course">Completar módulos</a>'}</div>`);
}

function login() {
  layout('Onboarding del alumno', `<form id="loginForm" class="auth panel"><h2>Activa tu área privada</h2><p>Registra tu nombre para personalizar dashboard, avance y ruta recomendada. Después empieza por el módulo 1 y usa Boly™ cuando necesites diagnóstico.</p><label>Nombre<input id="name" required placeholder="Tu nombre"></label><label>Correo<input id="email" type="email" required placeholder="correo@ejemplo.com"></label><button class="btn primary">Entrar al área privada</button><p>Autenticación local funcional para V1. Lista para reemplazarse por auth real.</p></form>`);
  $('#loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.user = { name: $('#name').value, email: $('#email').value, createdAt: new Date().toISOString() };
    save();
    location.hash = 'dashboard';
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

loadData().then(() => {
  window.addEventListener('hashchange', route);
  $('#logout').addEventListener('click', () => { state.user = null; save(); location.hash = 'home'; route(); });
  route();
});
