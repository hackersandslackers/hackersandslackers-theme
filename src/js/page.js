import "../scss/page.scss";
import "../scss/series-all.scss";
import "../scss/series-detail.scss";
import "../scss/about.scss";

window.addEventListener("load", function () {
  fixGithubUrls();
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
