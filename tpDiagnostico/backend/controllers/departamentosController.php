<?php


ob_start();
require_once 'db.php';

class DepartamentosController {
    public function handle($method) {
        switch ($method) {
            case 'GET':
                $this->getDepartamentos();
                break;
            default:
                header("HTTP/1.1 405 Method Not Allowed");
                echo json_encode(["error" => "Método no permitido"]);
                break;
        }
    }

    private function getDepartamentos() {
        global $conexion;

        $sql = "SELECT DISTINCT Departamento FROM localidades";
        $result = $conexion->query($sql);

        if ($result->num_rows > 0) {
            $departamentos = array();
            while ($row = $result->fetch_assoc()) {
                $departamentos[] = $row['Departamento'];
            }
            echo json_encode($departamentos);
        } else {
            echo json_encode(["error" => "No se encontraron Departamentos"]);
        }
    }
}

// Manejar la solicitud
$request_method = $_SERVER['REQUEST_METHOD'];
$controller = new DepartamentosController();
$controller->handle($request_method);
?>


