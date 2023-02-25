import "../scss/global.scss";

window.addEventListener("load", function () {
  const slider = document.querySelector(".dragscroll");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });

  const hamburger = document.querySelector("button.hamburger");
  const mobilemenu = document.querySelector(".mobile-menu");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobilemenu.classList.toggle("active");
  });
});
