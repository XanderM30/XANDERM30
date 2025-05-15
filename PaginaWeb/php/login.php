<?php
// login.php

// Usuario y contraseña válidos (puedes cambiarlos)
$usuario_valido = "admin";
$contrasena_valida = "1234";

// Recibe los datos del formulario
$usuario = $_POST['usuario'] ?? '';
$contrasena = $_POST['contraseña'] ?? '';

// Verifica credenciales
if ($usuario === $usuario_valido && $contrasena === $contrasena_valida) {
    // Redirige a seleccion_carrera.html
    header("Location: ../html/seleccion_carrera.html");
    exit;
} else {
    // Muestra alerta y regresa al login
    echo "<script>
        alert('Usuario o contraseña incorrectos');
        window.location.href = '../html/login.html';
    </script>";
    exit;
}
?>
