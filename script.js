// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Tema claro/oscuro
const saved = localStorage.getItem('theme');
if (saved) {
  document.documentElement.setAttribute("data-theme", saved);
}

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem('theme', nextTheme);
});


// Slider simple (si decides hacerlo horizontal)
const track = document.querySelector('.slider-track');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
let index = 0;

function updateSlider() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.display = (Math.abs(i - index) <= 2) ? 'block' : 'none';
  });
}
if (track && prev && next) {
  updateSlider();
  prev.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    updateSlider();
  });
  next.addEventListener('click', () => {
    const total = document.querySelectorAll('.project-card').length;
    index = Math.min(total - 1, index + 1);
    updateSlider();
  });
}
