
<?php session_start();
 $_SESSION['userData'] = null;
//Unset token and user data from session
unset($_SESSION['token']);
unset($_SESSION['userData']);

//Destroy entire session
session_destroy();

//Redirect to homepage
header("Location:index.html");
?>