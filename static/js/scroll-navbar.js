let lastScrollTop = 0;
const navbar = document.getElementById("mainNav");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop === 0) {
    navbar.classList.remove("is-visible", "is-hidden");
  } else if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.remove("is-visible");
    navbar.classList.add("is-hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("is-hidden");
    navbar.classList.add("is-visible");
  }

  lastScrollTop = scrollTop;
});
