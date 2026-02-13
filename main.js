document.addEventListener("DOMContentLoaded", () => {
  const flower = document.getElementById("flower");
  const bloomBtn = document.getElementById("bloomBtn");

  if (!flower || !bloomBtn) return;

  const restartAnimation = () => {
    const animatedParts = flower.querySelectorAll(
      ".petal, .stem, .leaf, .flower-center"
    );

    animatedParts.forEach((el) => {
      el.style.animation = "none";
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.style.animation = "";
    });
  };

  bloomBtn.addEventListener("click", () => {
    restartAnimation();
  });

  // nice little entrance delay
  setTimeout(() => {
    flower.classList.add("flower-ready");
  }, 80);
});