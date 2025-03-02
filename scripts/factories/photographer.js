// function to create the photographer template
/**
 * @description function to create the photographer template
 * @param   {Object}  data
 * @property {String}  name
 * @property {String}  picture
 * @property {String}  pagePath
 * @property {String}  templateCard
 * @property {String}  id
 * @property {String}  city
 * @property {String}  country
 * @property {String}  tagline
 * @property {String}  price
 * @property {String}  portrait
 * @return {Object}
 * 
 * 
 */
function photographerFactory(data) {
  const { name, portrait, city, country, price, id, tagline } = data;

  const picture = `assets/photographers/${portrait}`;
  // link to the photographer page
  const pagePath = "#photographer/" + id;
  const templateCard = /*html*/ `
        <article class="article" title= "photographies de ${name}">
            <img src="${picture}" alt="portrait de ${name}"  class="article_cover">
            <h2 class= "article_nom_photographe">${name}</h2>
            <h3 class= "article_localisation">${city}, ${country}</h3>
            <h4 class= "article_description">${tagline}</h4>
            <h5 class= "article_prix">${price}€/jour</h5>
            </article>
        `;

  return { name, picture, pagePath, templateCard };
}

export { photographerFactory };
