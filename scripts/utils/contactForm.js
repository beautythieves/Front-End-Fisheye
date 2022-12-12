/*!! a faire:  ajout de required autofocus surle champ prenom(accesibilité
+ ajout de l'attibut title pour les chmaps du form*/

export function displayModal() {
    
    const mainDivModal = document.createElement("div");
    mainDivModal.id = "contact_modal";
    document.body.appendChild(mainDivModal);

    const divModal= document.createElement("div");
    divModal.className = "modal";
    mainDivModal.appendChild(divModal);
    const headerModal = document.createElement("header");
    divModal.appendChild(headerModal);
    const h2Modal = document.createElement("h2");
    h2Modal.textContent = "Contactez-moi";
    headerModal.appendChild(h2Modal);
    const imgModal = document.createElement("img");
    imgModal.src = "assets/icons/close.svg";
    imgModal.onclick = closeModal;
    headerModal.appendChild(imgModal);
    const formModal = document.createElement("form");
    divModal.appendChild(formModal);
    const divFormModal = document.createElement("div");
    formModal.appendChild(divFormModal);
    const labelFormModal = document.createElement("label");
    labelFormModal.textContent = "Prénom";
    divFormModal.appendChild(labelFormModal);
    const inputFormModal = document.createElement("input");
    divFormModal.appendChild(inputFormModal);
    const buttonFormModal = document.createElement("button");
    buttonFormModal.className = "contact_button";
    buttonFormModal.textContent = "Envoyer";
    formModal.appendChild(buttonFormModal);


    };

	
/*

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

*/