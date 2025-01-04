import "../scss/post.scss";
import Prism from "prismjs";
import * as basicLightbox from "basiclightbox";
import { getRequest } from "./clients.js";

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

async function getSeriesTag(postMetadata) {
  const tagsArray = await postMetadata["posts"]
  return await tagsArray.find(({ visibility }) => visibility === "internal");
}

async function getPostMetaData() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '');
  const postEndpoint = new URL("https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug);
  postEndpoint.searchParams.append('key', '3033ed0ed2e97aa9fbc337c87c');
  postEndpoint.searchParams.append('fields', 'id,title,slug');
  postEndpoint.searchParams.append('include', 'tags');
  const res = await fetch(postEndpoint);
  return await res.json();
}


function createSeriesNextPrevLinks() {
  const postMetadata = getPostMetaData();
  const seriesTag = getSeriesTag(postMetadata);
  console.log("getSeriesTag = " + seriesTag);
}

window.addEventListener("load", function () {
  // Lightbox functionality for post images
  createLightboxImageListeners();

  // Create Series Next/Previous "Post" links for series posts
  createSeriesNextPrevLinks();
});
