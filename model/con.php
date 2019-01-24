<?php

/**
 * Cria a conexão com o bd
 */
function conectar()
{
    $server = "localhost";
    $user = "root";
    $senha = "elaborata";
    $banco = "eventos";
    $dsn = "mysql:host=$server;port=3306;dbname=$banco;charset=utf8";

    $con = new \PDO($dsn, $user, $senha);

    return $con;
}