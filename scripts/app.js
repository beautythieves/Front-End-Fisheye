
import photographerPage from "./pages/photographerPage.js";
import indexPage from "./pages/index.js";

function addLink(target, content) {
  const link = document.createElement("a");
  //ajout de la classe pour modif dans le css
  link.className = "link_photographers";
  link.href = target;
  link.innerHTML = content;
  console.log(content);
  return link;
}

window.addEventListener("hashchange", changePage);
const $page = document.querySelector("main");

function changePage() {
  let page = window.location.hash.slice(1);
  if (page === "") {
    indexPage($page);
  }
  else {
    page = page.split("/");
    if (page[0] === "photographer") {
        photographerPage(page[1]);
    }
  }
}
changePage();

export {
    addLink,
    $page
}