/*!! a faire:  ajout de required autofocus surle champ prenom(accesibilité
+ ajout de l'attibut title pour les chmaps du form*/

export function displayModal() {
    
    const mainDivModal = document.createElement("div");
    mainDivModal.id = "contact_modal";
    mainDivModal.setAttribute("role", "dialog");
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
    labelFormModal.setAttribute("for", "prenom");
    labelFormModal.setAttribute("title", "Veuillez saisir votre prénom");
    labelFormModal.setAttribute("aria-required", "required");
    divFormModal.appendChild(labelFormModal);

    const inputFormModal = document.createElement("input");
    inputFormModal.setAttribute("type", "text");
    inputFormModal.setAttribute("id", "prenom");
    inputFormModal.setAttribute("name", "prenom");
    inputFormModal.setAttribute("aria-required", "required");
    divFormModal.appendChild(inputFormModal);

    const labelNameFormModal = document.createElement("label");
    labelNameFormModal.textContent = "Nom";
    labelFormModal.setAttribute("for", "nom");
    labelFormModal.setAttribute("title", "Veuillez saisir votre nom");
    labelFormModal.setAttribute("aria-required", "required");
    divFormModal.appendChild(labelNameFormModal);

    const inputNameFormModal = document.createElement("input");
    inputFormModal.setAttribute("type", "text");
    inputFormModal.setAttribute("id", "nom");
    inputFormModal.setAttribute("name", "nom");
    inputFormModal.setAttribute("aria-required", "required");

    divFormModal.appendChild(inputNameFormModal);

    const labelEmailFormModal = document.createElement("label");
    labelEmailFormModal.textContent = "Email";
    labelEmailFormModal.setAttribute("for", "email");
    labelEmailFormModal.setAttribute("title", "Veuillez saisir votre email");
    labelEmailFormModal.setAttribute("aria-required", "required");
    divFormModal.appendChild(labelEmailFormModal);
    const inputEmailFormModal = document.createElement("input"); 
    inputEmailFormModal.setAttribute("type", "email");
    inputEmailFormModal.setAttribute("id", "email");
    inputEmailFormModal.setAttribute("name", "email");
    inputEmailFormModal.setAttribute("aria-required", "required");   
    divFormModal.appendChild(inputEmailFormModal);

const labelMessageFormModal = document.createElement("label");
    labelMessageFormModal.textContent = "Votre message";
    labelMessageFormModal.setAttribute("for", "message");
    labelMessageFormModal.setAttribute("title", "Veuillez saisir votre message");
    labelMessageFormModal.setAttribute("aria-required", "required");

    divFormModal.appendChild(labelMessageFormModal);
    const inputMessageFormModal = document.createElement("textarea");
    inputMessageFormModal.setAttribute("id", "message");
    inputMessageFormModal.setAttribute("name", "message");
    inputMessageFormModal.setAttribute("aria-required", "required");
    divFormModal.appendChild(inputMessageFormModal);
    

    const buttonFormModal = document.createElement("button");
    buttonFormModal.className = "contact_button";
    buttonFormModal.textContent = "Envoyer";
    formModal.appendChild(buttonFormModal);

    // accesibilité.cache le reste du document
    document.querySelector("#main").setAttribute("aria-hidden", "true");
    };

	/*!!! manque le focus sur la modale 
    et la fermeture avec clavier*/


function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

