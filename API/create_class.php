<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => 0, "message" => "Only POST allowed"]);
    exit;
}

$data = json_decode(file_get_contents('php://input'));

if (!$data || !isset($data->name) || trim($data->name) === '') {
    echo json_encode(["status" => 0, "message" => "Class name is required"]);
    exit;
}

$sql = "INSERT INTO classes (name, section, subject, room) VALUES (:name, :section, :subject, :room)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':name', $data->name);
$stmt->bindParam(':section', $data->section);
$stmt->bindParam(':subject', $data->subject);
$stmt->bindParam(':room', $data->room);

if ($stmt->execute()) {
    echo json_encode(["status" => 1, "message" => "Class created successfully.", "id" => $conn->lastInsertId()]);
} else {
    echo json_encode(["status" => 0, "message" => "Failed to create class."]);
}
