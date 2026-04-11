// ── SECTION SWITCHING ──
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[data-section]');

function showSection(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.remove('yes');
      sec.classList.add('yesactive');
    } else {
      sec.classList.remove('yesactive');
      sec.classList.add('yes');
    }
  });

  // Update active nav link
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === id);
  });
}

// Nav link clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// "View Projects" button in hero
document.querySelectorAll('[data-section="projects"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('projects');
  });
});

// Set home as default active on load
showSection('home');