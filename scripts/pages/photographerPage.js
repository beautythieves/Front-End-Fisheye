import { $page, addLink } from "../app.js";
import {
  getMediaFromPhotographer,
  getPhotographer,
} from "../utils/dataManager.js";
import { photographerFactory } from "../factories/photographer.js";
import { displayModal } from "../utils/contactForm.js";



export default async function showPhotographerPage(id) {
  const media = await getMediaFromPhotographer(id);
  const photographer = await getPhotographer(id);
  console.log(photographer);
  console.log(media);
  // const photographer  = {};
  displayPhotographer(photographer, media);
}

async function displayPhotographer(photographer, media) {
  // Display the data on the page
  const photographerArticle = document.createElement("article");
  photographerArticle.className = "photographer_article";
  $page.appendChild(photographerArticle);

  const div1 = document.createElement("div");
  div1.className = "photographer_data";
  photographerArticle.appendChild(div1);
  const name = document.createElement("h1");
  name.className = "photographer_name";
  div1.appendChild(name);
  document.querySelector(".photographer_name").textContent = photographer.name;
  const location = document.createElement("p");
  location.className = "photographer_location";
  div1.appendChild(location);
  document.querySelector(".photographer_location").textContent =
    photographer.city + "," + " " + photographer.country;
  const moto = document.createElement("p");
  moto.className = "photographer_moto";
  div1.appendChild(moto);
  document.querySelector(".photographer_moto").textContent =
    photographer.tagline;

  const div2 = document.createElement("div");
  div2.className = "contact";
  photographerArticle.appendChild(div2);
  const button = document.createElement("button");
  button.className = "contact_button";
  div2.appendChild(button);
  button.textContent = "Contactez-moi";
  button.onclick = displayModal;

  const div3 = document.createElement("div");
  div3.className = "photographer_picId";
  photographerArticle.appendChild(div3);
  const picId = document.createElement("img");
  picId.className = "photographer_Id";
  div3.appendChild(picId);
  picId.src = photographer.portrait;
}

function encart(photographer) {
  photographer.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const $cardWithLink = addLink(
      photographerModel.pagePath,
      photographerModel.templatePagePhotographer
    );
    photographerArticle.appendChild($cardWithLink);
  });
}
