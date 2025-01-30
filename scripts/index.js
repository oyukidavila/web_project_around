// Busquemos el formulario en el DOM
let formElement = ""; // Utiliza el método querySelector()
// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
  // Lo explicaremos todo con más detalle después.

  // Busquemos los campos del formulario en el DOM
  let nameInput = ""; // Utiliza el método querySelector()
  let jobInput = ""; // Utiliza el método querySelector()

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente

  // Selecciona los elementos donde se introducirán los valores de los campos

  // Inserta nuevos valores utilizando el textContent
  // propiedad del método querySelector()
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
//formElement.addEventListener("submit", handleProfileFormSubmit);

//*********************************************************************************
const popup = document.getElementById("profile-popup");
const buttoEdit = document.getElementById("edit-button");

const closeButton = document.getElementById("close-button");
const closeCard = document.getElementById("close-card");

const txtNameProfile = document.querySelector(".profile__name");
const txtJobProfile = document.querySelector(".profile__text");

const saveButton = document.getElementById("save-button");
const inputName = document.getElementById("name-profile");
const inputJob = document.getElementById("job-profile");

buttoEdit.addEventListener("click", function (e) {
  //console.log("buttoEdit: ", e);
  popup.showModal();
  /*console.log("txtNameProfile: " + txtNameProfile.textContent);
  console.log("txtJobProfile: " + txtJobProfile.textContent);*/
  //document.getElementById("name-profile").value = txtNameProfile.textContent;
  inputName.value = txtNameProfile.textContent;
  //document.getElementById("job-profile").value = txtJobProfile.textContent;
  inputJob.value = txtJobProfile.textContent;
});

closeButton.addEventListener("click", function (e) {
  popup.close();
});

const buttonCard = document.getElementById("add-card");
const popupCard = document.getElementById("card-popup");

buttonCard.addEventListener("click", function (e) {
  popupCard.showModal();
});

closeCard.addEventListener("click", function (e) {
  popupCard.close();
});

saveButton.addEventListener("click", function (e) {
  e.preventDefault();

  let nameValue = inputName.value;
  let jobValue = inputJob.value;

  txtNameProfile.textContent = nameValue;
  txtJobProfile.textContent = jobValue;

  popup.close();
});
