/*!! a faire:  ajout de required autofocus surle champ prenom(accesibilité
+ ajout de l'attibut title pour les chmaps du form*/
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
displayModal();
document.querySelector('.contact_button').addEventListener('click', displayModal) 
