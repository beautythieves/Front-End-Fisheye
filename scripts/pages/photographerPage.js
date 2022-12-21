import { $page, addLink } from "../app.js";
import {
  filteredMedia,
  getPhotographer,
  getPhotographers,
  getAllData
} from "../utils/dataManager.js";
import { mediaFactory} from "../factories/media.js";
import { displayModal } from "../utils/contactForm.js";

// 
console.log (mediaFactory.templateMedia)

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
  picId.src= `assets/photographers/${photographer.portrait}`;
  picId.alt="portrait de ${photographer.name}";
  /*
  const picture = `assets/photographers/${portrait}`;
  //affichage photo phographe?
  picId.src = picture;*/
  console.log (media);

  const div4 = document.createElement("div");
  div4.innerHTML = /*html*/ `
    <div class= "article_media_sortBy">
      <input class="article_media_sortBy_input" type="checkbox" id="sortBy" name="sortBy" value="sortBy">
      <label class="article_media_sortBy_label" for="sortBy">Trier par popularité</label>
    </div>`;
  $page.appendChild(div4);

  const div5 = document.createElement("div");
  let content = "";
  for (const mediaCard of media ){
    content += mediaFactory(mediaCard, photographer.name);
  }
  div5.innerHTML = content;
  $page.appendChild(div5);
//   const mediaParse = JSON.stringify(media);
// console.log(mediaParse)
  //displayMedia(media)
}

console.log (getPhotographers)
console.log (getPhotographer)
// console.log (getMediaFromPhotographer)
console.log(typeof media)

// function displayMedia (visuals){
//   const mediaSection = document.createElement("div");
//   mediaSection.className = "photographer_media";
//   $page.appendChild(mediaSection);
//   visuals.forEach((media) => {  
//     const mediaModel = mediaFactory(media);
//     const mediaTemplate = mediaModel.templateMedia;
//     mediaSection.appendChild(mediaTemplate);
    
//   });
// }


// /*
// // ci dessous, fonction pour afficher les photos du photographe
// function encart() {
//   const photographerMedia = document.createElement("article");
//   photographerMedia.className = "photographer_media";
//   $page.appendChild(photographerMedia);
//   const div4 = document.createElement("div");
//   div4.className = "photographer_media";
//   photographerMedia.appendChild(div4);
//   const mediaShow = document.createElement("img");
//   mediaShow.className = "photographer_media";
//   div4.appendChild(mediaShow);
//   mediaShow.src = media;
//   /*
//   media.className = "photographer_media";
//   div4.appendChild(media);
//   media.src = photographer.media;
//   */
// }
// */


