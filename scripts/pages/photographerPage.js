import { $page, addLink } from "../app.js";
import {
  filteredMedia,
  getPhotographer,
  getPhotographers,
  getAllData,
} from "../utils/dataManager.js";
import { mediaFactory } from "../factories/media.js";
import { displayModal } from "../utils/contactForm.js";
import {closeLightbox} from "../utils/lightbox.js";

//
console.log(mediaFactory.templateMedia);

export default async function showPhotographerPage(id) {
  const media = await filteredMedia(id);
  const photographer = await getPhotographer(id);

  // const photographer  = {};
  displayPhotographer(photographer, media);
}

async function displayPhotographer(photographer, media) {
  //hide header h1 "nos photographes"
  document.querySelector("#h1").style.display = "none";

  // add link to index page on the logo Fisheye in the header
  const logo = document.querySelector(".logo");
  logo.onclick = function () {
    window.location.hash = "";
    logo.href = "#";
    logo.setAttribute = ("aria-label", "Accueil");
    logo.setAttribute = ("title", "Accueil");
    logo.setAttribute = ("alt", "page d'Accueil");
    logo.addEventListener("mouseover", function () {
      logo.style.cursor = "pointer";
    });
  };

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
  picId.src = `assets/photographers/${photographer.portrait}`;
  picId.alt = "portrait de ${photographer.name}";
  /*
  const picture = `assets/photographers/${portrait}`;
  //affichage photo phographe?
  picId.src = picture;*/
  console.log(media);

//zone de filtre images

  const div4 = document.createElement("div");
  div4.setAttribute("id", "container_sortBy");
  div4.innerHTML = /*html*/ `
    <section class= "article_media_sortBy">
    <div id= "title_trier_par">
      <h3 id="trier_par">Trier par</h3>
    </div>
    <div class="dropdownMenu">
      <div class="filter-select open">
        <a href="#" role="button" class="filter-select__trigger" aria-controls="filter-options" aria-haspopup="listbox" aria-label="Trier par" aria-expanded="true">
            <span>Popularité</span>
            <div class="arrow"></div>
        </a>
        <div class="filter-options-container" role="listbox" id="filter-options">
            <a href="#" class="filter-option selected" data-value="popularite" aria-selected="true" aria-label="Trier par popularité" role="option">Popularité</a>
            <a href="#" class="filter-option" data-value="date" aria-selected="true" aria-label="Trier par date" role="option">Date</a>
            <a href="#" class="filter-option" data-value="titre" aria-selected="true" aria-label="Trier par titre" role="option">Titre</a>
        </div>
    </div>
</div>
          </section>`;
  $page.appendChild(div4);

  const div5 = document.createElement("div");
  div5.className = "photographer_media";
  let content = "";
  for (const mediaCard of media) {
    content += mediaFactory(mediaCard, photographer.name);
  }
  div5.innerHTML = content;
  $page.appendChild(div5);
  // let mediacards =document.querySelectorAll(".article_media_container_card")
  // mediacards.forEach((card) => {
  //   card.addEventListener("click", displayLightbox);
  // });
  

  //lightBox
  

}

closeLightbox
