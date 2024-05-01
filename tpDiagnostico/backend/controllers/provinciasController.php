<?php
require_once 'db.php';

class ProvinciasController {
    public function handle($method) {
        switch ($method) {
            case 'GET':
                $this->getProvincias();
                break;
            default:
                header("HTTP/1.1 405 Method Not Allowed");
                echo json_encode(["error" => "Método no permitido"]);
                break;
        }
    }

    private function getProvincias() {
        global $conexion;

        $sql = "SELECT DISTINCT Provincia FROM localidades";
        $result = $conexion->query($sql);

        if ($result->num_rows > 0) {
            $provincias = array();
            while ($row = $result->fetch_assoc()) {
                $provincias[] = $row['Provincia'];
            }
            echo json_encode($provincias);
        } else {
            echo json_encode(["error" => "No se encontraron provincias"]);
        }
    }
}

// Manejar la solicitud
$request_method = $_SERVER['REQUEST_METHOD'];
$controller = new ProvinciasController();
$controller->handle($request_method);
?>
