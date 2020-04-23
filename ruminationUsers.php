<html><title>Registered Users</title><head>
<a href="index.php">
<img alt="OneCall" src="OneCall logo.png" align="left" ></a><br>
<h1 style=" margin-top: 191px   margin-right: 193px;">Local Users of this website (OneCall Pro)</h1>
</head><br><br>
<body bgcolor="grey" text="white" style="text-align: center;background-image: url(bg.jpg);
  background-repeat: repeat-x;"">
  <div style="     float: left;
    margin-left: 191px; margin-top: -58px
  ">
  <?php
include "phptodb.php";
$sql = "SELECT first_name, last_name, email, home_address, home_phone, cell_phone FROM user_info";
$result = mysqli_query($mysqli, $sql);

echo "<div
   style='
    float: left;
    margin-left: 70px;
    '
>
<head>
<style>
    
body
{
    counter-reset: Serial;           /* Set the Serial counter to 0 */
}
    
.auto-index td:first-child:before
{
  counter-increment: Serial;      /* Increment the Serial counter */
  content: counter(Serial); /* Display the counter */
}
    
#users {
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
    
#users td, #users th {
color:black;
  border: 1px solid #ddd;
  padding: 8px;
}
    
#users tr:nth-child(even){background-color: #f2f2f2;}
    
#users tr:hover {background-color: #ddd;}
    
#users th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
</head>
<body>
    
<table id='users' class='auto-index'>
  <tr>
 <th>Sr No.</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
<th>Home Address</th>
<th>Home Phone</th>
<th>Cell Phone</th>
  </tr>";
if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        echo "<tr><td></td><td>" . $row["first_name"] . '</td><td>' . $row["last_name"] . '</td><td>'
      . $row["email"] . '</td><td>'
        . $row["home_address"] . '</td><td>'
    . $row["home_phone"] . '</td><td>'
    . $row["cell_phone"] . '</td>';
    }
} else {
    echo "0 results";
}
?></div>
</body></html>