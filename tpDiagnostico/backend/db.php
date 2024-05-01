<?php
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_datos = "localidades_argentina";

$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);
if ($conexion->connect_error) {
    die("Error de conexión a la base de datos: " . $conexion->connect_error);
}

// Crear tabla Localidades
$sql = "CREATE TABLE IF NOT EXISTS Localidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    codigo_UTA_2010 VARCHAR(255),
    codigo_UTA_2020 VARCHAR(255),
    latitud int(50),
    longitud int(50),
    municipio VARCHAR(255),
    departamento VARCHAR(255),
    provincia VARCHAR(255)
)";

if ($conexion->query($sql) === true) {
    echo "La tabla  se creó correctamente...";
} else {
    die("Error al crear tabla : " . $conexion->error);
}

