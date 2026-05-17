// ─── DATA ───
const skills = [
  {
    name: "Python",
    category: "Language",
    pct: 95,
    color: "#3776AB",
    svg: `<svg viewBox="0 0 128 128" width="26" height="26"><linearGradient id="py1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 737.045)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="py2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 737.045)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#py1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#py2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.318 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>`
  },
  {
    name: "Flask",
    category: "Backend",
    pct: 60,
    color: "#aaaaaa",
    svg: `<svg viewBox="0 0 128 128" width="26" height="26"><path fill="currentColor" d="M 42.234 89.754 C 39.374 93.704 34.964 97.334 30.354 97.334 C 26.504 97.334 25.064 95.254 25.064 91.594 C 25.064 84.364 30.094 75.754 36.664 75.754 C 40.584 75.754 42.664 77.884 42.664 81.524 C 42.664 84.234 41.664 86.904 40.234 89.754 Z M 55.584 46.454 C 53.064 46.454 50.904 44.884 50.904 42.544 C 50.904 39.794 52.944 37.724 55.584 37.724 C 58.154 37.724 59.804 39.344 59.804 42.024 C 59.804 44.624 57.674 46.454 55.584 46.454 Z M 33.144 74.624 C 24.174 74.624 17.064 82.154 17.064 91.524 C 17.064 97.884 20.984 102.194 27.224 102.194 C 31.234 102.194 35.524 100.174 38.374 96.874 C 39.584 100.574 42.664 102.194 47.034 102.194 C 59.914 102.194 67.144 90.834 67.144 79.524 C 67.144 76.644 66.654 73.784 65.914 71.954 C 63.674 72.424 61.364 72.694 59.014 72.694 C 46.714 72.694 33.144 64.754 33.144 74.624 Z M 59.014 70.484 C 72.404 70.484 83.654 61.324 83.654 48.534 C 83.654 40.884 79.154 35.634 72.404 35.634 C 70.154 35.634 67.774 36.274 65.244 37.974 C 61.714 32.784 56.774 30.004 51.184 30.004 C 43.364 30.004 37.024 35.834 37.024 43.384 C 37.024 57.084 46.784 70.484 59.014 70.484 Z"/></svg>`
  },
  {
    name: "Django",
    category: "Backend",
    pct: 80,
    color: "#44B78B",
    svg: `<svg viewBox="0 0 128 128" width="26" height="26"><path fill="#44B78B" d="M59 5h15.5v81c-7.9 1.5-13.7 2.1-20 2.1-18.8 0-28.6-8.5-28.6-24.8 0-15.7 10.4-25.9 26.5-25.9 2.5 0 4.4.2 6.6.8V5zm0 44.7c-1.8-.6-3.3-.8-5.2-.8-7.8 0-12.3 4.8-12.3 13.2 0 8.2 4.3 12.7 12.1 12.7 1.7 0 3.1-.1 5.4-.5V49.7zm30.2-6.4h15.5v52.4c0 18.1-1.3 26.8-5.2 34.3-3.6 7.2-8.4 11.7-18.3 16.7l-14.4-6.8c9.9-4.6 14.7-8.7 17.7-15 3.2-6.5 4.7-14.3 4.7-34.2V43.3zm0-38.3h15.5v16.5H89.2V5z"/></svg>`
  },
  {
    name: "Streamlit",
    category: "Frontend",
    pct: 90,
    color: "#FF4B4B",
    svg: `<svg viewBox="0 0 32 32" width="26" height="26"><path fill="#FF4B4B" d="M28.27 13.28 16.74 6.51a1.57 1.57 0 0 0-1.57 0L3.73 13.28a1.57 1.57 0 0 0 0 2.72l4.7 2.71-4.7 2.72a1.57 1.57 0 0 0 0 2.72l11.44 6.6a1.57 1.57 0 0 0 1.57 0l11.44-6.6a1.57 1.57 0 0 0 0-2.72l-4.7-2.72 4.7-2.71a1.57 1.57 0 0 0 0-2.72zm-12.27 9.3-6.87-3.97 6.87-3.97 6.87 3.97z"/></svg>`
  },
  {
    name: "LLM",
    category: "AI/ML",
    pct: 85,
    color: "#a78bfa",
    svg: `<svg viewBox="0 0 32 32" width="26" height="26"><circle cx="16" cy="16" r="5" fill="#a78bfa"/><circle cx="16" cy="5" r="2.5" fill="#a78bfa"/><circle cx="16" cy="27" r="2.5" fill="#a78bfa"/><circle cx="5" cy="16" r="2.5" fill="#a78bfa"/><circle cx="27" cy="16" r="2.5" fill="#a78bfa"/><circle cx="8.1" cy="8.1" r="2.5" fill="#a78bfa"/><circle cx="23.9" cy="23.9" r="2.5" fill="#a78bfa"/><circle cx="23.9" cy="8.1" r="2.5" fill="#a78bfa"/><circle cx="8.1" cy="23.9" r="2.5" fill="#a78bfa"/><line x1="16" y1="16" x2="16" y2="5" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="16" y2="27" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="5" y2="16" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="27" y2="16" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="8.1" y2="8.1" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="23.9" y2="23.9" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="23.9" y2="8.1" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/><line x1="16" y1="16" x2="8.1" y2="23.9" stroke="#a78bfa" stroke-width="1.2" opacity="0.5"/></svg>`
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    pct: 75,
    color: "#FF6F00",
    svg: `<svg viewBox="0 0 32 32" width="26" height="26"><path fill="#FF6F00" d="M16 3L4 9.5v13L16 29l12-6.5v-13zm0 2.31L25.5 10.5v11L16 26.69 6.5 21.5v-11zm-4 5.19v11l4 2.17V12.67l4 2.16v2.34l-4-2.16v2.32l4 2.16v2.34l-4-2.16V22l8-4.33V9.5z"/></svg>`
  },
  {
    name: "Keras",
    category: "AI/ML",
    pct: 70,
    color: "#D00000",
    svg: `<svg viewBox="0 0 32 32" width="26" height="26"><path fill="#D00000" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm-2 6h2v5.586l3.707-3.293 1.367 1.414L17 16.586V23h-2v-6.414l-4.074-3.879 1.367-1.414L16 14.586V9z"/></svg>`
  },
  {
    name: "Scikit-learn",
    category: "AI/ML",
    pct: 85,
    color: "#F7931E",
    svg: `<svg viewBox="0 0 32 32" width="26" height="26"><path fill="#F7931E" d="M21.5 8c-2.485 0-4.5 2.015-4.5 4.5 0 .906.27 1.748.73 2.453L7 26.414 8.414 28 19.047 17.27A4.474 4.474 0 0021.5 18c2.485 0 4.5-2.015 4.5-4.5S23.985 8 21.5 8zm0 7a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM10.5 6C8.015 6 6 8.015 6 10.5c0 2.027 1.32 3.742 3.146 4.354l.708-1.872A2.505 2.505 0 018 10.5 2.5 2.5 0 0110.5 8a2.5 2.5 0 012.354 1.646l1.872-.708A4.503 4.503 0 0010.5 6z"/></svg>`
  },
 {
  name: "SQL",
  category: "Database",
  pct: 88,
  color: "#4479A1",
  svg: `
    <svg viewBox="0 0 32 32" width="26" height="26">
      <ellipse
        cx="16"
        cy="9"
        rx="11"
        ry="5"
        fill="none"
        stroke="#4479A1"
        stroke-width="2"
      />
      <path
        fill="none"
        stroke="#4479A1"
        stroke-width="2"
        d="M5 9v6c0 2.761 4.925 5 11 5s11-2.239 11-5V9"
      />
      <path
        fill="none"
        stroke="#4479A1"
        stroke-width="2"
        d="M5 15v6c0 2.761 4.925 5 11 5s11-2.239 11-5v-6"
      />
    </svg>
  `
},
{
  name: "Automation",
  category: "Tools",
  pct: 80,
  color: "#34d399",
  svg: `
    <svg viewBox="0 0 32 32" width="26" height="26">
      <path
        fill="none"
        stroke="#34d399"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16 4v4M16 24v4M4 16h4M24 16h4M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83"
      />
      <circle cx="16" cy="16" r="4" fill="#34d399" opacity="0.9"/>
      <path
        fill="none"
        stroke="#34d399"
        stroke-width="1.5"
        stroke-linecap="round"
        d="M16 12v-2M20 16h2M16 20v2M12 16h-2"
        opacity="0.5"
      />
    </svg>
  `
}
];

