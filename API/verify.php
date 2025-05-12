<?php
$plainPassword = '123123';
$hashedPasswordFromDB = '$2y$10$gVJRc1J2.tb2f';

if (password_verify($plainPassword, $hashedPasswordFromDB)) {
    echo "Password is valid!";
} else {
    echo "Password is INVALID!";
}