
export function displayModal() {
  const mainDivModal = document.createElement("div");
  mainDivModal.id = "contact_modal";
  mainDivModal.setAttribute("role", "dialog");
  mainDivModal.setAttribute("aria-modal", "true");
  mainDivModal.setAttribute("aria-labelledby", "contact_modal_title");
  document.body.appendChild(mainDivModal);

  const divModal = document.createElement("div");
  divModal.className = "modal";
  divModal.style.position = "absolute";
    divModal.style.top = "15%";
    divModal.style.left = "20%";
  mainDivModal.appendChild(divModal);
  const headerModal = document.createElement("header");
  divModal.appendChild(headerModal);
  const h2Modal = document.createElement("h2");
  h2Modal.textContent = "Contactez-moi";
  h2Modal.setAttribute("id", "contact_modal_title");
  headerModal.appendChild(h2Modal);
  const imgModal = document.createElement("img");
  imgModal.src = "assets/icons/close.svg";
  imgModal.alt = "fermer la modale de contact";
  imgModal.setAttribute("role", "button");
  imgModal.setAttribute("aria-label", "fermer la modale de contact");
  imgModal.setAttribute("id", "close_modal");
  imgModal.setAttribute("title", "fermer la modale de contact");
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
  inputFormModal.setAttribute("required", "required");
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
    inputFormModal.setAttribute("required", "required");

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
    inputEmailFormModal.setAttribute("required", "required");
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
    inputMessageFormModal.setAttribute("required", "required");
  divFormModal.appendChild(inputMessageFormModal);

  const buttonFormModal = document.createElement("button");
  buttonFormModal.className = "send_button";
  buttonFormModal.textContent = "Envoyer";
  formModal.appendChild(buttonFormModal);

  // ACCESSIBILITE
  //.cache le reste du document
  document.querySelector("#main").setAttribute("aria-hidden", "true");

  // focus sur le premier champ du formulaire
  trapFocus(mainDivModal);

}


// fermeture de la modale avec la touche escape FONCTIONNE !!
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    closeModal();
  } else return;
});

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// elements focusables pour la navigation au clavier 
//avec tab (avancer) ou shift tab (recul) FONCTIONNE !!
function trapFocus(element) {
  const focusableEls = document.querySelectorAll("input, textarea,.send_button");
  console.log (focusableEls)
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  var KEYCODE_TAB = 9;

  element.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.keyCode === KEYCODE_TAB) {
      if (e.shiftKey) {
        /* shift + tab */ if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } /* tab */ else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    }
  });
}


