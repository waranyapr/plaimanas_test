const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

function toggleEditorial() {
  const item = document.getElementById("editorial-item");
  const sub = document.getElementById("editorial-sub");
  item.classList.toggle("active");
  sub.classList.toggle("open");
}
