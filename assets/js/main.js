const dataUrl = './assets/data/site.json';

const featuredGrid = document.getElementById('featured-grid');
const projectsGrid = document.getElementById('projects-grid');
const extrasGrid = document.getElementById('extras-grid');
const mediaList = document.getElementById('media-list');
const yearEl = document.getElementById('year');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const modal = document.getElementById('contact-modal');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

const focusableSelectors =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex="0"]';
let lastFocusedElement = null;

const scrollToSection = (event) => {
  if (!event.target.getAttribute('href')) {
    return;
  }
  const href = event.target.getAttribute('href');
  if (!href.startsWith('#')) {
    return;
  }
  event.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

const toggleNav = () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

const openModal = () => {
  lastFocusedElement = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  const focusable = modal.querySelectorAll(focusableSelectors);
  if (focusable.length) {
    focusable[0].focus();
  }
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
  document.body.style.overflow = '';
};

const handleKeydown = (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }

  if (event.key === 'Tab' && modal.classList.contains('is-open')) {
    const focusable = [...modal.querySelectorAll(focusableSelectors)];
    if (!focusable.length) {
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
};

const renderFeatured = (featured) => {
  if (!featuredGrid) {
    return;
  }
  featuredGrid.innerHTML = featured
    .map(
      (item) => `
      <a class="feature-card ${item.color} card-reveal" href="./work/project.html?slug=${item.slug}">
        <span class="tag">Featured</span>
        <h3>${item.name}</h3>
        <p>${item.subtitle}</p>
        <span class="media-arrow">→</span>
      </a>`
    )
    .join('');
};

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
  if (!projectsGrid) {
    return;
  }
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
      <a class="project-card card-reveal" href="./work/project.html?slug=${project.slug}">
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

const renderExtras = (extras) => {
  if (!extrasGrid) {
    return;
  }
  extrasGrid.innerHTML = extras
    .map(
      (item) => `
      <a class="extra-card card-reveal" href="${item.href}" target="_blank" rel="noreferrer">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span class="media-arrow">→</span>
      </a>`
    )
    .join('');
};

const renderMedia = (media) => {
  if (!mediaList) {
    return;
  }
  mediaList.innerHTML = media
    .map(
      (item) => `
      <a class="media-item card-reveal" href="${item.href}" target="_blank" rel="noreferrer">
        <div>
          <strong>${item.title}</strong>
          <span>${item.desc}</span>
        </div>
        <span class="media-arrow">↗</span>
      </a>`
    )
    .join('');
};

const updateActiveLink = () => {
  const sections = ['capabilities', 'approach', 'about'];
  const scrollPosition = window.scrollY + 200;
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const link = document.querySelector(`a[href="#${sectionId}"]`);
    if (!section || !link) {
      return;
    }
    const inView =
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight;
    link.classList.toggle('is-active', inView);
  });
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
    { threshold: 0.15 }
  );

  document.querySelectorAll('.card-reveal').forEach((el) => observer.observe(el));
};

fetch(dataUrl)
  .then((response) => response.json())
  .then((data) => {
    renderFeatured(data.featured);
    renderProjects(data.projects);
    renderExtras(data.extras);
    renderMedia(data.media);
    yearEl.textContent = new Date().getFullYear();
    requestAnimationFrame(initObserver);
  })
  .catch(() => {
    if (featuredGrid) {
      featuredGrid.innerHTML = '<p>Unable to load featured work.</p>';
    }
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });

navLinkItems.forEach((link) => link.addEventListener('click', scrollToSection));
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

modalOpenButtons.forEach((button) => button.addEventListener('click', openModal));
modalCloseButtons.forEach((button) => button.addEventListener('click', closeModal));
window.addEventListener('keydown', handleKeydown);