// certifications
const certs = [
  { name: 'Python Crouse', issuer: 'Google', year: '2023', icon: '📊' },
  { name: 'Introduction to Data Science', issuer: 'Cisco', year: '2023', icon: '🎓' },
  { name: 'Introduction to Machine Learning', issuer: 'Datacamp', year: '2023', icon: '🐍' },
  { name: 'Machine Learning with Scikit learn', issuer: 'Datacamp', year: '2023', icon: '🏅' },
  { name: 'Advance Software Engineering', issuer: 'Forege', year: '2023', icon: '🤖' },
];

const projects = [
  
  {
    title: 'Text-to-SQL System',
    img: '/image/text-Sql.png',
    desc: 'Real-time Text-to-SQL engine using Angular + FastAPI/Flask, powered by Gemini LLM. Features RAG pipeline with Haystack BM25Retriever, voice-to-text, Excel logging, and SQLAlchemy connection pooling.',
    tags: ['Streamlit','FastAPI','Gemini','RAG','SQLAlchemy'],
    links: []
  },
  {
    title: 'Smart PDF Search',
    img: 'https://res.cloudinary.com/dywmtyf25/image/upload/v1769232604/77609b9d-4e8d-46b7-92f6-d8a0b3cf4a87.png',
    desc: 'AI-powered document search that indexes PDFs into a vector database for fast semantic search. Users can query documents and get context-aware answers via an AI assistant.',
    tags: ['Django','Streamlit','Gemini','RAG','MySQL','Qdrant'],
    links: []
  },
  {
    title: 'Face Recognition Attendance System',
    img: 'https://res.cloudinary.com/dywmtyf25/image/upload/v1769232632/9e1bcaef-7d7e-4a50-8272-8adb9f0dbe6c.png',
    desc: 'AI-driven attendance tracking using real-time face recognition. Automates daily check-ins, eliminates manual errors, and stores attendance data for reporting.',
    tags: ['Python','OpenCV','deepface','Face Recognition','AI'],
    links: []
  },
  // {
  //   title: 'CV Analysis & Ranking System',
  //   img: '/image/CV_ranking.png',
  //   desc: 'AI-powered CV Analysis & Ranking System using React + FastAPI. Features NLP-based skill extraction with spaCy/NLTK, JD-to-resume match scoring, automated shortlisting, bias-aware filters, and Excel export.',
  //   links: []
  // },
  {
    title: 'CV Analysis & Ranking System',
    img: '/image/CV_ranking.png',
    desc: 'AI-powered CV Analysis & Ranking System using React + FastAPI. Features NLP-based skill extraction with spaCy/NLTK, JD-to-resume match scoring, automated shortlisting, bias-aware filters, and Excel export.',
    tags: ['Next.js','React','FastAPI','Model Training'],
    links: []
  },
  {
    title: 'AI-Agentic Chatbot',
    img: '/image/Charbot.png',
    desc: "Anproduction-ready AI agent chatbot with internet search capabilities, utilizing LangGraph for reasoning, FastAPI for backend architecture, and Streamlit for a flexible user interface.",
    tags: ['Streamlit','Chroma','LangGraph','OpenAI','Groq','Tavily'],
    links: []
  },
];

