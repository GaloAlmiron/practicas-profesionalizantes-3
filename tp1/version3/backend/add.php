<?php
// Recibir los datos del nuevo usuario
$data = json_decode(file_get_contents("php://input"), true);

// Conectar a la base de datos
include('database.php');

// Insertar el nuevo usuario en la base de datos
$username = $data['username'];
$saldo = $data['saldo'];

$sql = "INSERT INTO users (username, saldo) VALUES ('$username', '$saldo')";

if ($connection->query($sql) === TRUE) {
    http_response_code(200); // OK
} else {
    http_response_code(500); // Error interno del servidor
    echo "Error al agregar el nuevo usuario: " . $connection->error;
}

$connection->close();
?>
