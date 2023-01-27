/**
 * @typedef {Object} Photographer
 * @property {String} name name of photographer
 * @property {Number} id 
 * @property {String} city 
 * @property {String} country
 * @property {String} tagline
 * @property {Number} price
 * @property {String} portrait image of photographer 
  * @typedef {Array.<Photographer>} PhotographerList
 * @typedef {Object} Media
 * @property {Number} id of the media
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
 * @type {String}
 * @description active filter
 *
 */
let activeFilter = "date";

/**
 *
 * @param {String} filter
 * @description set the active filter
 *
 */
async function getPhotographers() {
  if (!data) {
    await getAllData();
  }
  return data.photographers;
}

/**
  * @description get all data from json file
  * @return {Promise.<Object>}
  * @property {PhotographerList} photographers
  * @property {Array.<Media>} media
  
 */
async function getAllData() {
  try {
    const response = await fetch("./data/photographers.json");
    data = await response.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
}

/**
 * [getMediaFromPhotographer description]
 *
 * @param   {Number}  id  [id description]
 *
 * @return  {Array.<Media>}       [return description]
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

/**
 * [getPhotographer description]
 * @param   {Number}  id  [id description]
 * @return  {Photographer}       [return description]
 *
 */
async function getPhotographer(id) {
  if (!data) {
    await getAllData();
  }
  return data.photographers.find((photographe) => photographe.id === id);
}

/**
 * [async description]
 *
 * @param   {String}  filter  [filter description]
 * @param   {Number}  photographerId
 * @return  {Promise.<Array.<Media>>}       [return description]

 */
async function filteredMedia(photographerId) {
  const data = await getMediaFromPhotographer(photographerId);
  switch (activeFilter) {
    case "date":
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "popularité":
      return data.sort((a, b) => b.likes - a.likes); // trier par popularité
    case "titre":
      return data.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return data;
  }
}

export { getAllData, getPhotographers, filteredMedia, getPhotographer };
