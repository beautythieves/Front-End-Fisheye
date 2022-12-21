// ce fichier contient les deux fonctions qui permettent de créer 
//les cartes des photographes et des médias pour la page photographe
function mediaFactory(data, photographerName){
  photographerName = photographerName.split(" ")[0];

const { image, video, likes, date, price, id, photographerId, title } = data;
const picture = `/assets/media/${photographerName}/${image||video}`;
const templateMedia = /*html*/ `
<article class="article_media" title= "photographies de ${title}">
  <div class= "article_media_container">
    <div class= "article_media_container_card">
      ${image ? templateImage(picture, title) : templateVideo(picture)}
      <h2 class= "article_media_container_card_title">${title}</h2>
      <h3 class= "article_media_container_card_likes">${likes}</h3>
      <h4 class= "article_media_container_card_price">${price}€</h4>
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

export {mediaFactory}