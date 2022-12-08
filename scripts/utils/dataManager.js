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
console.log (data, "acheme")
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
async function getMediaFromPhotographer(id) {
  if (!data) {
    await getAllData();
  }
  const item = data.media.find((item) => item.id === id);
  return item ? item : [];
}

export { getPhotographers, getMediaFromPhotographer };
