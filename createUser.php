<?php
include "phptodb.php";
$fname = $_GET["fname"];
$lname = $_GET["lname"];
$address = $_GET["address"];
$homePhone = $_GET["homePhone"];
$cellPhone = $_GET["cellPhone"];
$email = $_GET["email"];

$sql = "INSERT INTO user_info (first_name, last_name, email, home_address, home_phone, cell_phone)
VALUES ('$fname', '$lname', '$email', '$address', '$homePhone', '$cellPhone')";

if ($mysqli->query($sql)) {
    echo "<html>
<head>
<br>
<h1>User Added</h1>
</head>
<body bgcolor='black' text='white'
	style='text-align: center; background-image: url(bg.jpg);>
	<div style='   
	'>
		New user has been added successfully <br>
        <br> <a href='login.php' style='color: white'>Click here</a> to go back to Login page

	</div>
</html>";
} else {
    echo "There was an error executing below query: ". "<br>"  . $sql . "<br>" . $mysqli->error;
}
?>