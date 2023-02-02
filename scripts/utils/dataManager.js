/**
 * @type {Object}
 * @description Data loaded from the JSON file
 */
let data;
/**
 * @type {String}
 * @description active filter
 */
let activeFilter = "date";

/**
 * @param {String} filter
 * @description set the active filter
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
 * @param   {Number}  id  [id description]
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
 * @param   {Number}  id  [id description]
 */
async function getPhotographer(id) {
  if (!data) {
    await getAllData();
  }
  return data.photographers.find((photographe) => photographe.id === id);
}

/**
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
      return data.sort((a, b) => b.likes - a.likes);
    case "titre":
      return data.sort((a, b) => a.title.localeCompare(b.title));

    default:
      return data;
  }
}

export { getAllData, getPhotographers, filteredMedia, getPhotographer };
