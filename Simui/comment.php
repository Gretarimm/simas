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
     <script src='https://www.google.com/recaptcha/api.js'></script>

<script type="text/javascript">
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?5P39Q2aOwur3y6OOcwzzZ3NWwM8cq5GK";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
</script>

	<title>fPs^Gold shop</title>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
	


</head>
<body>
	<header>
		<button class="hamburger">&#9776;</button>
  		<button class="cross">&#735;</button>
  		<a href="http://107.170.250.167/#BUYGOLD"><img  src="img/logo3.png"></a>
	</header>
	<nav>
		<a href="http://107.170.250.167/#BUYGOLD"><img  src="img/logo3.png"></a>
		<!-- <ul>
			<li><a href="http://107.170.250.167/#BUYGOLD">BUY GOLD</a></li>
			<li><a href="http://107.170.250.167/#SELGOLD">SELL YOUR GOLD</a></li>
			<li><a href=http://107.170.250.167/#FAQ>FAQ</a></li>
			<li><a href=http://107.170.250.167/#ABOUTME>ABOUT ME</a></li>
			<li><a href=http://107.170.250.167/#COMMENTS>COMMENTS</a></li>
			<li><a href=http://107.170.250.167/#CONTACT>CONTACT</a></li>
		</ul> -->
	</nav>
<section id="COMMENTS" name="Zmoniu_comentarai">
		<h1>WRITE YOUR COMMENT</h1>
		<div class="wrapper">
			<form action="http://107.170.250.167/post.php" method="POST">
				<table>
					<tr><td>Name: <br><input class="aname" type="text" name="name" required /></td></tr>
					<tr><td colspan="2">Comment: </td></tr>
					<tr><td colspan="5"><textarea name="comment" rows="10" cols="30" required></textarea></td></tr>
					<tr><td><div class="g-recaptcha" data-sitekey="6Lfpx0AUAAAAAJjKvw6XDFTs11tRpJujQfpnmn_B"></div></td></tr>
					<tr><td colspan="2"><input class="asubmit" type="submit" name="submit" value="Comment"></td></tr>
					<tr><td><p style="text-align: center;color: red;font-size: 14px;margin: 0;margin-top: 3%;font-family: monospace;">You can write a comment once every 24h!</p></td></tr>
				</table>
			</form>
	

	<?php
	 	require("db.php");

		$result = $mysqli->query("SELECT name, comment, created_at FROM commenttable ORDER BY created_at DESC" );

		while($row = $result->fetch_assoc()){
    		echo "<div class=comment-box><p>";
    			echo  $row ["created_at"] ."<br><br>";
				echo "<b>". $row ['name'] .'</b><br>'; 
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