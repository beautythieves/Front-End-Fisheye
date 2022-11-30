import {addLink, $page} from "../app.js";
import {photographerFactory} from "../factories/photographer.js";

async function getPhotographers() {
  try {
    const response = await fetch("/data/photographers.json");
    const json = await response.json();
    console.table(json);
    return  {photographers : json.photographers};
  } catch (error) {
    console.log("Request Failed", error);
  }
}

export default async function showIndexPage() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

async function displayData(photographers) {
  const photographersSection = document.createElement("div");
  photographersSection.className = "photographer_section";
  $page.appendChild(photographersSection);
// explications des 3 lignes?
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const $cardWithLink = addLink(photographerModel.pagePath, photographerModel.templateCard);
    photographersSection.appendChild($cardWithLink);
  });
}

