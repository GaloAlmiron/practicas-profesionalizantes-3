<?php
require_once 'db.php';

class MunicipiosController {
    public function handle($method) {
        switch ($method) {
            case 'GET':
                $this->getMunicipios();
                break;
            default:
                header("HTTP/1.1 405 Method Not Allowed");
                echo json_encode(["error" => "Método no permitido"]);
                break;
        }
    }

    private function getMunicipios() {
        global $conexion;

        $sql = "SELECT DISTINCT municipio FROM localidades";
        $result = $conexion->query($sql);

        if ($result->num_rows > 0) {
            $municpios = array();
            while ($row = $result->fetch_assoc()) {
                $municpios[] = $row['municipio'];
            }
            echo json_encode($municpios);
        } else {
            echo json_encode(["error" => "No se encontraron Municiios"]);
        }
    }
}

// Manejar la solicitud
$request_method = $_SERVER['REQUEST_METHOD'];
$controller = new MunicipiosController();
$controller->handle($request_method);
?>
