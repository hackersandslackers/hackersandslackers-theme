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

/*
async function getData() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '').replace('/', '');
  const url = "https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug + "/?key=7c851365b774ed6b14a3bd692f&fields=id,title,slug&include=tags";
  console.log("currentSlug = " + currentSlug);

  const request = new Request(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Version": "v5.0",
    },
  });

    await fetch(request).then((response) => {
      const result = response.json();
      console.log(result);
      return result;
    }).catch(function (error) {
      // handle error
      console.log(error);
    }).finally(function (response) {
      // return response.data.posts[0];
    });
}
*/

async function getPostMetaData() {
  const currentSlug = window.location.pathname.slice('/').replace('/', '').replace('/', '');
  const url = "https://hackersandslackers.com/ghost/api/content/posts/slug/" + currentSlug + "/?key=7c851365b774ed6b14a3bd692f&fields=id,title,slug&include=tags";
  console.log("currentSlug = " + currentSlug);

  /*
  const params = new URLSearchParams({
    key: '7c851365b774ed6b14a3bd692f',
    fields: 'id,title,slug',
    include: 'tags'
   });
   */

   const request = new Request(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept-Version": "v5.0",
    },
  })

    const response = await fetch(request);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const post = await response.json();
    console.log("response = " + response);
    console.log("json = " + post);

    return post;

    /*
    const seriesLength = postTags.length;
    console.log("seriesLength = " + seriesLength);

    const enumeratedPost = postTags.findIndex((tag) => tag.visibility === "internal");
    console.log("enumeratedPost = " + enumeratedPost);

    const seriesTag = postTags.filter((tag) => tag.visibility === "internal");
    console.log("seriesTag = " + seriesTag);
    */
    
}


function createSeriesNextPrevLinks(post) {
  console.log("post = " + post);
  /*const dsfsdf = data.post;

  const postTags = post.tags;
  console.log("postTags = " + postTags);

  const seriesLength = postTags.length;
  console.log("seriesLength = " + seriesLength);

  const enumeratedPost = postTags.findIndex((tag) => tag.visibility === "internal");
  console.log("enumeratedPost = " + enumeratedPost);

  const seriesTag = postTags.filter((tag) => tag.visibility === "internal");
  console.log("seriesTag = " + seriesTag);*/
}



window.addEventListener("load", function () {
  // Lightbox functionality for post images
  createLightboxImageListeners();

  
});

// Create Series Next/Previous "Post" links for series posts
/*getPostMetaData().then((post) => {
  createSeriesNextPrevLinks(post)
});
*/