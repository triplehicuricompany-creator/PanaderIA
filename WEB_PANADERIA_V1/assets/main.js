document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-faq-question]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      item?.classList.toggle('open');
    });
  });

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const progressCard = document.querySelector('[data-course-progress]');
  const completeButtons = document.querySelectorAll('[data-complete-module]');
  const completedModules = new Set(JSON.parse(localStorage.getItem('panaderiaCompletedModules') || '[]'));

  const updateCourseProgress = () => {
    if (!progressCard) return;
    const totalModules = Number(progressCard.dataset.totalModules || 14);
    const completed = completedModules.size;
    const percentage = Math.round((completed / totalModules) * 100);
    const label = progressCard.querySelector('[data-progress-label]');
    const percent = progressCard.querySelector('[data-progress-percent]');
    const fill = progressCard.querySelector('[data-progress-fill]');
    const bar = progressCard.querySelector('[role="progressbar"]');

    if (label) label.textContent = `${completed} de ${totalModules} módulos completados`;
    if (percent) percent.textContent = `${percentage}%`;
    if (fill) fill.style.width = `${percentage}%`;
    if (bar) bar.setAttribute('aria-valuenow', String(completed));

    completeButtons.forEach((button) => {
      const moduleId = button.dataset.completeModule;
      if (completedModules.has(moduleId)) {
        button.textContent = 'Módulo completado';
        button.setAttribute('aria-pressed', 'true');
      } else {
        button.textContent = 'Marcar módulo como completado';
        button.setAttribute('aria-pressed', 'false');
      }
    });
  };

  completeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const moduleId = button.dataset.completeModule;
      if (!moduleId) return;
      completedModules.add(moduleId);
      localStorage.setItem('panaderiaCompletedModules', JSON.stringify([...completedModules]));
      updateCourseProgress();
    });
  });

  updateCourseProgress();

});
