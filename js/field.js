document.querySelectorAll(".field-wrapper .input").forEach((el) => {
  const wrapper = el.closest(".field-wrapper");

  const check = () => {
    const hasValue = el.value !== "" && el.value !== null;
    wrapper.classList.toggle(
      "active",
      hasValue || document.activeElement === el,
    );
  };

  el.addEventListener("focus", check);
  el.addEventListener("blur", check);
  el.addEventListener("input", check);
  el.addEventListener("change", check); // สำหรับ select

  check(); // เช็คตอน load ด้วย (กรณีมี value อยู่แล้ว)
});
