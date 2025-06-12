<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // Mostrar mensaje o redirigir a formulario
    header('Location: crear_cuenta.html');
    exit;
}

// Aquí va el código para procesar POST



// 2. Conexión a la base de datos
$host = "localhost";
$usuario = "root";
$clave = "Chomis246.";
$base_de_datos = "pase_lista";

$conn = new mysqli($host, $usuario, $clave, $base_de_datos);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// 3. Recibir y sanitizar datos
$nombre = trim($_POST['nombre'] ?? '');
$apellido = trim($_POST['apellido'] ?? '');
$matricula = trim($_POST['matricula'] ?? '');
$correo = strtolower(trim($_POST['correo'] ?? ''));
$contraseña = $_POST['contraseña'] ?? '';
$confirmar = $_POST['confirmar_contraseña'] ?? '';

// 4. Validar campos obligatorios
if (!$nombre || !$apellido || !$matricula || !$correo || !$contraseña || !$confirmar) {
    header("Location: crear_cuenta.html?error=" . urlencode("Por favor completa todos los campos"));
    exit;
}

if ($contraseña !== $confirmar) {
    header("Location: crear_cuenta.html?error=" . urlencode("Las contraseñas no coinciden"));
    exit;
}

// 5. Validar que no exista correo o matrícula
$sql_check = "SELECT id FROM docentes WHERE correo = ? OR matricula = ?";
$stmt = $conn->prepare($sql_check);
if (!$stmt) {
    header("Location: crear_cuenta.html?error=" . urlencode("Error en la consulta"));
    exit;
}
$stmt->bind_param("ss", $correo, $matricula);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    $stmt->close();
    header("Location: crear_cuenta.html?error=" . urlencode("Ya existe una cuenta con ese correo o matrícula"));
    exit;
}
$stmt->close();

// 6. Encriptar contraseña
$hash_password = password_hash($contraseña, PASSWORD_DEFAULT);

// 7. Insertar nuevo docente
$sql_insert = "INSERT INTO docentes (nombre, apellido, matricula, correo, contraseña) VALUES (?, ?, ?, ?, ?)";
$stmt_insert = $conn->prepare($sql_insert);
if (!$stmt_insert) {
    header("Location: crear_cuenta.html?error=" . urlencode("Error al preparar la inserción"));
    exit;
}
$stmt_insert->bind_param("sssss", $nombre, $apellido, $matricula, $correo, $hash_password);

if ($stmt_insert->execute()) {
    header("Location: crear_cuenta.html?success=" . urlencode("Cuenta creada exitosamente"));
} else {
    header("Location: crear_cuenta.html?error=" . urlencode("Error al crear la cuenta"));
}

$stmt_insert->close();
$conn->close();
exit;
?>
