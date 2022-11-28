//Mettre le code JavaScript lié à la page photographer.html
function photographerFactory(data) {
  //ajout de city, country, price 
  const { name, portrait, city, country, price, id, tagline } = data;
  console.log(data);
  console.log(city);
  const picture = `assets/photographers/${portrait}`;
  console.log(picture);
  // diese pour systeme ancre dans la page
  const pagePath = "#photographer:" + id;
  
  const visitCard = /*html*/ `
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