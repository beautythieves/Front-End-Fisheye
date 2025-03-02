/**
 * @typedef {Object} action
 * @property {Number} photographerId
 * @property {String} photographerName
 * @property {Number} id
 */
/**
 * create the media template
 * @param   {Object}  data              - the data of the media
 * @param   {String}  photographerName
 * @return  {String}                   - the template of the media
 */
function mediaFactory(data, photographerName) {
  photographerName = photographerName.split(" ")[0];
  const { image, video, likes, id, photographerId, title } = data;
  const picture = `./assets/media/${photographerName}/${image || video}`;
  const action = {
    photographerId,
    photographerName,
    id,
  };
  const templateMedia = /*html*/ `
<article class="article_media" title= "photographie de ${title}"aria-label="${
    image ? "image of " : "video of "
  }${title}">
  <div class= "article_media_container">
    <div class= "article_media_container_card" tabindex = "-1" aria-label= aria-label="${
      image ? "image of " : "video of "
    }${title}"  >
      ${
        image
          ? templateImage(picture, title, action)
          : templateVideo(picture, action)
      }
      <div class= "article_media_container_card_title_and_price">
        <h2 class= "article_media_container_card_title">${title}</h2>
        <h3 class= "article_media_container_card_likes"  tabindex="0" aria-pressed="false" aria-label="likes"
        onkeydown="if (event.keyCode === 13) { incrementLike(this); }"
        onclick="incrementLike(this)" aria-label="j'aime">${likes} </h3>
      </div>
    </div>
  </div>
</article>
`;
  return templateMedia;
}
/**
 * @description template for the video
 * @param   {String}  videoName
 * @param   {action}  [action]
 * @return  {String}
 *
 */
// template for the video
function templateVideo(videoName, action) {
  return /*html*/ `
  <video class="article_media_container_card_video" controls ${openModale(
    action
  )} 
  tabindex="0"
  onkeydown="if (event.keyCode === 13) { displayLightBox(${
    action.photographerId
  }, ${action.id}, '${action.photographerName}'); }"
  aria-label="video of ${action.title}"
  >
    <source src="${videoName}" type="video/mp4">
  </video>
  `;
}

/**
 * @description template for the image
 * @param   {String}  picture
 * @param   {String}  title
 * @param   {action}  [action]
 *
 * @return  {String}
 */
// template for the image
function templateImage(picture, title, action) {
  return /*html*/ `
  <img 
    src="${picture}"
    alt="photo de ${title}"
    tabindex="0"
    onkeydown="if (event.keyCode === 13) { displayLightBox(${
      action.photographerId
    }, ${action.id}, '${action.photographerName}'); }"
    class="article_media_container_card_img"
    aria-label="image of ${title}"
    ${openModale(action)}
    role="img"
  />
  `;
}

/**
 * @description open the modale
 *
 * @param   {action}  [action]
 *
 * @return  {String}  - the onclick function
 */
function openModale(action) {
  if (!action) return "";
  return `onclick="displayLightBox(${action.photographerId}, ${action.id}, '${action.photographerName}')"`;
}
/**
 * @description increment the likes
 *
 * @param  {HTMLElement}  target
 *
 *@return  {void}
 */
window.incrementLike = function (target) {
  let likes = parseInt(target.innerText);
  let increment = false;
  if (target.classList.contains("isLiked")) {
    target.innerText = likes - 1;
    target.classList.remove("isLiked");
    target.setAttribute("aria-pressed", "false");
  } else {
    target.innerText = likes + 1;
    target.classList.add("isLiked");
    target.setAttribute("aria-pressed", "true");
    increment = true;
  }
  likes = document.querySelector(".photographer_aside_total_likes");
  const likesNumber = parseInt(likes.textContent);
  likes.textContent = increment ? likesNumber + 1 : likesNumber - 1;
};

export { mediaFactory, templateImage };
