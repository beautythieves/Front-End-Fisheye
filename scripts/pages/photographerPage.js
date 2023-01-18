
import { $page } from "../app.js";
import {
  filteredMedia,
  getPhotographer,
} from "../utils/dataManager.js";
import { mediaFactory } from "../factories/media.js";
import { displayModal } from "../utils/contactForm.js";
import {exposeInWindow} from "../utils/lightbox.js";

exposeInWindow(); //add functionnality in window DOM  like displayLightbox, closeLightbox, nextmedia, prevmedia


export default async function showPhotographerPage(id) {
  const media = await filteredMedia(id);
  const photographer = await getPhotographer(id);

  displayPhotographer(photographer, media);
}

async function displayPhotographer(photographer, media) {
  //hide header h1 "nos photographes"
  document.querySelector("#h1").style.display = "none";

  // add link to index page on the logo Fisheye in the header
  const logo = document.querySelector(".logo");
  logo.onclick = function () {
    window.location.hash = "";
    logo.setAttribute("href", "#");
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
  button.setAttribute("aria-label", "Contactez-moi");
  button.onclick = displayModal;

  const div3 = document.createElement("div");
  div3.className = "photographer_picId";
  photographerArticle.appendChild(div3);
  const picId = document.createElement("img");
  picId.className = "photographer_Id";
  div3.appendChild(picId);
  picId.src = `assets/photographers/${photographer.portrait}`;
  picId.alt = "portrait de ${photographer.name}";

  //filter image zone. On peut ici pour plus styliser utiliser selectmenu au lieu de select
  //: nb: pour le moment,(janv 23) le selectmenu est en phase expérimentale 
  const div4 = document.createElement("div");
  div4.setAttribute("id", "container_sortBy");
  div4.innerHTML = /*html*/ `
  <div class="container_sortBy">
    <div class="container_sortBy_options">
      <label for="sortBy">Trier par</label>
            <select id="sortBy" >
              <option value="date">Date</option>
              <option value="title">Titre</option>
              <option value="likes">Popularité</option>
            </select>
    </div>
 </div>
  `;
  $page.appendChild(div4);

  const div5 = document.createElement("div");
  div5.className = "photographer_media";
  let content = "";
  for (const mediaCard of media) {
    content += mediaFactory(mediaCard, photographer.name);
  }
  div5.innerHTML = content;
  $page.appendChild(div5);

  
  // sort images by date, title or likes
  function sortMedia() {
    const select = document.querySelector("#sortBy");
    select.addEventListener("change", function () {
      const value = select.value;
      console.log(value);
      if (value === "date") {
        media.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
      } else if (value === "title") {
        media.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      } else if (value === "likes") {
        media.sort((a, b) => {
          return b.likes - a.likes;
        });
      }
      console.log(media);
      div5.innerHTML = "";
      for (const mediaCard of media) {
        div5.innerHTML += mediaFactory(mediaCard, photographer.name);
      }
    });
  }
  let trier = document.querySelector("#container_sortBy");
  trier.addEventListener("click", sortMedia);

  //get all the likes for each media 
const allLikes = document.querySelectorAll(".article_media_container_card_likes");
console.log(allLikes);
const allLikesArray = Array.from(allLikes);
console.log(allLikesArray);
const allLikesArray2 = allLikesArray.map((like) => {
  return like.textContent;
});
console.log(allLikesArray2);
// sum the likes for each photographers 

    const allLikesArray3 = allLikesArray2.reduce((acc, current) => {
      return acc + parseInt(current);
    }, 0);
    console.log(allLikesArray3);

// aside total likes and price WORKS!

const div6 = document.createElement("aside");
div6.className = "photographer_aside";
div6.innerHTML = /*html*/ `
<div class="photographer_aside_total">
  <p class="photographer_aside_total_likes"> ${allLikesArray3}  </p>
  <p class="photographer_aside_total_price"> ${photographer.price} €/ jour </p>
</div>  
`;
$page.appendChild(div6);
const likes = document.querySelector(".photographer_aside_total_likes");
likes.setAttribute("aria-label", "likes");
const aside = document.querySelector(".photographer_aside");
aside.setAttribute("aria-label", "aside");
aside.setAttribute("role", "complementary");
}
