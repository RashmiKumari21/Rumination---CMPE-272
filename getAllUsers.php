<html><title>All Users</title><head>
<br><a style="float:right; color:white" href="users.html">Go back to Users</a>

<h1 style="margin-left: 15px; ">Users on my website</h1>

</head> <BR><BR><br>

  <div style="     float: left;
    margin-left: 15px; margin-top: -58px

  ">
  <?php
include "phptodb.php";
$sql = "SELECT first_name, last_name, email, home_address, home_phone, cell_phone FROM user_info";
$result = mysqli_query($mysqli, $sql);

echo "<div
>
<head>
<style>
a {
  background-color: black;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
}
        .users {
        font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
         border-collapse: collapse;
         width: 100%
        }

        .users td, .customers th {
         border: 1px solid #ddd;
         padding: 8px;
        }

        .users tr:nth-child(even){background-color: #f2f2f2;}

        .users tr:hover {background-color: #ddd;}

        .users th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #000000;
            color: white;
        }
    </style>
</head>

    
<table id='users' class='users'>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
<th>Home Address</th>
<th>Home Phone</th>
<th>Cell Phone</th>
  </tr>";
if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["first_name"] . '</td><td>' . $row["last_name"] . '</td><td>'
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

<?php
// $ch = curl_init("http://54.241.169.38/rest/read.php");
// $fp = fopen("/var/www/html/rest/userStore.txt", "w");

$ch = curl_init("http://app.ragini-dwivedi.com/getUsersMysql.php");
$fp = fopen("userStore.txt", "w");

curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);

curl_exec($ch);
curl_close($ch);
fclose($fp);
?>
<html>
<div>
<?php
//$data = json_decode(file_get_contents("/var/www/html/rest/userStore.txt"));
$data = json_decode(file_get_contents("userStore.txt"));

$records = $data;
echo "<div>

<table id='users2' class='users'>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
<th>Home Address</th>
<th>Home Phone</th>
<th>Cell Phone</th>
  </tr>";
echo "<br><h1>Users from Ragini's website </h1>";
foreach ($records as $record) {
    echo "<tr><td>" . $record->first_name . '</td><td>' . $record->last_name . '</td><td>'
      . $record->email . '</td><td>'
    . $record->home_address . '</td><td>'
    . $record->home_phone . '</td><td>'
    . $record->cell_phone . '</td>';
}
echo "</div>";
?>
</div>
</body>
</html>