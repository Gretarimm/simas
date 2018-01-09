<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="theme-color" content="#ffffff">
	<script
    src="https://code.jquery.com/jquery-3.2.1.js"
    integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
    crossorigin="anonymous"></script>
	<title>Document</title>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
	


</head>
<body>
	<header>
		<button class="hamburger">&#9776;</button>
  		<button class="cross">&#735;</button>
  		<a href="#nuline"><img  src="img/logo3.png"></a>
	</header>
	<nav>
		<a href="#nuline"><img  src="img/logo3.png"></a>
		<ul>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#nuline">BUY YOUR GOLD</a></li>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#pirma">SELL YOUR GOLD</a></li>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#antra">FAQ</a></li>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#trecia">ABOUT ME</a></li>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#ketvirta">COMMENT</a></li>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#penkta">TERMS</a></li>
			<li><a href="http://localhost:3002/Projektai1/Simui/index.php#sesta">CONTACT</a></li>
		</ul>
	</nav>
<section id="ketvirta" name="Zmoniu_comentarai">
		<div class="wrapper">
			<h1>Comments</h1>
			<form action="http://localhost/Projektai1/Simui/post.php" method="POST">
				<table>
					<tr><td>Name: <br><input class="aname" type="text" name="name" required /></td></tr>
					<tr><td colspan="2">Comment: </td></tr>
					<tr><td colspan="5"><textarea name="comment" rows="10" cols="50" required></textarea></td></tr>
					<tr><td colspan="2"><input class="asubmit" type="submit" name="submit" value="Comment"></td></tr>
				</table>
			</form>
	<?php
	 require("db.php");

	$result = $mysqli->query("SELECT name, comment, created_at FROM commenttable" );
	while($row = $result->fetch_assoc()) 
	{
	    echo "<div class=comment-box><p>";
	    	echo  $row ["created_at"] ."<br>";
			echo "<b>". ucfirst( $row ['name'] .'</b><br>'); 
			echo ucfirst( nl2br($row ["comment"]));	
		echo "</p></div>";
	}
	 ?>
		</div>
</section>
	<footer></footer>


	<script src="main.js"></script>
	
	
</body>
</html>