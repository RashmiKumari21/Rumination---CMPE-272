<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] , input[type=number], input[type=email] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: black;
      color: white;
      padding: 1em 1.5em;
      text-decoration: none;
      text-transform: uppercase;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
</head>
<body>
<?php
        include "phptodb.php"
?>
<form action="./createUser.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="First Name"><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="fname"  maxlength="50" required>

    <label for="Last Name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last Name" name="lname"  maxlength="50" required>

    <label for="Address"><b>Address</b></label>
    <input type="text" placeholder="Enter Address"  maxlength="800" name="address" required>

    <label for="Home Phone"><b>Home Phone</b></label>
    <input type="text" pattern="\d*"  placeholder="Enter Home Phone"  maxlength="10" name="homePhone" required> 

    <label for="Cell Phone"><b>Cell Phone</b></label>
    <input type="text" pattern="\d*"  placeholder="Enter Cell Phone" name="cellPhone"  maxlength="10" required>

    <label for="Email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email"  maxlength="50" name="email" required>

    <hr>
   

    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
  <br> <a href='login.php'>Click here</a> to go back to Login page
  </div>
</form>

</body>
</html>
