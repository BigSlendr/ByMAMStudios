const dataUrl = '../assets/data/site.json';

const workGrid = document.getElementById('work-grid');
const chipGroup = document.getElementById('chip-group');
const searchInput = document.getElementById('project-search');
const yearEl = document.getElementById('year');

const filterCategories = ['All', 'Infrastructure', 'Identity', 'Digital', 'Visual', 'Commerce'];

let allProjects = [];
let activeCategory = 'All';

const renderProjects = (projects) => {
  workGrid.innerHTML = projects
    .map((project) => {
      const tagLabel = (project.tags || []).join(' · ');
      const status = project.comingSoon ? '<span class="project-status">Coming Soon</span>' : '';
      const cardClass = `project-card card-reveal ${project.comingSoon ? 'is-disabled' : ''}`.trim();
      const href = project.comingSoon ? '#' : `./project.html?slug=${project.slug}`;
      return `
      <a class="${cardClass}" href="${href}" ${project.comingSoon ? 'aria-disabled="true" tabindex="-1"' : ''}>
        <div class="project-meta">
          <span class="tag">${project.category}</span>
        </div>
        <h3>${project.name}</h3>
        <p>${project.subtitle}</p>
        <p class="project-engagement">Engagement: ${project.engagement}</p>
        <p class="project-tags">${tagLabel}</p>
        ${status}
        <span class="media-arrow">→</span>
      </a>`;
    })
    .join('');
};

const setActiveChip = () => {
  chipGroup.querySelectorAll('.chip').forEach((chip) => {
    chip.classList.toggle('is-active', chip.dataset.category === activeCategory);
  });
};

const filterProjects = () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allProjects.filter((project) => {
    const tags = project.tags || [];
    const matchCategory = activeCategory === 'All' || tags.includes(activeCategory);
    const matchQuery =
      project.name.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      tags.join(' ').toLowerCase().includes(query) ||
      project.engagement.toLowerCase().includes(query);
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

  if (!filterCategories.includes(target.dataset.category)) {
    return;
  }

  activeCategory = target.dataset.category;
  setActiveChip();
  filterProjects();
  requestAnimationFrame(initObserver);
};

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    allProjects = data.projects;
    setActiveChip();
    renderProjects(allProjects);
    yearEl.textContent = new Date().getFullYear();
    requestAnimationFrame(initObserver);
  })
  .catch(() => {
    workGrid.innerHTML = '<p>Unable to load projects right now.</p>';
  });

chipGroup.addEventListener('click', handleChipClick);
searchInput.addEventListener('input', filterProjects);
