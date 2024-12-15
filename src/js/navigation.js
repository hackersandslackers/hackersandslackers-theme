export function mainNavigationScroll() {
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
}

export function hamburgerMenu() {
  // Hamburger button
  const hamburger = document.querySelector("button.hamburger");
  const mobileMenuButton = document.querySelector(".mobile-menu");

  // Expandable sub-navigation
  const mobileSeriesLink = document.getElementById("mobile-nav-series-links");
  const mobileTagLink = document.getElementById("mobile-nav-tags-links");

  // Icons of expandable sub-navigation elements
  let mobileTagsNavIcon = document.querySelector(".nav-tags .fa-angle-up");
  let mobileSeriesNavIcon = document.querySelector(".nav-series .fa-angle-up");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileMenuButton.classList.toggle("active");
  });

  // Mobile expandable Series menu
  const mobileSeriesNav = document.querySelector(".nav-series .mobile-nav-links-list");
  if (mobileSeriesNav != null) {
    mobileSeriesLink.addEventListener("click", function () {
      mobileSeriesNav.classList.toggle("active");
      mobileSeriesNavIcon.classList.toggle("flip-vertically");
    });
  }


  // Mobile expandable Tags menu
  const mobileTagNav = document.querySelector(".nav-tag .mobile-nav-links-list");
  if (mobileTagNav != null) {
    mobileTagLink.addEventListener("click", function () {
      mobileTagNav.classList.toggle("active");
      mobileTagsNavIcon.classList.toggle("flip-vertically");
    });
  }
  
}
