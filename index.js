const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
 
function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  navLinks.forEach(l => l.classList.remove('active'));
 
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
 
  navLinks.forEach(l => {
    if (l.dataset.section === id) l.classList.add('active');
  });
 
  document.getElementById('mainNav').classList.remove('open');
}
 
document.addEventListener('click', function(e) {
  const el = e.target.closest('[data-section]');
  if (!el) return;
  e.preventDefault();
  const sec = el.dataset.section;
  if (sec) showSection(sec);
});
 
// ===== MOBILE MENU =====
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});
 
// ===== ROLE TYPEWRITER =====
const roles = [
  'Full-Stack Developer',
  'Problem Solver',
  'CS (AI) Student',
  'Backend Engineer',
  'DSA Enthusiast',
];
 
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.getElementById('roleText');
 
function typeRole() {
  const current = roles[roleIndex];
 
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
 
  roleEl.textContent = current.substring(0, charIndex);
 
  let delay = isDeleting ? 60 : 100;
 
  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }
 
  setTimeout(typeRole, delay);
}
 
// ===== INIT =====
showSection('home');
setTimeout(typeRole, 600);
 