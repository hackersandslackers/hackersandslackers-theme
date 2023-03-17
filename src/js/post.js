import "../scss/post.scss";
import Prism from "prismjs";
import * as basicLightbox from "basiclightbox";

Prism.highlightAll();

window.addEventListener("load", function () {
  // Lightbox functionality for post images
  const postBody = document.querySelector(".post-template");
  let images = postBody.querySelectorAll(".kg-image-card img");
  if (images.length > 0) {
    for (let image in images) {
      if (image < images.length) {
        images[image].onclick = () => {
          const imageSource = images[image].getAttribute("src");
          const imageAlt = images[image].getAttribute("alt");
          let imageOverlay = `<img src="${imageSource}" alt="${imageAlt}" />`;
          const instance = basicLightbox
            .create(imageOverlay, {
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
});
