<?php

header("Content-type: application/json");

$server = "localhost";
$user = "root";
$senha = "elaborata";
$banco = "eventos";
$dsn = "mysql:host=$server;dbname=$banco;charset=utf8";

$con = new \PDO($dsn, $user, $senha);

$sql = "SELECT * FROM eventos ORDER BY datahora ASC";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);