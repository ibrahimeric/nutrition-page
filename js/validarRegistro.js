// console.log("validacion") /* validar conexion de javascript */

//1- seleccionar los elementos HTML por su nombre de ID y guardarlos en constantes
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

// 2- agregar un evento de escucha para el envio del formulario
form.addEventListener("submit", e => { /* evento de escucha para el envio del formulario */
    e.preventDefault(); /* evita que el formulario se envíe de inmediato, con una validacion personalizada */

    // 3- realizar validación de los campos
    let warnings = ""; /* almacena los mensajes de advertencia */
    let entrar = false; /* controla si se debe enviar o no el formulario */
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; /* valida el formato del correo electronico */
    parrafo.innerHTML = ""; /* limpia el parrafo */
    // console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){ /* valida si el correo es valido */
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if (pass.value.length < 6){ /* valida si la contraseña tiene al menos 6 caracteres */
        // alert("password corta")
        warnings += `La contraseña no es válida <br>`
        entrar = true
    }
    // si alguna de las condiciones anteriores no se cumple, se agrega un mensaje a warnings y se establece entrar en true.

    // 4- actualizar el parrafo de advertencia o envio del formulario
    if(entrar){ /* si es true, se actualiza el contenido del parrafo de advertencia con los mensajes */
        parrafo.innerHTML = warnings
    }else{ /* si es falso, se muestra un mensaje de alerta diciendo que el usuario ha sido registrado */
        // parrafo.innerHTML = "Enviado"
        alert("Usuario registrado") /* alerta de usuario enviado */
    }
})



  