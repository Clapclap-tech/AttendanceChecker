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

        $sql = "SELECT COUNT(*) FROM users WHERE email = :email";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $user->email);
        $stmt->execute();
        $emailCount = $stmt->fetchColumn();

        if ($emailCount > 0) {
            $response = ['status' => 0, 'message' => 'Email already exists.'];
            echo json_encode($response);
            exit;
        }

        $sql = "SELECT COUNT(*) FROM users WHERE studentID = :studentID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':studentID', $user->studentID);
        $stmt->execute();
        $studentCount = $stmt->fetchColumn(); 

        if ($studentCount > 0) { 
            $response = ['status' => 0, 'message' => 'Student ID already exists.'];
            echo json_encode($response);
            exit;
        }

        $sql = "INSERT INTO users(email, password, firstName, lastName, studentID, birthdate, streetAddress, cityAddress, zipCode) 
                VALUES(:email, :password, :firstName, :lastName, :studentID, :birthdate, :streetAddress, :cityAddress, :zipCode)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':email', $user->email);
        $hashedPassword = password_hash($user->password, PASSWORD_DEFAULT);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':firstName', $user->firstName);
        $stmt->bindParam(':lastName', $user->lastName);
        $stmt->bindParam(':studentID', $user->studentID); 
        $stmt->bindParam(':birthdate', $user->birthdate);
        $stmt->bindParam(':streetAddress', $user->street); 
        $stmt->bindParam(':cityAddress', $user->city);    
        $stmt->bindParam(':zipCode', $user->zip); 

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'User added successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to add user.'];
        }

        echo json_encode($response);
}
