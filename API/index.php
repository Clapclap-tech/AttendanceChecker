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

$user = json_decode(file_get_contents('php://input'));


$sql = "SELECT COUNT(*) FROM users WHERE email = :email";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $user->email);
$stmt->execute();
if ($stmt->fetchColumn() > 0) {
    echo json_encode(["status" => 0, "message" => "Email already exists."]);
    exit;
}


$sql = "SELECT COUNT(*) FROM users WHERE studentID = :studentID";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':studentID', $user->studentID);
$stmt->execute();
if ($stmt->fetchColumn() > 0) {
    echo json_encode(["status" => 0, "message" => "Student ID already exists."]);
    exit;
}

$hashedPassword = password_hash($user->password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (email, password, firstName, lastName, studentID, birthdate, streetAddress, cityAddress, zipCode)
        VALUES (:email, :password, :firstName, :lastName, :studentID, :birthdate, :streetAddress, :cityAddress, :zipCode)";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $user->email);
$stmt->bindParam(':password', $hashedPassword); 
$stmt->bindParam(':firstName', $user->firstName);
$stmt->bindParam(':lastName', $user->lastName);
$stmt->bindParam(':studentID', $user->studentID);
$stmt->bindParam(':birthdate', $user->birthdate);
$stmt->bindParam(':streetAddress', $user->street);
$stmt->bindParam(':cityAddress', $user->city);
$stmt->bindParam(':zipCode', $user->zip);

if ($stmt->execute()) {
    echo json_encode(["status" => 1, "message" => "User added successfully."]);
} else {
    echo json_encode(["status" => 0, "message" => "Failed to add user."]);
}
