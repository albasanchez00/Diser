// Validar los datos introducidos en el formulario.
const btnEnviar = document.getElementById('enviar');
let numero = document.getElementById("telefono").value;
let verificar = true;
let expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let expRegCorreo = /^[\w-\.]+@([\w-])+\.+[\w-]{2,4}$/;
function validarForm() {
    // Validamos el nombre. Solo letras y admite espacios en blanco
    if (!nombre.value) {
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar == false;
    } else if (!expRegNombre.exec(nombre.value)) {
        alert("El campo nombre admite letras y espacios.")
        nombre.focus();
        verificar = false;
    }
    // Validamos el telefono. Solo números y un máximo de 9 dígitos, deben de ser consecutivos (sin espacios)
    if (!(/^\d{9}$/.test(valor))){
        verificar= false;
    }else{
        alert("Introduzca un teléfono válido.")
        verificar= true;
    }
    
    // Validamos el email.
    if (!email.value) {
        alert("El campo email es requerido");
        email.focus();
        verificar = false;
    } else if (!expRegCorreo.exec(email.value)) {
        alert("El campo email admite letras y espacios.")
        email.focus();
        verificar = false;
    }

    // Validamos el mensaje.//
    if (!mensaje.value) {
        alert("El campo mensaje es requerido");
        mensaje.focus();
        verificar = false;
    }
    
}
// Asociacion del botón enviar con el formulario//
window.onload = function () {
    let formulario = document.getElementById("contacto-frm");
    formulario.onsubmit = validarForm;
}




// ********************************************************************************

// Cambiar tamaño de las imganes al pasar el cursor sobre ellas.

let img1= document.getElementById("img_servicio_1");
img1.addEventListener("mouseover", function(){
    img1.style.width="500px";
    img1.style.width="300px";
    
})
img1.addEventListener("mouseout", function(){
    img1.style.width="300px";
    
})
let img2= document.getElementById("img_servicio_2");
img2.addEventListener("mouseover", function(){
    img2.style.width="500px";
    img2.style.width="300px";
    
})
img2.addEventListener("mouseout", function(){
    img2.style.width="300px";
    
})
let img3= document.getElementById("img_servicio_3");
img3.addEventListener("mouseover", function(){
    img3.style.width="500px";
    img3.style.width="300px";
    
})
img3.addEventListener("mouseout", function(){
    img3.style.width="300px";
    
})
