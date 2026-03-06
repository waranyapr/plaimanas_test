document.querySelectorAll(".language-dropdown").forEach((dropdown) => {
  const selected = dropdown.querySelector(".selected-option");
  const options = dropdown.querySelectorAll(".dropdown-item");

  options.forEach((item) => {
    if (
      item.textContent.trim() === selected.textContent.replace("▾", "").trim()
    ) {
      item.style.display = "none";
    }
  });

  options.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedText = item.textContent.trim();

      selected.innerHTML = `${selectedText} <span class="arrow">▾</span>`;

      options.forEach((opt) => {
        opt.style.display =
          opt.textContent.trim() === selectedText ? "none" : "block";
      });
    });
  });
});
