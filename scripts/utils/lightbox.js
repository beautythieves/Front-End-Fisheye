import { $page } from "../app.js";
import { filteredMedia, serverAddress } from "../utils/dataManager.js";
let $lightbox, allmedias, currentMediaIndex, $media, photographerName;
async function displayLightBox(photographerId, id, photographer) {
  try {
    allmedias = await filteredMedia(photographerId);
  } catch (error) {
    console.error(error);
    // Handle the error here
  }
  photographerName = photographer;
  // let altText, src, type;
  let i;
  for (i = 0; i < allmedias.length; i++) {
    const media = allmedias[i];
    if (media.id === id) {
      currentMediaIndex = i;
      // src = media.image || media.video;
      // altText = media.title;
      // type = media.image ? "image" : "video";
      break;
    }
  }

  $lightbox = document.createElement("section");
  // const imgSource = document.getElementsByClassName(
  //   "article_media_container_card_img"
  // );
  $lightbox.className = "lightbox";
  $lightbox.innerHTML =
    /*html*/
    `<div class="lightbox__container">                
                <button class="lightbox__close" onclick="closeModalLightbox()"><i class="fas fa-times"></i></button>
                <button class="lightbox__next" onclick="nextMedia()"><i class="fas fa-chevron-right"></i></button>
                <button class="lightbox__prev" onclick ="prevMedia()"><i class ="fas fa-chevron-left"></i></button>
          <div class="lightbox__media__container" id="mediaInModal">
            ${mediaInModal()}
          </div> 
      </div> `;

  $page.appendChild($lightbox);
  // add aria-labels to buttons close, next, prev
  const $lightboxClose = document.querySelector(".lightbox__close");
  $lightboxClose.setAttribute("aria-label", "close lightbox");
  const $lightboxNext = document.querySelector(".lightbox__next");
  $lightboxNext.setAttribute("aria-label", "next media");
  const $lightboxPrev = document.querySelector(".lightbox__prev");
  $lightboxPrev.setAttribute("aria-label", "previous media");
}

function closeModalLightbox() {
  $lightbox.parentNode.removeChild($lightbox);
}
/* fermeture lightbox avec la touche escape*/
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    closeModalLightbox();
  } else return;
});

function nextMedia() {
  console.log("next");
  currentMediaIndex++;
  if (currentMediaIndex >= allmedias.length) {
    currentMediaIndex = 0;
  }
  updateMedia();
}

function prevMedia() {
  console.log("prev");
  currentMediaIndex--;
  if (currentMediaIndex < 0) {
    currentMediaIndex = allmedias.length - 1;
  }
  updateMedia();
}

function mediaInModal() {
  const media = allmedias[currentMediaIndex];
  const src = media.image || media.video;
  const altText = media.title;
  return media.image ? templateImg(src, altText) : templateVideo(src, altText);
}

function templateImg(src, altText) {
  return /*html*/ `<img src="${serverAddress}/assets/media/${photographerName}/${src}" alt="${altText}">`;
}

function templateVideo(src, altText) {
  return /*html*/ `<video src="${serverAddress}/assets/media/${photographerName}/${src}" alt="${altText}" controls></video>`;
}

function updateMedia() {
  if (!$media) $media = document.getElementById("mediaInModal");
  $media.innerHTML = mediaInModal();
}

// export { displayLightBox, closeModalLightbox, nextMedia };

const methodsToExpose = {
  displayLightBox,
  closeModalLightbox,
  nextMedia,
  prevMedia,
};

/**
 * [exposeInWindow description]
 *
 * @param   {Array.<String>}  methodsToExpose  [methodsToExpose description]
 *
 * @return  {void}                   [return description]
 */

function exposeInWindow() {
  for (const [methodName, method] of Object.entries(methodsToExpose)) {
    window[methodName] = method.bind(this);
  }
}

export { exposeInWindow };
