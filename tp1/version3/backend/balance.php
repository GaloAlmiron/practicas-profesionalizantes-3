<?php
include('database.php');

// Consulta para obtener los saldos de todos los usuarios
$sql = "SELECT saldo FROM users";
$result = $connection->query($sql);

$saldos = array();

if ($result->num_rows > 0) {
    // Recorrer los resultados y agregar los saldos al array
    while($row = $result->fetch_assoc()) {
        $saldos[] = $row;
    }
} else {
    echo "0 resultados";
}

// Cerrar la conexión
$connection->close();

// Devolver los saldos como JSON
header('Content-Type: application/json');
echo json_encode($saldos);
?>
