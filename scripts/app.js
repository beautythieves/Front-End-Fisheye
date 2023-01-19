import photographerPage from "./pages/photographerPage.js";
import indexPage from "./pages/index.js";

function addLink(target, content) {
  const link = document.createElement("a");
  link.className = "link_photographers";
  link.href = target;
  link.innerHTML = content;
  return link;
}
// when the hash changes, the page changes
window.addEventListener("hashchange", changePage);
const $page = document.querySelector("#main");
// function to change the page
function changePage() {
  // slice for the # in the hash
  let page = window.location.hash.slice(1);
  $page.innerText = "";
  if (page === "") {
    indexPage();
  } else {
    page = page.split("/");
    if (page[0] === "photographer") {
      photographerPage(+page[1]);
    }
  }
}
changePage();

export { addLink, $page };
