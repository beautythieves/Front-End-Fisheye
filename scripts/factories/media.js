
function mediaFactory(data, photographerName){
  photographerName = photographerName.split(" ")[0];

const { image, video, likes, date, price, id, photographerId, title } = data;
const picture = `/assets/media/${photographerName}/${image||video}`;
const templateMedia = /*html*/ `
<article class="article_media" title= "photographie de ${title}" onclick="displayLightBox(${photographerId}, ${id}, '${photographerName}')">
  <div class= "article_media_container">
    <div class= "article_media_container_card"  >
      ${image ? templateImage(picture, title) : templateVideo(picture)}
      <div class= "article_media_container_card_title_and_price">
        <h2 class= "article_media_container_card_title">${title}</h2>
        <h3 class= "article_media_container_card_likes"  onclick="incrementLike(this)">${likes} </h3>
      
      </div>
    </div>
  </div>
</article>
`;
// return { picture, templateMedia };
return templateMedia;
}

function templateVideo(videoName){
  return /*html*/ `
  <video class="article_media_container_card_img" controls>
    <source src="${videoName}" type="video/mp4">
  </video>
  `;
}

function templateImage(picture, title){
  return /*html*/ `
  <img src="${picture}" alt="photo de ${title}"  class="article_media_container_card_img">
  
  `;
}

window.incrementLike = function (target){
  let likes = parseInt(target.innerText);
  let increment = false;
  if (target.classList.contains("isLiked")){
    target.innerText = likes - 1;
    target.classList.remove("isLiked");
  } else {
    target.innerText = likes + 1;
    target.classList.add("isLiked");
    increment = true;
  }
  likes = document.querySelector(".photographer_aside_total_likes");
  const likesNumber = parseInt(likes.textContent);
  likes.textContent = increment ? likesNumber + 1 : likesNumber - 1;
}

// compile total of likes




export {mediaFactory, templateImage}


