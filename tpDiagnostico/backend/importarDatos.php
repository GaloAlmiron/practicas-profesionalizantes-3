<?php

require_once 'db.php';

$ruta_csv = "lista_localidades.csv";
$archivo_csv = fopen($ruta_csv, "r");

// Salta la primera fila que contiene los nombres de las variables
fgetcsv($archivo_csv);

while (($localidades = fgetcsv($archivo_csv, 10000, ",")) !== FALSE) {
    $nombre = $localidades[0];
    $codigo_uta_2020 = $localidades[1];
    $codigo_uta_2010 = $localidades[2];
    $latitud = $localidades[3];
    $longitud = $localidades[4];
    $municipio = $localidades[5];
    $departamento = $localidades[6];
    $provincia = $localidades[7];

    $sql = "INSERT INTO localidades (Nombre, Codigo_UTA_2020, Codigo_UTA_2010, Latitud, Longitud, Municipio, Departamento, Provincia) 
            VALUES ('$nombre', '$codigo_uta_2020', '$codigo_uta_2010', '$latitud', '$longitud', '$municipio', '$departamento', '$provincia')";
    
    if ($conexion->query($sql) !== TRUE) {
        echo "Error al insertar datos: " . $conexion->error;
    }
}

fclose($archivo_csv);
$conexion->close();

echo "Los datos se han guardado correctamente en la base de datos.";
