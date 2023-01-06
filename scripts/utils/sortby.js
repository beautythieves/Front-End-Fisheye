// recuperation de toutes les cartes affichees puis 
// fonctions de tri
// sorby


import { mediaFactory } from "../factories/media";

function sortBy(media) {
    const sortBy = document.getElementById("sortBy");
    const mediaSort = media.sort((a, b) => {
      if (sortBy.value === "likes") {
        return b.likes - a.likes;
      } else if (sortBy.value === "date") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy.value === "title") {
        return a.title.localeCompare(b.title);
      }
    });
    return mediaSort;
  }