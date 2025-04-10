let lastScrollTop = 0;
const navbar = document.getElementById("mainNav");
let isNavigatingToAnchor = false;

// Detectar clics en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    isNavigatingToAnchor = true;
    setTimeout(() => {
      isNavigatingToAnchor = false;
    }, 1000); // tiempo de espera antes de volver a permitir ocultar
  });
});

// Ocultar el navbar al hacer scroll hacia abajo
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (isNavigatingToAnchor) return;

  if (scrollTop > lastScrollTop && scrollTop > 60) {
    // Scroll hacia abajo → ocultar navbar
    navbar.classList.add("hidden");
  } else {
    // Scroll hacia arriba → mostrar navbar
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

// Cerrar el menú hamburguesa al hacer click en un enlace dentro del navbar
document.querySelectorAll('#navbarNav .nav-link').forEach(function (navLink) {
navLink.addEventListener('click', function () {
  const navbarCollapse = document.getElementById('navbarNav');
  const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
  if (bsCollapse) {
    bsCollapse.hide();
  }
});
});

