import "../scss/post.scss";
import Prism from "prismjs";
import * as basicLightbox from "basiclightbox";

Prism.highlightAll();

function createLightboxImageListeners() {
  const postBody = document.querySelector(".post-template");
  const images = document.querySelectorAll(".post-template .kg-image-card img");
  if (images.length > 0) {
    for (let imageNum in images) {
      if (imageNum < images.length) {
        const image = images[imageNum];
        image.onclick = () => {
          const imageSource = image.src;
          const imageAlt = image.alt;
          const lightboxOverlay = `
            <div class="lightbox-wrapper">
              <img src="${imageSource}" alt="${imageAlt}" />
            </div>`;
          const instance = basicLightbox
            .create(lightboxOverlay, {
              onShow: (instance) => {
                instance.element().style.opacity = 1;
                postBody.classList.add("lightbox-wrapper");
              },
              onClose: (instance) => {
                instance.element().style.opacity = 0;
                postBody.classList.remove("lightbox-wrapper");
              },
            })
            .show();
        };
      }
    }
  }
}


function createSeriesNextPrevLinks() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '');
  const postDataEndpoint = "https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug;
  console.log("postDataEndpoint = " + postDataEndpoint);

}

window.addEventListener("load", function () {
  // Lightbox functionality for post images
  createLightboxImageListeners();

  // Create Series Next/Previous "Post" links for series posts
  createSeriesNextPrevLinks();
});
