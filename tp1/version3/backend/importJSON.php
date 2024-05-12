<?php

include('database.php');

$json_data = file_get_contents('cuentas.json');
$data = json_decode($json_data, true);

// Iterar sobre los datos y realizar las inserciones
foreach ($data['users'] as $cuenta) {
    $id = $cuenta['id'];
    $username = $cuenta['username'];
    $saldo = str_replace('$', '', $cuenta['saldo']); // Eliminar el signo de dólar antes de insertar el saldo

    // Consulta SQL de inserción
    $sql = "INSERT INTO users (id, username, saldo) VALUES ($id, '$username', $saldo)";

    if ($connection->query($sql) === TRUE) {
        echo "Registro insertado correctamente<br>";
    } else {
        echo "Error al insertar registro: " . $connection->error . "<br>";
    }
}
