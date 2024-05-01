<?php
require_once 'controllers/provinciasController.php';
require_once 'controllers/departamentosController.php';
require_once 'controllers/localidadesController.php';
require_once 'controllers/municipiosController.php';

function route($method, $uri) {
    $parts = explode('/', $uri);
    $resource = $parts[1];

    switch ($resource) {
        case 'provincias':
            $controller = new ProvinciasController();
            break;
        case 'departamentos':
            $controller = new DepartamentosController();
            break;
        case 'localidades':
            $controller = new LocalidadesController();
            break;
        case 'municipio':
            $controller = new MunicipiosController();
            break;
        default:
            header("HTTP/1.1 404 Not Found");
            echo json_encode(["error" => "Recurso no encontrado"]);
            return;
    }

    $controller->handle($method);
}
?>
