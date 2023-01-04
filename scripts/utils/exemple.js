import { $page } from "../app.js";
import { templateImage } from "../factories/media.js";
import { filteredMedia, serverAddress } from "../utils/dataManager.js";
console.log(templateImage);
let $lightbox, allmedias, currentMediaIndex, $media;
async function displayLightbox(photographerId, id, photographerName) {
    allmedias = await filteredMedia(photographerId);
    let altText, src, type;
    let i;
    for (i = 0; i < allmedias.length; i++) {
        const media = allmedias[i];
        if (media.id === id) {
            currentMediaIndex = i;
            src = media.image || media.video;
            altText = media.title;
            type = media.image ? "image" : "video";
            break;
        }
    }

    $lightbox = document.createElement("section");
    const imgSource = document.getElementsByClassName(
        "article_media_container_card_img"
    );
    $lightbox.className = "lightbox";
    $lightbox.innerHTML =
        /*html*/
        `<div class="lightbox__container">                
        <button class="lightbox__close" onclick="closeModalLightbox()">X</button>
        <button class="lightbox__next" onclick="nextMedia()"><i class="fas fa-chevron-right"></i></button>
        <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
          <div class="lightbox__media__container" id="mediaInModal">
            ${mediaInModal()}
          </div> 
    </div> `;
    $page.appendChild(lightbox);
};
function closeModalLightbox() {
    $lightbox.parentNode.removeChild($lightbox);
}


/* fermeture lightbox avec la touche escape*/
document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        closeModalLightbox();
    } else return;
});

function nextmedia() {
    console.log("next");
    currentMediaIndex++;
    if (currentMediaIndex >= allmedias.length) {
        currentMediaIndex = 0;
    }

}

function mediaInModal() {
    const media = allmedias[currentMediaIndex];
    const src =
