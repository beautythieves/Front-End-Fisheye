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
  console.log(imgSource);
    lightbox.className = "lightbox";
    lightbox.innerHTML = /*html*/
    `<div class="lightbox__container">                
        <button class="lightbox__close" >X</button>
        <button class="lightbox__next"><i class="fas fa-chevron-right"></i></button>
        <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
          <div class="lightbox__media__container">
            <img src="${serverAddress}/assets/media/${photographerName}/${src}" alt="${altText}">
          </div> 
    </div> `
        $page.appendChild(lightbox);

        console.log(lightbox)
        function closeLightbox() {
          const  $lightbox = document.querySelector(".lightbox");
             $lightbox.style.display="none";
        };

        const buttonClose = document.querySelector(".lightbox__close");
        buttonClose.addEventListener("click", closeLightbox());
        const nextLightbox = document.querySelector(".lightbox__next");
        nextLightbox.addEventListener("click", nextLightbox);
        const prevLightbox = document.querySelector(".lightbox__prev");
        prevLightbox.addEventListener("click", prevLightbox);
        const lightboxContainer = document.querySelector(".lightbox__container");
        lightboxContainer.addEventListener("click", closeLightbox);
       
    }

// fonction pour fermer la lightbox
// ne amrche pas! manque le bouton fermer
// et la touche ecscape

console.log (closeLightbox)

 export  function closeLightbox() {
    const  $lightbox = document.querySelector(".lightbox");

    $lightbox.remove();
}
