/**
 * @typedef {Object} Photographer
 * @property {String} name le nom du photographe ex:" "Mimi Keel"
 * @property {Number} id 
 * @property {String} city 
 * @property {String} country
 * @property {String} tagline
 * @property {Number} price
 * @property {String} portrait l'image du photographe 
 
//explication ligne 12?
 * @typedef {Array.<Photographer>} PhotographerList
 * 
 * @typedef {Object} Media
 * @property {Number} id du media
 * @property {Number} photographerId
 * @property {String} title
 * @property {String} image
 * @property {String} video
 * @property {Number} likes
 * @property {String} date
 * @property {Number} price

*/

let data;

/**
 * permet d'avoir la liste des photographes
 *
 * @return  {Promise.<PhotographerList}  [return description]
 */
async function getPhotographers() {
  if (!data) {
    await getAllData();
  }

  console.table(data);

  return data.photographers;
}

async function getAllData() {
  try {
    const response = await fetch("/data/photographers.json");
    data = await response.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
}

/**
 * [getMediaFromPhotographer description]
 *
 * @param   {Number}  id  l'id du photographe
 *
 * @return  {Array.<Media>}      [return description]
 */
async function getMediaFromPhotographer(photographerId) {
  if (!data) {
    await getAllData();
  }
  const photographersMedia = data.media.filter(
    (media) => media.photographerId === photographerId
  );
  return photographersMedia ?? [];
}

async function getPhotographer(id) {
  if (!data) {
    await getAllData();
  }
  return data.photographers.find((photographe) => photographe.id === id);
}

/**
 * [async description]
 *
 * @param   {Number}  photographerId
 * @param   {"date" | "popularité" | "titre"}  [filter]  
 *
 * @return   {Array.<Media>}
 */
async function filteredMedia(photographerId, filter) {
  const data = await getMediaFromPhotographer(photographerId);
  switch (filter) {
    case "date":
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "popularité":
      return data.sort((a, b) => b.likes - a.likes); // trier par popularité
    case "titre":
      return data.sort((a, b) => a.title.localeCompare(b.title));
    
    default : 
      return data;
  }
}
console.log(getPhotographer);
//
export { getAllData, getPhotographers, filteredMedia, getPhotographer };
console.log(data);
