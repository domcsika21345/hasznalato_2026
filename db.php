<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "hasznaltauto";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Hiba: " . $conn->connect_error);
}
?>
