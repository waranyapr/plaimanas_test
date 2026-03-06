// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbarMenu");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Toggle menu on hamburger button click
  if (menuToggle) {
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      navbarMenu.classList.toggle("show");
      menuToggle.classList.toggle("active");

      // Change icon when menu is active
      if (menuToggle.classList.contains("active")) {
        hamburgerIcon.textContent = "✕";
      } else {
        hamburgerIcon.textContent = "☰";
      }
    });
  }

  // Close menu when a nav item is clicked
  const navItems = document.querySelectorAll(".menu-collapse.show .nav-item a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navbarMenu.classList.remove("show");
      menuToggle.classList.remove("active");
      hamburgerIcon.textContent = "☰";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".header")) {
      navbarMenu.classList.remove("show");
      menuToggle.classList.remove("active");
      hamburgerIcon.textContent = "☰";
    }
  });

  // Close menu on window resize if viewport becomes larger
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navbarMenu.classList.remove("show");
      menuToggle.classList.remove("active");
      hamburgerIcon.textContent = "☰";
    }
  });
});
