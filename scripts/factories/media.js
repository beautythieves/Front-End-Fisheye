// ce fichier contient les deux fonctions qui permettent de créer 
//les cartes des photographes et des médias pour la page photographe
function mediaFactory(data){
const { image, video, likes, date, price, id, photographerId, title } = data;
const picture = `assets/media/${image}`;
const templateMedia = /*html*/ `
<article class="article_media" title= "photographies de ${title}">
 <div class= "article_media_sortBy">
  <input class="article_media_sortBy_input" type="checkbox" id="sortBy" name="sortBy" value="sortBy">
    <label class="article_media_sortBy_label" for="sortBy">Trier par popularité</label>
    </div>
    <div class= "article_media_container">
    <div class= "article_media_container_card">
    <img src="${picture}" alt="photo de ${title}"  class="article_media_container_card_img">
    <h2 class= "article_media_container_card_title">${title}</h2>
    <h3 class= "article_media_container_card_likes">${likes}</h3>
    <h4 class= "article_media_container_card_price">${price}€</h4>
    </div>
    </div>
    </article>
`;
return { picture, templateMedia };
}

export {mediaFactory}