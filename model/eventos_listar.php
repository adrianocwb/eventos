<?php

require_once "con.php";

header("Content-type: application/json");

$con = conectar();

$sql = "SELECT * FROM eventos ORDER BY datahora ASC";

$res = $con->query($sql);

$dados = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($dados);