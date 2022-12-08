// import de la fonction showPhotographerPage renommée
// photograherPage (possible car default)

import photographerPage from "./pages/photographerPage.js";

// import de showIndexPage renommée indexPage
import indexPage from "./pages/index.js";
// ajout import contactform
// import { displayModal, closeModal } from "./utils/contactForm.js";

// displayModal();
// // event onclick modal
// console.log (displayModal)
// btn.onclick= displayModal() ;


function addLink(target, content) {
  const link = document.createElement("a");
  //ajout de la classe pour modif dans le css
  link.className = "link_photographers";
  link.href = target;
  link.innerHTML = content;
  return link;
}
// quand le hasch change, changement de page
window.addEventListener("hashchange", changePage);
const $page = document.querySelector("#main");
// ajout de affichage de page selon url
function changePage() {
  // slice pour casser le tableau et "enlever le #"
  let page = window.location.hash.slice(1);
  $page.innerText=""
  if (page === "") {
    indexPage();
  }
  else {
    page = page.split("/");
    // explications?
    if (page[0] === "photographer") {
        photographerPage(page[1]);
    }
  }
}
changePage();

console.log(photographerPage)
export {
    addLink,
    $page
}