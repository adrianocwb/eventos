<?php

require_once "con.php";

$con = conectar();

$nome = $_POST['nome'];
$local = $_POST['local'];
$data = $_POST['datahora'];
$descicao = $_POST['descricao'];
$preco = $_POST['preco'];


$sql = "INSERT INTO eventos 
(id, nome, datahora, local, descricao, preco) 
VALUES(null, 
'$nome', 
'$data', 
'$local', 
'$descricao', 
'$preco')";

echo $sql;