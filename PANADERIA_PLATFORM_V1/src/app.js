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

function route() {
  const view = location.hash.replace('#', '') || 'home';
  const routes = { home, course, library, boly, dashboard, store, certificates, login };
  (routes[view] || home)();
  $$('.nav-link').forEach((link) => link.classList.toggle('active', link.dataset.route === view));
}

function layout(title, content) {
  $('#app').innerHTML = `<section class="view"><div class="section-title"><p class="eyebrow">PanaderIA™ Platform V1</p><h1>${title}</h1></div>${content}</section>`;
}

function home() {
  layout('Producto funcional integrado para aprender bolillo profesional.', `
    <div class="hero-grid">
      <div class="panel hero-panel">
        <span class="pill">Curso + Libro + Boly™ + Certificación</span>
        <h2>Domina el bolillo con una plataforma real, no con documentos sueltos.</h2>
        <p>PanaderIA™ V1 integra sitio web, área del estudiante, biblioteca, buscador inteligente, Boly™, descargas, videos, certificados y preparación para pagos y apps móviles.</p>
        <div class="actions"><a class="btn primary" href="#course">Entrar al curso</a><a class="btn" href="#boly">Preguntar a Boly™</a></div>
      </div>
      <div class="panel bread-card"><div class="bread"></div><strong>Bolillo premium</strong><span>módulos técnicos + recursos</span></div>
    </div>
    <div class="metric-grid">
      <div class="metric"><strong>${state.modules.length}</strong><span>Módulos</span></div>
      <div class="metric"><strong>${state.resources.length}</strong><span>Recursos</span></div>
      <div class="metric"><strong>${state.products.length}</strong><span>Productos</span></div>
      <div class="metric"><strong>${state.config.mobile?.futureTargets?.length || 0}</strong><span>Targets móviles</span></div>
    </div>`);
}

function course() {
  const cards = state.modules.map((module) => {
    const done = state.progress[module.id];
    return `<article class="module-card ${done ? 'done' : ''}">
      <div class="module-number">${String(module.id).padStart(2, '0')}</div>
      <h3>${module.name}</h3>
      <p>${module.contextHelp}</p>
      <small>Recurso: ${module.recommendedResource}</small>
      <button class="btn small" data-complete="${module.id}">${done ? 'Completado' : 'Marcar avance'}</button>
    </article>`;
  }).join('');
  layout('Biblioteca del Curso Maestro de Bolillo', `<div class="module-grid">${cards}</div>`);
  $$('[data-complete]').forEach((button) => button.addEventListener('click', () => {
    state.progress[button.dataset.complete] = !state.progress[button.dataset.complete];
    save();
    course();
  }));
}

function library() {
  const items = state.resources.map(resourceCard).join('');
  layout('Recursos, PDFs, videos y buscador inteligente', `
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
  return `<article class="card"><span class="pill">${resource.type} · Módulo ${resource.module}</span><h3>${resource.title}</h3><p>${resource.tags.join(' · ')}</p><a class="btn small primary" href="${resource.href}" download>Descargar / abrir</a></article>`;
}

function boly() {
  layout('Boly™ funcionando dentro del sitio', `
    <div class="chat-shell">
      <div id="chatLog" class="chat-log"><div class="bot">¡Qué tal, camarada! Soy Boly™. Cuéntame qué pasó con tu bolillo y revisamos módulo, causa y solución.</div></div>
      <form id="chatForm" class="chat-form"><input id="question" placeholder="Ej. mi masa quedó pegajosa / mi bolillo no abre"><button class="btn primary">Enviar</button></form>
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
  const completed = Object.values(state.progress).filter(Boolean).length;
  const percent = Math.round((completed / state.modules.length) * 100);
  layout(`Dashboard de ${state.user.name}`, `
    <div class="dashboard-grid">
      <div class="panel"><h2>${percent}% de avance</h2><progress value="${completed}" max="${state.modules.length}"></progress><p>${completed} de ${state.modules.length} módulos completados.</p><a class="btn primary" href="#course">Continuar curso</a></div>
      <div class="panel"><h2>Próximas acciones</h2><ul><li>Descargar PDFs esenciales.</li><li>Preguntar a Boly™ tus dudas de práctica.</li><li>Completar evidencias para certificación.</li></ul></div>
      <div class="panel"><h2>Preparación móvil</h2><p>${state.config.mobile.strategy}</p></div>
    </div>`);
}

function store() {
  const products = state.products.map((product) => `<article class="card product"><span class="pill">${product.type}</span><h3>${product.name}</h3><p>${product.description}</p><strong>${product.priceLabel}</strong><button class="btn small primary" data-buy="${product.id}">Preparar pago</button>${product.download ? `<a class="btn small" href="${product.download}" download>Descargar</a>` : ''}</article>`).join('');
  layout('Tienda y pagos preparados', `<div class="resource-grid">${products}</div><div class="panel"><h2>Estado de pagos</h2><p>Proveedores preparados: ${state.config.payments.providers.join(', ')}. Modo actual: ${state.config.payments.checkoutMode}.</p></div>`);
  $$('[data-buy]').forEach((button) => button.addEventListener('click', () => alert('Checkout preparado. Conecta Stripe/PayPal keys para activar cobro real.')));
}

function certificates() {
  const completed = Object.values(state.progress).filter(Boolean).length;
  const eligible = completed >= 10;
  layout('Certificados PanaderIA™', `<div class="certificate ${eligible ? 'eligible' : ''}"><p>PanaderIA™</p><h2>${eligible ? 'Certificado disponible' : 'Certificado en progreso'}</h2><p>Completa al menos 10 módulos para liberar el certificado demo.</p>${eligible ? '<a class="btn primary" href="downloads/certificates/certificado-demo-panaderia.txt" download>Descargar certificado</a>' : '<a class="btn" href="#course">Completar módulos</a>'}</div>`);
}

function login() {
  layout('Sistema de usuarios', `<form id="loginForm" class="auth panel"><label>Nombre<input id="name" required placeholder="Tu nombre"></label><label>Correo<input id="email" type="email" required placeholder="correo@ejemplo.com"></label><button class="btn primary">Entrar al área privada</button><p>Autenticación local funcional para V1. Lista para reemplazarse por auth real.</p></form>`);
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
