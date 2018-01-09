<?php

$result = $mysqli->query("SELECT name, comment, created_at FROM commenttable ORDER BY created_at DESC LIMIT 6" );


while($row = $result->fetch_assoc()) 
{
    echo "<div class=comment-box><p>";
    	echo  $row ["created_at"] ."<br><br>";
		echo "<b>". $row ['name'] .'</b><br>'; 
		echo ucfirst( nl2br($row ["comment"]));	
	echo "</p></div>";
}

