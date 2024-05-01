<?php
require_once 'routes.php';

$request_method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];

route($request_method, $request_uri);