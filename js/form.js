let cont = 0;
function validar(event) {
    // variable para retornar
    var valido = true;

    // obtencion de los elementos/ controles de formulario a validar
    var txtNombres = document.getElementById("nombres");
    var txtApellidos = document.getElementById("apellidos");
    var selectEstado = document.getElementById("estadoC");
    var radiosGenero = document.getElementsByName("genero");
    var chkSuscrip = document.getElementById("suscripcion1");
    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo");
    var checkboxsSuscripcion = document.getElementsByClassName("sus");


    // expresiones regulares
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // VALIDACIONES
    //validacion para nombres
    if (txtNombres.value === "") {
        valido = false;
        mensaje("Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        valido = false;
        mensaje("Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        valido = false;
        mensaje("Nombre maximo 20 caracteres", txtNombres);
    }
    // lo mismo para apellidos
    if (txtApellidos.value === "") {
        valido = false;
        mensaje("Apellido es requerido", txtApellidos);
    } else if (!letra.test(txtApellidos.value)) {
        valido = false;
        mensaje("Apellido solo debe contener letras", txttxtApellidos);
    } else if (txtApellidos.value.length > 20) {
        valido = false;
        mensaje("Apellido maximo 20 caracteres", txttxtApellidos);
    }


    //validacion email
    if (txtemail.value === "") {
        valido = false;
        mensaje("Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        valido = false;
        mensaje("Email no es correcto", txtemail);
    }
    

    //validacion select
    if (selectEstado.value === null || selectEstado.value === '0') {
        valido = false;
        mensaje("Debe seleccionar aun ataque", selectEstado);
    }
    //hasta qui
    
    // validacion de fecha
    var dato = txtfecha.value;
    var fechaN = new Date(dato);
    var anioN = fechaN.getFullYear();

    var fechaActual = new Date();// fecha actual
    var anioA = fechaActual.getFullYear();
    if (fechaN > fechaActual) {
        valido = false;
        mensaje("Fecha no puede ser superior a la actual", txtfecha);
    } else if (anioN < 1930) {
        valido = false;
        mensaje("Anio de nacimiento no puede ser menor a 1930", txtfecha);
    } else if ((anioA - anioN) < 18) {
        valido = false;
        mensaje("debe ser mayor de 18 años", txtfecha);
    }
    return valido;
}

function mensaje(cadenaMensaje, elemento) {
    window.alert(cadenaMensaje);
    elemento.focus();

}


function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensajeError");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}

const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("myname", "Nombre no valido*");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("surname", "Apellido no valido");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("mobile", "Celular no valido*");
    condicion = false;
  }
  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("password", "Contraseña no valido*");
    condicion = false;
  }
  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("repeatPassword", "Contraseña error*");
    condicion = false;
  }
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Listo !!";
}

