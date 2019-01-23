<?php

function conectar()
{
    $server = "localhost";
    $user = "root";
    $senha = "elaborata";
    $banco = "eventos";
    $dsn = "mysql:host=$server;dbname=$banco;charset=utf8";

    $con = new \PDO($dsn, $user, $senha);

    return $con;
}