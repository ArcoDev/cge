addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const link = document.getElementById("link");

    if (menu) {
        menu.addEventListener("click", () => {
            const animaItems = document.getElementById("items");
            const animaImg = document.getElementById("img-men");
            const animaCorreo = document.getElementById("anima-correo");
            const animaLogo = document.getElementById("anima-logo");

            const bars = document.getElementById("bars");
            const cerrar = document.getElementById("cerrar");
            animaItems.classList.toggle("animaItems");
            animaImg.classList.toggle("animaImg");
            animaCorreo.classList.toggle("animaCorreo");
            animaLogo.classList.toggle("animaLogo");
            bars.classList.toggle("d-none");
            cerrar.classList.toggle("d-none");
        });
    }
    if (link) {
        link.addEventListener("click", () => {
            const animaItems = document.getElementById("items");
            const animaImg = document.getElementById("img-men");
            const animaCorreo = document.getElementById("anima-correo");
            const animaLogo = document.getElementById("anima-logo");

            const bars = document.getElementById("bars");
            const cerrar = document.getElementById("cerrar");
            animaItems.classList.toggle("animaItems");
            animaImg.classList.toggle("animaImg");
            animaCorreo.classList.toggle("animaCorreo");
            animaLogo.classList.toggle("animaLogo");
            bars.classList.toggle("d-none");
            cerrar.classList.toggle("d-none");
        });
    }
});

$('#enviar').click(function() {
    /* Validacion de formulario */
    var nombre, email, asunto, mensaje, expresionEmail, error, exito, msjAlerta, enviar;
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    asunto = document.getElementById("asunto").value;
    mensaje = document.getElementById("mensaje").value;
    error = document.getElementById("error");
    exito = document.getElementById("exito");
    msjAlerta = document.getElementById("msjAlerta");
    enviar = document.getElementById("enviar-correo");
    expresionEmail = /\w+@\w+\.+[a-z]/;
    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        error.style.opacity = "1";
        msjAlerta.innerHTML = "Todos los campos son obligatorios";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (nombre.length > 20) {
        error.style.opacity = "1";
        msjAlerta.innerHTML = "Nombre demasiado largo";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (!expresionEmail.test(email)) {
        error.style.opacity = "1";
        msjAlerta.innerHTML = "El email es invalido";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (asunto.length > 60) {
        error.style.opacity = "1";
        msjAlerta.innerHTML = "El asunto es demasiado largo";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else if (mensaje.length > 60) {
        error.style.opacity = "1";
        msjAlerta.innerHTML = "EL mensaje es demasiado largo";
        setTimeout(function() {
            error.style.opacity = "0";
        }, 5000);
        return false;
    } else {
        $.ajax({
            url: '../../web_cge/email.php',
            type: 'POST',
            data: $('#enviar-correo').serialize(),
            success: function() {
                exito.style.opacity = "1";
                enviar.reset();
                setTimeout(function() {
                    exito.style.opacity = "0";
                }, 4000);
            }
        });
    }
});