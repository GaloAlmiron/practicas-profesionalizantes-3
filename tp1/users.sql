-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-05-2024 a las 06:53:52
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cuentas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(25) DEFAULT NULL,
  `saldo` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `saldo`) VALUES
(2, 'LunaGamer77', 75.25),
(3, 'ShadowNinja123', 200.00),
(4, 'DragonMasterX', 50.75),
(5, 'SpaceExplorer99', 300.30),
(6, 'PixelWizard', 150.00),
(7, 'MysterySeeker', 80.60),
(8, 'EternalDreamer', 400.20),
(9, 'SunnySideUp', 10.00),
(10, 'NeonPhantom', 50.00),
(11, 'CyberPunk99', 125.75),
(12, 'PSGgogo22', 785.00),
(13, 'TechWizard', 90.25),
(14, 'MysticMage', 180.00),
(15, 'SamuraiWarrior', 200.60),
(16, 'StealthyAssassin', 450.20),
(17, 'CosmicExplorer', 15.00),
(18, 'DreamCatcher', 75.00),
(19, 'ArcaneSorcerer', 300.00),
(20, 'StarStrider', 500.00),
(21, 'NeoGamer', 110.00),
(22, 'TechNinja', 95.50),
(23, 'GalacticHero', 700.75),
(24, 'DreamWalker', 250.25),
(25, 'CyberMage', 180.80),
(26, 'SpacePilot', 600.00),
(27, 'TechSavvy', 50.50),
(28, 'VirtualWarrior', 175.00),
(29, 'DigitalNomad', 125.20),
(30, 'PixelPioneer', 300.40),
(35, 'Master00pi', 44.88);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
