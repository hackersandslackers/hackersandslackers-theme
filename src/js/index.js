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
  const mobileMenuButton = document.querySelector(".mobile-menu");
  const mobileSeriesNav = document.querySelector(".mobile-series-links");
  let mobileSeriesNavIcon = document.querySelector("fa-angle-down");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");
  });

  mobileMenuButton.addEventListener("click", function () {
    mobileSeriesNavIcon = document.querySelector("fa-angle-down");
    mobileSeriesNav.classList.toggle("active");
    mobileSeriesNavIcon.classList.toggle("fa-flip");
  });
});
