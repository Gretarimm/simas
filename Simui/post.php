<?php

require("db.php");

$name = $_POST['name'];
$comment = $_POST['comment'];

if(isset($name) && isset($comment)){
	$sql = "INSERT INTO commenttable (name, comment, created_at)VALUES ('$name', '$comment', NOW())";
	   $result = $mysqli->query($sql);
}

header('location: index.php');


	
