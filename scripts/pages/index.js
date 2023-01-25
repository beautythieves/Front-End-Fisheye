import {addLink, $page} from "../app.js";
import {photographerFactory} from "../factories/photographer.js";
import {getPhotographers} from "../utils/dataManager.js";
/**
 * @param  {} {constphotographers=awaitgetPhotographers(
 * @param  {} ;displayData(photographers
 */
export default async function showIndexPage() {
  // get the data from the json file
  const photographers  = await getPhotographers();
  displayData(photographers);
}
/**
 * @param  {} photographers
 * @param  {} {constphotographersSection=document.createElement("div"
 * @param  {} ;photographersSection.className="photographer_section";$page.appendChild(photographersSection
 * @param  {} ;photographers.forEach((photographer
 * @param  {} =>{constphotographerModel=photographerFactory(photographer
 * @param  {} ;const$cardWithLink=addLink(photographerModel.pagePath
 * @param  {} photographerModel.templateCard
 * @param  {} ;photographersSection.appendChild($cardWithLink
 * @param  {} ;}
 */
// display the data on the page index
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

