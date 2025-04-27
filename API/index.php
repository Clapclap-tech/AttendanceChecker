<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "POST":
        $user = json_decode(file_get_contents('php://input'));

        $sql = "INSERT INTO users(id, name, email) VALUES(:id, :name, :email)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':id', $user->studentID);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'User added successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to add user.'];
        }

}
