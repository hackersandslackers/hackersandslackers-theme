import "../scss/post.scss";
import Prism from "prismjs";
import * as basicLightbox from "basiclightbox";
import axios from 'axios';

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

function getPostMetaData() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '');
  const postEndpoint = new URL("https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug);

  const params = new URLSearchParams({
    key: '3033ed0ed2e97aa9fbc337c87c',
    fields: 'id,title,slug',
    include: 'tags',
   });

  axios.get(postEndpoint, params)
    .then(function (response) {
      const postTags = JSON.stringify(response.data.posts[0].tags);

      const seriesLength = postTags.length;
      console.log("seriesLength = " + seriesLength);

      const enumeratedPost = postTags.findIndex((tag) => tag.visibility === "internal");
      console.log("enumeratedPost = " + enumeratedPost);

      const seriesTag = postTags.filter((tag) => tag.visibility === "internal");
      console.log("seriesTag = " + seriesTag);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function (response) {
      // return response.data.posts[0];
    });
}


function createSeriesNextPrevLinks() {
  const postMetadata = getPostMetaData();
  console.log("postMetadata = " + postMetadata);
}

window.addEventListener("load", function () {
  // Lightbox functionality for post images
  createLightboxImageListeners();

  // Create Series Next/Previous "Post" links for series posts
  createSeriesNextPrevLinks();
});
