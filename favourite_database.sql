-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 15, 2020 at 11:12 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `favourite`
--

-- --------------------------------------------------------

--
-- Table structure for table `fav_items`
--

DROP TABLE IF EXISTS `fav_items`;
CREATE TABLE IF NOT EXISTS `fav_items` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `title` varchar(15) NOT NULL,
  `img` varchar(20) NOT NULL,
  `descript` varchar(350) NOT NULL,
  `icon` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fav_items`
--

INSERT INTO `fav_items` (`id`, `title`, `img`, `descript`, `icon`) VALUES
(1, 'Sleeping', 'sleeping.jpg', 'Sleep is the perfect gettaway from homework. It brings me joy to wake up in the morning knowing ill spend my day on the computer. ', 'bed.png'),
(2, 'Running', 'running.jpg', 'Running increases my energy and clears head. Getting out of the house and getting fresh air in the morning is the best way to start my day.', 'shoe.png'),
(3, 'Reading', 'reading.jpg', 'Reading is a great pass time with great benefits. I learn new ideas and concepts whilst relaxing. It\'s the perfect get away from life.', 'book.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
