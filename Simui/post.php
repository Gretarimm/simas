<?php

require("db.php");

$name      = $_POST['name'];
$comment   = $_POST['comment'];
$ip        = $_SERVER['REMOTE_ADDR'];
$recaptcha = $_POST['g-recaptcha-response'];
$secretKey = "6Lfpx0AUAAAAANOT08cTFJsANhAxhl9Yk-Or_m85";
$insert    = true;


if(isset($name) && isset($comment) && isset($recaptcha))
{
	$result = $mysqli->query("SELECT created_at, ip FROM commenttable" );

	while($row = $result->fetch_assoc())
	{
     	if ( date("Y-m-d") == date("Y-m-d", strtotime($row['created_at'])) && $row ['ip'] == $ip)
     	{
     	 	$insert = false;	
     	}
    }

    if ($insert == true)
    {
    	$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);

        $responseKeys = json_decode($response,true);

        if(intval($responseKeys["success"]) !== 1)
        {
        	$sql = "INSERT INTO commenttable (name, comment, created_at, ip) VALUES ('$name', '$comment', NOW(), '$ip')";
	  	
	  		$result = $mysqli->query($sql);
        }
    }
}

header('location: index.php#ketvirta');


	
