<?php

include('database.php');

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "DELETE FROM users WHERE id = $id";

    if ($connection->query($sql) === TRUE) {
        http_response_code(200);
        echo "Usuario eliminado exitosamente";
    } else {

        http_response_code(500);
        echo "Error al eliminar el usuario: " . $connection->error;
    }
} else {
    // Si no se proporcionó un ID válido, devolver un código de estado 400 (Bad Request) con un mensaje de error
    http_response_code(400);
    echo "ID de usuario no proporcionado";
}

?>
