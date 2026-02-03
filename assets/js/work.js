const dataUrl = '../assets/data/site.json';

const workGrid = document.getElementById('work-grid');
const chipGroup = document.getElementById('chip-group');
const searchInput = document.getElementById('project-search');
const yearEl = document.getElementById('year');

let allProjects = [];
let activeCategory = 'All';

const pickIcon = (category) => {
  const mapping = {
    Brand: '✺',
    Media: '✦',
    Operations: '⬢',
    System: '⌘',
    Web: '◆'
  };
  const key = Object.keys(mapping).find((item) => category.includes(item));
  return mapping[key] || '✶';
};

const renderProjects = (projects) => {
  workGrid.innerHTML = projects
    .map(
      (project) => `
      <a class="project-card card-reveal" href="./project.html?slug=${project.slug}">
        <div class="project-meta">
          <span class="tag">${project.category}</span>
          <span class="project-icon">${pickIcon(project.category)}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.subtitle}</p>
        <span class="media-arrow">→</span>
      </a>`
    )
    .join('');
};

const renderChips = (projects) => {
  const categories = ['All', ...new Set(projects.map((project) => project.category.split(' ')[0]))];
  chipGroup.innerHTML = categories
    .map(
      (category) => `
      <button class="chip ${category === activeCategory ? 'is-active' : ''}" data-category="${category}">
        ${category}
      </button>`
    )
    .join('');
};

const filterProjects = () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allProjects.filter((project) => {
    const matchCategory =
      activeCategory === 'All' || project.category.startsWith(activeCategory);
    const matchQuery =
      project.name.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.tags.join(' ').toLowerCase().includes(query);
    return matchCategory && matchQuery;
  });
  renderProjects(filtered);
};

const initObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.card-reveal').forEach((el) => observer.observe(el));
};

const handleChipClick = (event) => {
  const target = event.target.closest('.chip');
  if (!target) {
    return;
  }
  activeCategory = target.dataset.category;
  renderChips(allProjects);
  filterProjects();
  requestAnimationFrame(initObserver);
};

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    allProjects = data.projects;
    renderChips(allProjects);
    renderProjects(allProjects);
    yearEl.textContent = new Date().getFullYear();
    requestAnimationFrame(initObserver);
  })
  .catch(() => {
    workGrid.innerHTML = '<p>Unable to load projects right now.</p>';
  });

chipGroup.addEventListener('click', handleChipClick);
searchInput.addEventListener('input', filterProjects);
