<?php session_start();

if( $_SESSION['userData']['userName'] != "admin" ){
header("location:login.php");
        exit;
    
    
}

?>
<html>
<title>News</title>
<head>
<a href="index.php"> <img alt="" src=" logo.png"
	align="left"></a>
<br>
<br>
<a href="logout.php" style="color: white; float: right"> Logout</a>
<h1 style="margin-right: 193px;">Registered users are</h1>
</head>
<body bgcolor="black" text="white"
	style="text-align: center; background-image: url(bg.jpg); background-repeat: repeat-x;">
	<div style="text-align: center; margin-right: 635px; float: right;">
		<table>
			<tr>
				<td>admin</td>
			</tr>
			<tr>
				<td>user1</td>
			</tr>
			<tr>
				<td>user2</td>
			</tr>
			<tr>
				<td>user3</td>
			</tr>
			<tr>
				<td>user4</td>
			</tr>
			<tr>
				<td>user5</td>
			</tr>
			<tr>
				<td>user6</td>
			</tr>
			<tr>
				<td>user7</td>
			</tr>
		</table>
	</div>
</body>
</html>