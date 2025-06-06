-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2025 at 04:37 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance-checker`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `section` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `name`, `section`, `subject`, `room`, `created_at`) VALUES
(1, 'asdasd', 'asda', 'das', 'adsdasd', '2025-06-06 01:08:31'),
(2, 'asda', 'asdasda', 'asdas', 'asda', '2025-06-06 01:18:40'),
(3, 'asd', 'asd', 'asdasd', 'asd', '2025-06-06 01:19:07'),
(4, 'asd', 'asdasd', 'asdasd', 'asdas', '2025-06-06 01:25:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `studentID` int(7) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `birthdate` date NOT NULL,
  `streetAddress` varchar(60) NOT NULL,
  `cityAddress` varchar(60) NOT NULL,
  `zipCode` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`studentID`, `email`, `password`, `firstName`, `lastName`, `birthdate`, `streetAddress`, `cityAddress`, `zipCode`) VALUES
(3221316, 'kenjie090502@gmail.com', '$2y$10$kaA7xO8S/tpa7xhae5FeUu2cO/dR7Eg3DAV5mtYm0ZYsFVoCl1bt2', 'Kenjie', 'Lagaras', '2002-05-09', 'Blk.2 Lot.16(5713)(Red Plate) Villa Azalea phase2, Cotcot Li', 'Cebu', '6002'),
(3221318, 'kenjielagaras1@gmail.com', '$2y$10$Wr9Waa1eh35r.', 'Kenjie', 'Lagaras', '2002-09-05', 'Blk.2 Lot.16(5713)(Red Plate) Villa Azalea phase2, Cotcot Li', 'Cebu', '6002'),
(3221516, 'kenjielagaras@gmail.com', '$2y$10$gVJRc1J2.tb2f', 'kenjie', 'lagaras', '2002-05-09', 'Blk.2 Lot.16(5713)(Red Plate) Villa Azalea phase2, Cotcot Li', 'Cebu', '6002'),
(3221758, 'klagaras14@gmail.com', '$2y$10$q2ZD0hv4qHxDJf4K.Ir1L.x1NiheS61aTmIapqzCfZ9W9uAwAdwpm', 'Kenjie', 'Lagaras', '2002-05-09', 'Blk.2 Lot.16(5713)(Red Plate) Villa Azalea phase2, Cotcot Li', 'Cebu', '6002'),
(12312312, 'kenjielagaras2@gmail.com', '$2y$10$CAWA0KB2G2fNAg9GqcOIL.Q3l63HapHZYLi1Al/E2wTNueyKFc7Cq', '1231231', '1231231', '2002-05-09', 'Blk.2 Lot.16(5713)(Red Plate) Villa Azalea phase2, Cotcot Li', 'Cebu', '6002');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`studentID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
