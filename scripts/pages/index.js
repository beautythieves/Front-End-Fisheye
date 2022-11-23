// getPhotographers();

async function getPhotographers() {
  try {
    const response = await fetch("/data/photographers.json");
    const json = await response.json();
    console.table(json);
    return  {photographers : json.photographers};
  } catch (error) {
    console.log("Request Failed", error);
  }
}

// function getPhotographersThen() {
  // fetch("/data/photographers.json")
  //   .then((response) => response.json()) // convert to json
  //   .then((json) => console.table(json)) //json type object print data to console
  //   // .then((data) => photographers(data))
  //   .catch((err) => console.log("Request Failed", err)); // Catch errors
  // // .then((response) => response.json())
  // .then((response) => alert(JSON.stringify(response)))
  // .catch((error) => alert("Erreur : " + error));
  // console.log (response.id);
// }

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const $cardWithLink = addLink(photographerModel.pagePath, photographerModel.templateCard);
    photographersSection.appendChild($cardWithLink);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

function addLink(target, content){
  const link = document.createElement('a');
  link.href = target;
  link.innerHTML = content;
  return link;
}
init();