// ─── RENDER SKILLS ───
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'skill-card reveal';
  card.style.transitionDelay = (i * 0.06) + 's';
  card.style.setProperty('--skill-color', s.color + '44');
  card.innerHTML = `
    <div class="skill-top">
      <div class="skill-icon-wrap" style="color:${s.color}">${s.svg}</div>
      <div class="skill-meta">
        <div class="skill-name">${s.name}</div>
        <div class="skill-category">${s.category}</div>
      </div>
    </div>
    <div class="skill-bar-row">
      <div class="skill-bar-bg"><div class="skill-bar" data-pct="${s.pct}" style="background:linear-gradient(90deg,${s.color}cc,${s.color})"></div></div>
      <div class="skill-pct" aria-label="${s.pct}%">${s.pct}%</div>
    </div>
  `;
  skillsGrid.appendChild(card);
});

// ─── RENDER CERTS ───
const certsList = document.getElementById('certsList');
certs.forEach((c, i) => {
  const item = document.createElement('div');
  item.className = 'cert-item reveal';
  item.style.transitionDelay = (i * 0.08) + 's';
  item.innerHTML = `
    <div class="cert-icon">${c.icon}</div>
    <div class="cert-body">
      <div class="cert-name">${c.name}</div>
      <div class="cert-meta">${c.issuer}</div>
    </div>
    <span class="cert-badge">${c.year}</span>
  `;
  certsList.appendChild(item);
});

// ─── RENDER PROJECTS ───
/* ─────────────────────────
   PROJECTS CAROUSEL
───────────────────────── */

const projectsGrid = document.getElementById('projectsGrid');

const carouselDots =
  document.getElementById('carouselDots');

const projectsCarousel =
  document.getElementById('projectsCarousel');

let currentProject = 0;

let autoSlide;

/* ─── CREATE PROJECTS ─── */

