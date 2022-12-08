import {$page, addLink} from "../app.js";
import {getMediaFromPhotographer} from "../utils/dataManager.js";


export default async function showPhotographerPage(id){
  const media =await  getMediaFromPhotographer(id);
  // const photographer  = getPhotographer(id);
  const photographer  = {};
  displayPhotographer(photographer, media);
}

function displayPhotographer(photographer, media) {
  // Display the data on the page
  //const $photographerName = document.querySelector('.photographer_name');
  // $photographerName.textContent = photographer.name;
  
  // $page = main
  $page.innerHTML = encart(photographer);
  // media.forEach((photographerMedia) => {
  //   const photographerModel = photographerFactory(photographerMedia);
  //   const $cardWithLink = addLink(photographerModel.pagePath, photographerModel.templateCard);
  //   photographersSection.appendChild($cardWithLink);
  // });


}



function encart(photographer){
  const templatePagePhotographer = /*html*/ `
    <article class="article_photograph" title= "photographies de ${name}">
    <h2 class= "article_nom_photographe">${name}</h2>
    <h3 class= "article_localisation">${city}</h3>
    

    <img src="${picture}" alt="portrait de ${name}"  class="article_cover">'
  // /*return `<h1>kjhlkjdklsfjdklsjfklsdjflks</h1>''*/
}