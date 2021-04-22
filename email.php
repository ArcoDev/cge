<?php
$correoDestino = "cacosta@awsoftware.mx, cgeotechnicale@gmail.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

$contenido = "Nombre: " .$nombre.
"\nEmail: " .$email.
"\nAsunto: " .$asunto.
"\nMensaje: " .$mensaje;

mail($correoDestino, "Han enviado un mensaje de contacto desde tu sitio web.", $contenido);
/*header("Refresh:1;../../index.html");*/