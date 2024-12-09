import "../scss/page.scss";
import "../scss/series-all.scss";
import "../scss/series-detail.scss";
import "../scss/about.scss";

window.addEventListener("load", function () {
  fixGithubUrls();
  fixTwitterUrls();
});

// Workaround to repurpose Ghost Author `Facebook` links as `GitHub` links
function fixGithubUrls() {
  const githubLinks = document.querySelectorAll(
    ".author-profile-social-link.github"
  );

  if (githubLinks != null) {
    githubLinks.forEach((link) => {
      const githubUrl = link.href.replace("https://www.facebook.com/", "");
      link.href = githubUrl;
    });
  }
}

// Workaround to repurpose Ghost Author `Twitter (x)` links as `BlueSky` links
function fixTwitterUrls() {
  const twitterUrls = document.querySelectorAll(
    ".author-profile-social-link.twitter"
  );

  if (twitterUrls != null) {
    twitterUrls.forEach((link) => {
      const twitterUrl = link.href.replace("https://twitter.com/", "");
      const urlBuilder = ["https://bsky.app/profile/", twitterUrl, ".bsky.social"]
      link.href = urlBuilder.join().replaceAll(",", "");
    });
  }
}
