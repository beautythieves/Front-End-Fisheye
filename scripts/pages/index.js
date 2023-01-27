/** 
  * @description This module is used to display the index page 
*/
import {addLink, $page} from "../app.js";
import {photographerFactory} from "../factories/photographer.js";
import {getPhotographers} from "../utils/dataManager.js";
/**
 * @description This function is used to display the index page
 * 
 */
export default async function showIndexPage() {
  // get the data from the json file
  const photographers  = await getPhotographers();
  displayData(photographers);
}

/**
  * @description This function is used to display the data on the page index
  * 

 */
async function displayData(photographers) {
  const photographersSection = document.createElement("div");
  photographersSection.className = "photographer_section";
  $page.appendChild(photographersSection);
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const $cardWithLink = 
    addLink(photographerModel.pagePath, photographerModel.templateCard);
    photographersSection.appendChild($cardWithLink);
  });
}

