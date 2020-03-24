<html><title>Search Results</title><head>
<h1 >Search Results by First Name</h1>
</head>
<body bgcolor="black" text="white" style="text-align: center">
  
  <?php
include "phptodb.php";
$fname = $_GET["fname"];
$sql = "SELECT * FROM user_info where first_name = '$fname'";
$result = mysqli_query($mysqli, $sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<br> First Name: " . $row["first_name"]. "<br>". " Last Name: " . $row["last_name"]."<br>". " Email: " . $row["email"] ."<br>". "Address: " . $row["home_address"] ."<br>". "Home Phone: " . $row["home_phone"] . "<br>" . "Cell Phone: " . $row["cell_phone"] . "<br>";
    }
} else {
    echo "No results found for your search";
}
echo "<br> <br> <a href='userSearch.php' style='color: white'>Click here</a> to go back to search users <br>"; 
echo "<br> <a href='login.php' style='color: white'>Click here</a> to go back to Login page";

?></div>