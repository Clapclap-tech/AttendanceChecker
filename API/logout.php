<?php
session_start();
session_unset();
session_destroy();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type"); // 👈 ADD THIS
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // 👈 RECOMMENDED
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

echo json_encode(["status" => 1, "message" => "Logged out"]);
