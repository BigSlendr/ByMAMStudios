const dataUrl = '../assets/data/site.json';

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

const titleEl = document.getElementById('project-title');
const subtitleEl = document.getElementById('project-subtitle');
const categoryEl = document.getElementById('project-category');
const roleEl = document.getElementById('project-role');
const yearEl = document.getElementById('project-year');
const tagsEl = document.getElementById('project-tags');
const linksEl = document.getElementById('project-links');
const problemEl = document.getElementById('project-problem');
const approachEl = document.getElementById('project-approach');
const executionEl = document.getElementById('project-execution');
const outcomeEl = document.getElementById('project-outcome');
const metricsEl = document.getElementById('project-metrics');
const footerYearEl = document.getElementById('year');

const renderList = (container, items) => {
  if (!container) {
    return;
  }
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
};

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    const project = data.projects.find((entry) => entry.slug === slug) || data.projects[0];
    if (!project) {
      return;
    }
    document.title = `${project.name} | By MAM Studios`;
    titleEl.textContent = project.name;
    subtitleEl.textContent = project.subtitle;
    categoryEl.textContent = project.category;
    roleEl.textContent = project.role;
    yearEl.textContent = project.year;
    renderList(tagsEl, project.tags);
    linksEl.innerHTML = project.links
      .map(
        (link) =>
          `<a class="btn btn-ghost" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
      )
      .join('');
    problemEl.textContent = project.problem;
    renderList(approachEl, project.approach);
    renderList(executionEl, project.execution);
    outcomeEl.textContent = project.outcome;
    renderList(metricsEl, project.metrics);
    footerYearEl.textContent = new Date().getFullYear();
  })
  .catch(() => {
    titleEl.textContent = 'Project not found';
  });
