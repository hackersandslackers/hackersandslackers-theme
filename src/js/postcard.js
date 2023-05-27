export function authorDisplayName() {

  window.addEventListener("resize", function () {
    clearTimeout(timeout);
    let width = window.innerWidth;
    if (width < 600) {
      shortenAuthorName();
    }
    timeout = setTimeout(shortenAuthorName, 200);
  });
}

function shortenAuthorName() {
  post_author = document.querySelectorAll(".post-card-author-name");
  for (author in post_author) {
    console.log(author.innerText);
  }
}
