document.getElementById("hero-container").innerHTML = `
  
  <div class="hero-wrapper">
  
   <div class="hero">
      <img src="assets/images/PLAIMANAS.png" class="hero-image-title">
    </div>
  </div>
`;

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  if (window.scrollY > 50) {
    hero.classList.add("shrink");
  } else {
    hero.classList.remove("shrink");
  }
});
