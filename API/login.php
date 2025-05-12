<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->email) || !isset($data->password)) {
    echo json_encode(["status" => 0, "message" => "Missing credentials"]);
    exit;
}

$email = trim($data->email);
$password = trim($data->password);


$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':email', $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

error_log("Entered Email: $email");
error_log("Entered Password: $password");

if ($user) {
    $hashedPassword = $user['password'];
    error_log("DB Hashed Password: $hashedPassword");

    if (password_verify($password, $hashedPassword)) {
        $_SESSION['email'] = $user['email']; 
        echo json_encode(["status" => 1, "message" => "Login successful"]);
    } else {
        echo json_encode(["status" => 0, "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["status" => 0, "message" => "User not found"]);
}
