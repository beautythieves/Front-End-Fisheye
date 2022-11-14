
getPhotographers();

async function getPhotographers() {
    fetch("/data/photographers.json")
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
    // .then((response) => response.json())
    // .then((response) => alert(JSON.stringify(response)))
    // .catch((error) => alert("Erreur : " + error));
    // console.log (response.id);
  // // Penser à remplacer par les données récupérées dans le json
  const photographers = [
      {
          "name": "Ma data testt",
          "id": 1,
          "city": "Paris",
          "country": "France",
          "tagline": "Ceci est ma data test",
          "price": 400,
          "portrait": "account.png"
      },
      {
          "name": "Autre data test",
          "id": 2,
          "city": "Londres",
          "country": "UK",
          "tagline": "Ceci est ma data test 2",
          "price": 500,
          "portrait": "account.png"
      },
  ]
//   // // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
