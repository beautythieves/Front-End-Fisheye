import {addLink, $page} from "../app.js";
import {photographerFactory} from "../factories/photographer.js";
import {getPhotographers} from "../utils/dataManager.js";


export default async function showIndexPage() {
  // Récupère les datas des photographes
  const photographers  = await getPhotographers();
  console.log (photographers);
  displayData(photographers);
}

async function displayData(photographers) {
  const photographersSection = document.createElement("div");
  photographersSection.className = "photographer_section";
  $page.appendChild(photographersSection);
// explications des 3 lignes?
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    // console.log(photographerModel.pagePath, photographerModel.templateCard,"!!!!");
    const $cardWithLink = addLink(photographerModel.pagePath, photographerModel.templateCard);
    photographersSection.appendChild($cardWithLink);
  });
}

