// Menú hamburguesa
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});



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

// Slider simple
const track = document.querySelector(".slider-track");
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
let index = 0;

function updateSlider() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, i) => {
    // Mostrar solo 3 tarjetas alrededor del índice actual
    card.style.display = (Math.abs(i - index) <= 2) ? "block" : "none";
  });
}

if (track && prev && next) {
  updateSlider();

  prev.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    updateSlider();
  });

  next.addEventListener("click", () => {
    const total = document.querySelectorAll(".project-card").length;
    index = Math.min(total - 1, index + 1);
    updateSlider();
  });
}






