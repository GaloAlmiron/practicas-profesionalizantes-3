<?php
require_once 'db.php';

class LocalidadesController {
    public function handle($method) {
        switch ($method) {
            case 'GET':
                $this->getLocalidades();
                break;
            default:
                header("HTTP/1.1 405 Method Not Allowed");
                echo json_encode(["error" => "Método no permitido"]);
                break;
        }
    }

    private function getLocalidades() {
        global $conexion;

        $sql = "SELECT DISTINCT Nombre FROM localidades";
        $result = $conexion->query($sql);

        if ($result->num_rows > 0) {
            $localidades_nombres = array();
            while ($row = $result->fetch_assoc()) {
                $localidades_nombres[] = $row['Nombre'];
            }
            echo json_encode($localidades_nombres);
        } else {
            echo json_encode(["error" => "No se encontraron Localidades"]);
        }
    }
}

// Manejar la solicitud
$request_method = $_SERVER['REQUEST_METHOD'];
$controller = new LocalidadesController();
$controller->handle($request_method);
?>
