import photographerPage from "./pages/photographerPage.js";
import indexPage from "./pages/index.js";
/**
 * this function is used to add a link to a target
 * @param   {string}  target   [the target of the link]
 * @param   {string}  content  [content of the link]
 * @return  {HTMLElement}   link        [the link element]
 */
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
/**
 * @description This function is used to change the page
 *  according to the hash
 */
function changePage() {
  // get the hash
  // if the hash is empty, display the index page
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
