// ===== MOBILE NAVBAR TOGGLE =====
const navLinks = document.querySelector('.nav-links');
const menuButton = document.createElement('div');
menuButton.classList.add('menu-btn');
menuButton.innerHTML = '&#9776;'; // hamburger icon
document.querySelector('.navbar').appendChild(menuButton);

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== SMOOTH SCROLL EFFECT =====
const links = document.querySelectorAll('.nav-links a');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    navLinks.classList.remove('active'); // close menu after clicking
  });
}

// ===== SMALL ANIMATION ON SCROLL =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