projects.forEach((project, index) => {

  /* SLIDE */
  const slide = document.createElement('div');

  slide.className = 'project-slide';

  /* CARD */
  const card = document.createElement('div');

  card.className = 'project-card reveal';

  /* LINKS */
  const linksHTML = project.links.length
    ? project.links.map(link => `
        <a
          href="${link.url}"
          class="project-link"
          target="_blank"
        >
          ${link.label}
        </a>
      `).join('')
    : '';

  /* CARD HTML */
  card.innerHTML = `
    <img
      class="project-img"
      src="${project.img}"
      alt="${project.title}"
      loading="lazy"
    />

    <div class="project-body">

      <div class="project-title">
        ${project.title}
      </div>

      <p class="project-desc">
        ${project.desc}
      </p>

      <div class="tags">
        ${project.tags.map(tag =>
          `<span class="tag">${tag}</span>`
        ).join('')}
      </div>

      ${
        linksHTML
          ? `<div class="project-links">${linksHTML}</div>`
          : ''
      }

    </div>
  `;

  slide.appendChild(card);

  projectsGrid.appendChild(slide);

  /* DOTS */
  const dot = document.createElement('button');

  dot.className =
    `carousel-dot ${index === 0 ? 'active' : ''}`;

  dot.addEventListener('click', () => {
    moveToSlide(index);
  });

  carouselDots.appendChild(dot);

});

/* ─── VARIABLES ─── */

const totalProjects = projects.length;

const dots =
  document.querySelectorAll('.carousel-dot');

/* ─── UPDATE CAROUSEL ─── */

function updateCarousel() {

  const slide =
    document.querySelector('.project-slide');

  if (!slide) return;

  const slideWidth =
    slide.offsetWidth + 24;

  projectsGrid.style.transform =
    `translateX(-${currentProject * slideWidth}px)`;

  /* ACTIVE DOT */
  dots.forEach((dot, index) => {

    dot.classList.toggle(
      'active',
      index === currentProject
    );

  });

}

/* ─── MOVE TO SLIDE ─── */

function moveToSlide(index) {

  currentProject =
    (index + totalProjects) % totalProjects;

  updateCarousel();

}

/* ─── NEXT ─── */

function nextProject() {

  moveToSlide(currentProject + 1);

}

/* ─── PREVIOUS ─── */

function prevProject() {

  moveToSlide(currentProject - 1);

}

/* ─── BUTTON EVENTS ─── */

document
  .getElementById('nextProject')
  .addEventListener('click', nextProject);

document
  .getElementById('prevProject')
  .addEventListener('click', prevProject);

/* ─── AUTO SLIDE ─── */

function startAutoSlide() {

  autoSlide = setInterval(() => {

    nextProject();

  }, 4000);

}

function stopAutoSlide() {

  clearInterval(autoSlide);

}

/* ─── PAUSE ON HOVER ─── */

projectsCarousel.addEventListener(
  'mouseenter',
  stopAutoSlide
);

projectsCarousel.addEventListener(
  'mouseleave',
  startAutoSlide
);

/* ─── RESIZE FIX ─── */

window.addEventListener(
  'resize',
  updateCarousel
);

/* ─── INIT ─── */

updateCarousel();

startAutoSlide();

// ─── TYPEWRITER ───
const roles = ['A Python Developer', 'An AI/ML Engineer'];
let ri = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const current = roles[ri];
  if (!deleting) {
    tw.innerHTML = current.slice(0, ++ci) + '<span class="cursor"></span>';
    if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    tw.innerHTML = current.slice(0, --ci) + '<span class="cursor"></span>';
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 55 : 90);
}
setTimeout(type, 900);

// ─── INTERSECTION OBSERVER ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  hamburger.classList.add('open');
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  hamburger.classList.remove('open');
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('open') ? closeDrawer() : openDrawer();
});
drawerOverlay.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-nav-link, .drawer-hire').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ─── ACTIVE NAV LINK ON SCROLL ───
const sections = ['home','skills','certifications','projects','contact','resume'];
const navLinks = document.querySelectorAll('.nav-link');
const drawerLinks = document.querySelectorAll('.drawer-nav-link');

function setActive(id) {
  navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  drawerLinks.forEach(a => a.classList.toggle('active', a.dataset.section === id));
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { threshold: 0.35 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// ─── NAV SCROLL SHRINK ───
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    mainNav.style.padding = '0.6rem 3rem';
    mainNav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.25)';
  } else {
    mainNav.style.padding = '1rem 3rem';
    mainNav.style.boxShadow = 'none';
  }
}, { passive: true });

// ─── THEME TOGGLE ───
const toggle = document.getElementById('themeToggle');
let dark = true;
toggle.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  toggle.textContent = dark ? '🌙' : '☀️';
});

// ─── CONTACT FORM ───
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');

  const name    = form.querySelector('input[type="text"]').value.trim();
  const email   = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
  const body = encodeURIComponent('Hi Khalid,\n\n' + message + '\n\n---\nFrom: ' + name + '\nReply-to: ' + email);

  window.location.href = 'mailto:khalid.mldev@gmail.com?subject=' + subject + '&body=' + body;

  btn.textContent = '✓ Opening Mail…';
  btn.style.background = 'var(--green)';
  setTimeout(() => {
    btn.textContent = 'Send Message ↗';
    btn.style.background = '';
    form.reset();
  }, 3000);
}