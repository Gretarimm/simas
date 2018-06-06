<?php

$hostname = "localhost";
$username = "root";
$password = "certas123";
$database = "commentbox";

$mysqli = new mysqli($hostname, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
} 