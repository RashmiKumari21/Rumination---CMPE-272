
<!-- References:
https://www.w3schools.com/
https://css-tricks.com/css-basics-styling-links-like-boss/
 -->
<html>
    <title>Most Viewed Services</title>
    <head>

    <a style="float:right; color:white; margin-top:25p" href="services.php">Go back to Services</a>

        <h1 style="margin-right: 14px; margin-top:10px;">Most Viewed Services</h1>
</head>
<style>
a {
  background-color: black;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  text-transform: uppercase;
}
        #servicesmost {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
         border-collapse: collapse;
         width: 100%;
        }

        #servicesmost td, #customers th {
         border: 1px solid #ddd;
         padding: 8px;
        }

        #servicesmost tr:nth-child(even){background-color: #f2f2f2;}

        #servicesmost tr:hover {background-color: #ddd;}

        #servicesmost th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #000000;
            color: white;
        }
    </style>

    <body>
    <table id="servicesmost">
               <tr>
               <th>Services</th>
               <th>Number of visits</th>
               </tr>
  
               <?php



if (!isset($_COOKIE['services']))
{
    echo "<span style='color:blue'><b>No courses viewed yet</b></span><br/><br/>";
}
else
{
    $servicesData = $_COOKIE['services'];

    arsort($servicesData);
    foreach(array_slice($servicesData,0,5) as $key=> $value)
    {
        print("<tr><td>".str_replace('_',' ',$key)."</td><td>$value</td></tr>");
    }
    echo "</table>";
}
?>
</body>
</html>