<html>
<body bgcolor="black" text="white" style="text-align: center;">
    <body>
        <h1><center></font>Search Users</center></h1>
        <?php
        include "phptodb.php"
?>
<p><font color="white">Search by First Name</font></p>
<form action="firstName.php">
  First name:<br>
  <input type="text" name="fname" required><br><br>
  <input type="submit" value="Search">
</form>
<br><br>
<p><font color="white">Search by Email</font></p>
<form action="email.php">
  Email:<br>
  <input type="email" name="email" required><br><br>
  <input type="submit" value="Search">
</form>
<br><br>
<p><font color="white">Search by Home Phone</font></p>
<form action="homePhone.php">
  Home Phone:<br>
  <input type="number" name="homePhone" required><br><br>
  <input type="submit" value="Search">
</form>
</div>
<?php
$mysqli->close();

?>
<br> <a href='login.php' style='color: white'>Click here</a> to go back to Login page
    </body>
</html>