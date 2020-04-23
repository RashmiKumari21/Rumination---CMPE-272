<html>
<body bgcolor="black" text="white" style="text-align: center;" background="images/my%20post%20(10).jpg?crc=17566081" >
<style>
  .button-container form,
.button-container form div {
    display: inline;
}

.button-container button {
    display: inline;
    vertical-align: middle;
}

table{ 
border-collapse:separate; 
border-spacing: 0 15px; 
} 
th{ 
background-color: #4287f5; 
color: white; 
} 
th,td{ 
width: 150px; 
text-align: center; 
border: 1px solid black; 
padding: 5px;
}
h2{ 
color: #4287f5; 
}
.btn-group button {
  background-color: #301934; /* Green background */
  border: 2px solid green; /* Green border */
  color: white; /* White text */
  padding: 15px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  width: 50%; /* Set a width if needed */
  display: block; /* Make the buttons appear below each other */
  

margin-left: 25%;
margin-right: 25%
  
 
}

.btn-group button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 550px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  float: center;
 
  

}
</style>
    <body>
        <h1><center></font>Search Users</center></h1>
        <?php
        include "phptodb.php"
?>



<div  class="button-container" >
<table align="center">
  <tr>
 <td>
<p><font color="white">Search by First Name</font></p>
<form action="firstName.php"">
  First name:<br>
  <input type="text" name="fname" required><br><br>
  <input type="submit" value="Search" class="btn-group">
</td>
</form>
<br><br>
<td>
<p><font color="white">Search by Email</font></p>
<form action="email.php">
  Email:<br>
  <input type="email" name="email" required><br><br>
  <input type="submit" value="Search" class="btn-group">
  </td>
</form>
<br><br>
<td>
<p><font color="white">Search by Home Phone</font></p>
<form action="homePhone.php">
  Home Phone:<br>
  <input type="number" name="homePhone" required><br><br>
  <input type="submit" value="Search" class="btn-group">
  </td>
</form>
</tr>
</table>
</div>
</div>
<?php
$mysqli->close();

?>
<br> <a href='login.php' style='color: white'>Click here</a> to go back to Login page
    </body>
</html>