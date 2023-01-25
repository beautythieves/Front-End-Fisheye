
/**
 * @typedef {Object} action
 * @property {Number} photographerId
 * @property {String} photographerName
 * @property {Number} id
 */
// function to create the media template
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
  <a onkeypress="displayLightBox(${photographerId}, ${id}, '${photographerName}')">
<article class="article_media" title= "photographie de ${title}">
  <div class= "article_media_container">
    <div class= "article_media_container_card"  >
      ${
        image
          ? templateImage(picture, title, action)
          : templateVideo(picture, action)
      }
      <div class= "article_media_container_card_title_and_price">
        <h2 class= "article_media_container_card_title">${title}</h2>
        <h3 class= "article_media_container_card_likes"  
        onclick="incrementLike(this)" aria-label="j'aime">${likes} </h3>
      
      </div>
    </div>
  </div>
</article>
</a>
`;
  return templateMedia;
}
// template for the video
function templateVideo(videoName, action) {
  return /*html*/ `
  <video class="article_media_container_card_img" controls ${openModale(
    action
  )}>
    <source src="${videoName}" type="video/mp4">
  </video>
  `;
}

/**
 * [templateImage description]
 *
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
    class="article_media_container_card_img"
    ${openModale(action)}
  />
  `;
}

/**
 * [openModale description]
 *
 * @param   {action}  [action]
 *
 * @return  {String}
 */
function openModale(action) {
  if (!action) return "";
  return `onclick="displayLightBox(${action.photographerId}, ${action.id}, '${action.photographerName}')"`;
}
// inrcrement the number of likes
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
