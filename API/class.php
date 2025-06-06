<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

include 'DbConnect.php';
$objDb = new DbConnect();
$conn = $objDb->connect();

$sql = "SELECT * FROM classes";
$stmt = $conn->prepare($sql);
$stmt->execute();

$classes = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($classes);
