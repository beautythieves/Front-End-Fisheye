import {$page, addLink} from "../app.js";
import {getMediaFromPhotographer, getPhotographer} from "../utils/dataManager.js";
import {photographerFactory} from "../factories/photographer.js";

export default async function showPhotographerPage(id){
  const media =  getMediaFromPhotographer(id);
  const photographer  =  getPhotographer(id);
  console.log (photographer);
  // const photographer  = {};
  displayPhotographer(photographer, media);
}

async function displayPhotographer(photographer, media) {
  // Display the data on the page
  const photographerArticle = document.createElement("article");
  photographerArticle.className = "photographer_article"; 
  $page.appendChild(photographerArticle);
  //const $photographerName = document.querySelector('.photographer_name');
  // $photographerName.textContent = photographer.name;
  media.forEach((photographerMedia) => {
    const photographerModel = photographerFactory(photographerMedia);
    const $cardWithLink = addLink(photographerModel.pagePath, photographerModel.templateCard);
    photographersSection.appendChild($cardWithLink);
  })

  // $page = main
  // $page.innerHTML = encart(photographer);
  


}



function encart(photographer){
  photographer.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);  
    const $cardWithLink = addLink(photographerModel.pagePath, photographerModel.templatePagePhotographer);
    photographerArticle.appendChild($cardWithLink);
  });
  
}