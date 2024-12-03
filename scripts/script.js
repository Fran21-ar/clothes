const header = document.querySelector('.header');

// Detectar el scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Si el scroll es mayor a 50px
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function redirigir() {
  window.location.href = './pages/seccion.remeras.html';  // Redirige a otra_pagina.html
}