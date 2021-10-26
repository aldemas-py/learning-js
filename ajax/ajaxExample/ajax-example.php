<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "id";
	
//Connect to MySQL Server
$link = mysqli_connect($dbhost, $dbuser, $dbpass);
	
//Select Database
mysqli_select_db($link, $dbname) or die(mysqli_error($link));
	
// Retrieve data from Query String
$age = $_GET['age'];
$sex = $_GET['sex'];
$wpm = $_GET['wpm'];
	
// Escape User Input to help prevent SQL Injection
$age = mysqli_real_escape_string($link, $age);
$sex = mysqli_real_escape_string($link, $sex);
$wpm = mysqli_real_escape_string($link, $wpm);
	
//build query
$query = "SELECT * FROM ajax_example WHERE sex = '$sex'";

if(is_numeric($age))
   $query .= " AND age <= $age";

if(is_numeric($wpm))
   $query .= " AND wpm <= $wpm";
	
//Execute query
$qry_result = mysqli_query($link, $query) or die(mysqli_error($link));

// //Build Result String
// $display_string = "<table>";
// echo "<tr>";
// echo "<th>Name</th>";
// echo "<th>Age</th>";
// echo "<th>Sex</th>";
// echo "<th>WPM</th>";
// echo "</tr>";

// // Insert a new row in the table for each person returned
// while($row = mysqli_fetch_array($qry_result)) {
//    echo "<tr>";
//    echo "<td>$row[name]</td>";
//    echo "<td>$row[age]</td>";
//    echo "<td>$row[sex]</td>";
//    echo "<td>$row[wpm]</td>";
//    echo "</tr>";
// }

//Build Result String
echo "<table>";
echo "<tr>";
echo "<th>Name</th>";
echo "<th>Age</th>";
echo "<th>Sex</th>";
echo "<th>WPM</th>";
echo "</tr>";

// Insert a new row in the table for each person returned
while($row = mysqli_fetch_array($qry_result)) {
   echo "<tr>";
   echo "<td>" + $row["name"] + "</td>";
   echo "<td>" + $row["age"] + "</td>";
   echo "<td>" + $row["sex"] + "</td>";
   echo "<td>" + $row["wpm"] + "</td>";
   echo "</tr>";
}


echo "Query: " . $query . "<br />";
echo "</table>";

echo $display_string;
?>