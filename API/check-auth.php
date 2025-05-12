<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if (isset($_SESSION['email'])) {
    echo json_encode([
        "loggedIn" => true,
        "email" => $_SESSION['email']
    ]);
} else {
    echo json_encode([
        "loggedIn" => false
    ]);
}
