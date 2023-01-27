/**
 * Displays a lightbox modal with the selected media
 * @param   {Number}  photographerId
 * @param   {Number}  id
 * @param   {String}  photographer
 */
import { $page } from "../app.js";
import { filteredMedia } from "../utils/dataManager.js";
let $lightbox, allmedias, currentMediaIndex, $media, photographerName;
async function displayLightBox(photographerId, id, photographer) {
  try {
    allmedias = await filteredMedia(photographerId);
  } catch (error) {
    console.error(error);
  }

  photographerName = photographer;
  // get the index of the selected media
  let i;
  for (i = 0; i < allmedias.length; i++) {
    const media = allmedias[i];
    if (media.id === id) {
      currentMediaIndex = i;
      break;
    }
  }
  // add ishhidden to aside, .photographer_media, header, container_sortBy article
  //in order to hide them when the lightbox is displayed
  const aside = document.querySelector(".photographer_aside");
  aside.classList.add("isHidden");
  const photographerMedia = document.querySelector(".photographer_media");
  photographerMedia.classList.add("isHidden");
  const header = document.querySelector("header");
  header.classList.add("isHidden");
  const article = document.querySelector("article");
  article.classList.add("isHidden");
  const sortBy = document.querySelector(".container_sortBy");
  sortBy.classList.add("isHidden");

  // create the lightbox
  $lightbox = document.createElement("section");
  $lightbox.className = "lightbox";
  $lightbox.innerHTML =
    /*html*/
    `<div class="lightbox__container">                
                <button class="lightbox__close" onclick="closeModalLightbox()"><i class="material-icons md-50">close</i>                </button>
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
// remove ishidden to aside photographer_media, header, container_sortBy and article
function closeModalLightbox() {
  $lightbox.parentNode.removeChild($lightbox);
  const aside = document.querySelector(".photographer_aside");
  aside.classList.remove("isHidden");
  const photographerMedia = document.querySelector(".photographer_media");
  photographerMedia.classList.remove("isHidden");
  const header = document.querySelector("header");
  header.classList.remove("isHidden");
  const article = document.querySelector("article");
  article.classList.remove("isHidden");
  const sortBy = document.querySelector(".container_sortBy");
  sortBy.classList.remove("isHidden");
}

/*ACCESSIBILITY*/
/* close lightbox with esc key*/
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    closeModalLightbox();
  } else return;
});
/* go to next media with right arrow key*/
document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    nextMedia();
  } else return;
});
/* go to previous media with left arrow key*/
document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft") {
    prevMedia();
  } else return;
});


function nextMedia() {
  currentMediaIndex++;
  if (currentMediaIndex >= allmedias.length) {
    currentMediaIndex = 0;
  }
  updateMedia();
}

function prevMedia() {
  currentMediaIndex--;
  if (currentMediaIndex < 0) {
    currentMediaIndex = allmedias.length - 1;
  }
  updateMedia();
}

function mediaInModal() {
  const media = allmedias[currentMediaIndex];
  const src = `./assets/media/${photographerName}/${
    media.image || media.video
  }`;
  const altText = media.title;
  const title = media.title;
  return media.image
    ? `<img src="${src}" alt="${altText}" class="lightbox__media"/>
    <p class="lightbox__title">${title}</p>`
    : `<video src="${src}" alt="${altText}" class="lightbox__media" controls></video>
    <p class="lightbox__title">${title}</p>`;
}

function updateMedia() {
  if (!$media) $media = document.getElementById("mediaInModal");
  $media.innerHTML = mediaInModal();
}
/**
 *  object which contains all the methods to expose to the window object
 *  @property {function} displayLightBox - display the lightbox
 * @property {function} closeModalLightbox - close the lightbox
 * @property {function} nextMedia - go to the next media
 * @property {function} prevMedia - go to the previous media
 * 
 */
const methodsToExpose = {
  displayLightBox,
  closeModalLightbox,
  nextMedia,
  prevMedia,
};

/**
 * Expose the specified methods to the window object
 * @example window.displayLightBox(1, 1, "Ellie-Rose Wilkens")
 * @example window.closeModalLightbox()
 * @param {string} methodName - the name of the method to expose
 * 
 * @returns {void}
 */

function exposeInWindow() {
  for (const [methodName, method] of Object.entries(methodsToExpose)) {
    window[methodName] = method.bind(this);
  }
}

export { exposeInWindow };

