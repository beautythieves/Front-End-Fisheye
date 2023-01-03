import { $page } from "../app.js";
import { templateImage } from "../factories/media.js";
import { filteredMedia, serverAddress } from "../utils/dataManager.js";
console.log(templateImage);
window.displayLightbox = async function (photographerId, id, photographerName) {
  const allmedias = await filteredMedia(photographerId);
  console.log(allmedias);
  let altText, src, type;
  let i;
  for (i = 0; i < allmedias.length; i++) {
    const media = allmedias[i];
    if (media.id === id) {
      console.log(media);
      src = media.image || media.video;
      altText = media.title;
      type = media.image ? "image" : "video";
      break;
    }
  }

  const lightbox = document.createElement("section");
  let imgSource = document.getElementsByClassName(
    "article_media_container_card_img"
  );
  console.log(imgSource);
  lightbox.className = "lightbox";
  lightbox.innerHTML =
    /*html*/
    `<div class="lightbox__container">                
        <button class="lightbox__close" >X</button>
        <button class="lightbox__next"><i class="fas fa-chevron-right"></i></button>
        <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
          <div class="lightbox__media__container">
            <img src="${serverAddress}/assets/media/${photographerName}/${src}" alt="${altText}">
          </div> 
    </div> `;
  $page.appendChild(lightbox);

  console.log(lightbox);

  /*fermeture de la lightbox*/

  lightbox.addEventListener("click", closeModalLightbox);
};
function closeModalLightbox() {
  let closelightbox = document.querySelector("section");

  closelightbox.remove();
}
/* fermeture lightbox avec la touche escape*/
document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
      closeModalLightbox();
    } else return;
  });

// fonction pour fermer la lightbox
// ne amrche pas! manque le bouton fermer
// et la touche ecscape
///GROS PB ICI CAR SI J'EFFACE LA FONCTION CLOSEMODALLIGHTBOX,
//CONFLIT AVEC FICHIER INDEX.JS
console.log(closeLightbox);

export function closeLightbox() {
  const $lightbox = document.querySelector(".lightbox");

  $lightbox.remove();
}
