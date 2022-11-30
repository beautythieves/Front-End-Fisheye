import {$page} from "../app.js";
//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
  try {
    const response = await fetch("/data/photographers.json");
    const json = await response.json();
    console.table(json);
    // pourquoi return parenthèses et deux points?
    return  {photographers : json.photographers};
  } catch (error) {
    console.log("Request Failed", error);
  }
}
export default async function showPhotographerPage( id) {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
console.log (displayData)

async function displayData(photographers) {
  // const photographerHeader = document.querySelector(".photographer_header");
  photographers.forEach((photographer) => {
    $page.appenchild(templatePagePhotographer, photographer,);
  });
}
  
