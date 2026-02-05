const dataUrl = '../assets/data/site.json';

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

const titleEl = document.getElementById('project-title');
const subtitleEl = document.getElementById('project-subtitle');
const categoryEl = document.getElementById('project-category');
const engagementEl = document.getElementById('project-engagement');
const yearEl = document.getElementById('project-year');
const tagsEl = document.getElementById('project-tags');
const linksEl = document.getElementById('project-links');
const footerYearEl = document.getElementById('year');

const problemEl = document.getElementById('project-problem');
const approachEl = document.getElementById('project-approach');
const executionEl = document.getElementById('project-execution');
const outcomeEl = document.getElementById('project-outcome');
const metricsEl = document.getElementById('project-metrics');

const problemSection = document.getElementById('project-problem-section');
const approachSection = document.getElementById('project-approach-section');
const executionSection = document.getElementById('project-execution-section');
const outcomeSection = document.getElementById('project-outcome-section');
const metricsSection = document.getElementById('project-metrics-section');

const toArray = (value) => {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === 'string' && value.trim()) {
    return [value.trim()];
  }
  return [];
};

const renderListSection = (section, container, items) => {
  const values = toArray(items);
  if (!values.length) {
    section.style.display = 'none';
    return;
  }

  container.innerHTML = values.map((item) => `<li>${item}</li>`).join('');
};

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    const visibleProjects = data.projects.filter((entry) => !entry.comingSoon);
    const project = visibleProjects.find((entry) => entry.slug === slug) || visibleProjects[0];
    if (!project) {
      return;
    }

    document.title = `${project.name} | By MAM Studios`;
    titleEl.textContent = project.name;
    subtitleEl.textContent = project.subtitle;
    categoryEl.textContent = project.category;
    engagementEl.textContent = project.engagement || project.role || '';
    yearEl.textContent = project.year;

    const tags = toArray(project.tags);
    tagsEl.innerHTML = tags.map((item) => `<li>${item}</li>`).join('');

    const links = Array.isArray(project.links) ? project.links : [];
    linksEl.innerHTML = links
      .map(
        (link) =>
          `<a class="btn btn-ghost" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
      )
      .join('');

    renderListSection(problemSection, problemEl, project.problem);
    renderListSection(approachSection, approachEl, project.approach);
    renderListSection(executionSection, executionEl, project.execution);
    renderListSection(outcomeSection, outcomeEl, project.outcome);
    renderListSection(metricsSection, metricsEl, project.metrics);

    footerYearEl.textContent = new Date().getFullYear();
  })
  .catch(() => {
    titleEl.textContent = 'Project not found';
  });
