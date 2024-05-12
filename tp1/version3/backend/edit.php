<?php
// Recibir los datos del usuario editado
$data = json_decode(file_get_contents("php://input"), true);

// Conectar a la base de datos
include('database.php');

// Obtener los datos del usuario a editar
$id = $data['id'];
$username = $data['username'];
$saldo = $data['saldo'];

// Actualizar el usuario en la base de datos
$sql = "UPDATE users SET username='$username', saldo='$saldo' WHERE id=$id";

if ($connection->query($sql) === TRUE) {
    http_response_code(200); // OK
} else {
    http_response_code(500); // Error interno del servidor
    echo "Error al editar el usuario: " . $connection->error;
}

$connection->close();
?>
