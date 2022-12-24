import { $page } from "../app.js";
import { templateImage } from "../factories/media.js";
import { filteredMedia, serverAddress} from "../utils/dataManager.js";
console.log(templateImage);
window.displayLightbox = async function (photographerId, id, photographerName) {
    const allmedias = await filteredMedia(photographerId);
    console.log(allmedias);
    let altText, src, type;
    let i;
    for ( i = 0; i < allmedias.length; i++) {
        const media = allmedias[i];
        if (media.id === id) {
            console.clear();
            console.log(media);
            src =  media.image || media.video;
            altText = media.title;
            type = media.image ? "image" : "video";
            break;
        }
    }

  const lightbox = document.createElement("section");
  let imgSource= document.getElementsByClassName("article_media_container_card_img");
  console.log(imgSource)
    lightbox.className = "lightbox";
    lightbox.innerHTML = /*html*/
    `<div class="lightbox__container">
        <button class="lightbox__close">X</i></button>

        <button class="lightbox__next"><i class="fas fa-chevron-right"></i></button>
        <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
        <div class="lightbox__media_container">
        <img src="${serverAddress}/assets/media/${photographerName}/${src}" alt="${altText}">
        </div>  `
        $page.appendChild(lightbox);
        console.log(lightbox)
    }

// fonction pour fermer la lightbox
// ne amrche pas! manque le bouton fermer
// et la touche ecscape


export function closeLightbox() {
  const lightbox = document.querySelector(".lightbox");
  const buttonCloseLightbox = document.querySelector(".lightbox__close");
  buttonCloseLightbox .addEventListener("click", () => {
    
  });
}

