import "../scss/post.scss";
import Prism from "prismjs";
import * as basicLightbox from "basiclightbox";
import axios, {isCancel, AxiosError} from 'axios';

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

async function getData() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '').replace('/', '');
  const url = new URL("https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug);
  console.log("currentSlug = " + currentSlug);
  console.log("IM GOING TO KILL MYSELF");

  const httpHeaders = new Headers({
    "Content-Type": "application/json",
    "Accept-Version": "v5.0",
  });

  const params = new URLSearchParams({
    key: '7c851365b774ed6b14a3bd692f',
    fields: 'id,title,slug',
    include: 'tags'
   });

  const request = new Request(url, {
    method: 'GET',
    params: params,
    headers: httpHeaders,
  });

    const fetchRequest = await fetch(request);
    fetchRequest.then((response) => {
      return response.json();
    }).then(posts =>{
      console.log(posts);
      return posts;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }).finally(function (response) {
      // return response.data.posts[0];
    });
}
/*
function getPostMetaData() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '').replace('/', '');
  const postEndpoint = "https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug;
  console.log("currentSlug = " + currentSlug);

  const httpHeaders = new Headers({
    "Content-Type": "application/json",
    "Accept-Version": "v5.0",
  });

  const params = new URLSearchParams({
    key: '7c851365b774ed6b14a3bd692f',
    fields: 'id,title,slug',
    include: 'tags'
   });

  fetch(postEndpoint, {
    method: 'GET',
    params: params,
    headers: httpHeaders,
  })
    .then(function (response) {
      const resp = response.data;
      console.log("response = " + response);
      console.log("resp = " + resp);

      const post = response.data.post;
      console.log("post = " + post);

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
}
*/

function createSeriesNextPrevLinks() {
  const postMetadata = getData();
  console.log("postMetadata = " + postMetadata);
}

window.addEventListener("load", function () {
  // Lightbox functionality for post images
  createLightboxImageListeners();

  // Create Series Next/Previous "Post" links for series posts
  createSeriesNextPrevLinks();
});
