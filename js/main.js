addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const enviar = document.getElementById("enviar");
    if (menu) {
        menu.addEventListener("click", () => {
            const bars = document.getElementById("bars");
            const cerrar = document.getElementById("cerrar");
            const imgMenu = document.getElementById("img-menu");
            const infoCorreo = document.getElementById("info-correo");
            const logo = document.getElementById("info-logo");
            const items = document.getElementById("items");
            bars.classList.toggle("d-none");
            cerrar.classList.toggle("d-none");
            imgMenu.classList.toggle("d-none");
            imgMenu.classList.toggle("animaImg");
            items.classList.toggle("d-none");
            infoCorreo.classList.toggle("d-none");
            logo.classList.toggle("d-none");
            items.classList.toggle("animaItems");
        });
    }
    if (link) {
        link.addEventListener("click", () => {
            const bars = document.getElementById("bars");
            const cerrar = document.getElementById("cerrar");
            const imgMenu = document.getElementById("img-menu");
            const infoCorreo = document.getElementById("info-correo");
            const logo = document.getElementById("info-logo");
            const items = document.getElementById("items");
            bars.classList.toggle("d-none");
            cerrar.classList.toggle("d-none");
            imgMenu.classList.toggle("d-none");
            imgMenu.classList.toggle("animaImg");
            items.classList.toggle("d-none");
            infoCorreo.classList.toggle("d-none");
            logo.classList.toggle("d-none");
            items.classList.toggle("animaItems");
        });
    }
});

$('#enviar').click(function() {
    /* Validacion de formulario */
    var nombre, email, asunto, mensaje, expresionEmail, error, txtError;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;
    error = document.getElementById("error");
    exito = document.getElementById("exito");
    txtError = document.getElementById("txtError");

    expresionEmail = /\w+@\w+\.+[a-z]/;
    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        error.style.opacity = "1";
        txtError.innerHTML = "Todos los campos son obligatorios";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (nombre.length > 20) {
        error.style.opacity = "1";
        txtError.innerHTML = "Nombre demasiado largo";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (!expresionEmail.test(email)) {
        error.style.opacity = "1";
        txtError.innerHTML = "El email es invalido";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (asunto.length > 60) {
        error.style.opacity = "1";
        txtError.innerHTML = "El asunto es demasiado largo";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (mensaje.length > 60) {
        error.style.opacity = "1";
        txtError.innerHTML = "EL mensaje es demasiado largo";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else {
        ajaxEmail();
    }
});

function ajaxEmail() {
    $.ajax({
        url: 'email.php',
        type: 'POST',
        data: $('#enviar-correo').serialize(),
        success: function() {
            alert("Se envio tu mensaje correctamente");
        }
    });
}