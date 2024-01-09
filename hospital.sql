-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 24, 2023 at 05:37 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cita_medica`
--
CREATE DATABASE IF NOT EXISTS `hospital` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `hospital`;
-- --------------------------------------------------------

--
-- Table structure for table `hospitales`
--

CREATE TABLE `hospitales` (
  `hospital_id` int(11) NOT NULL,
  `hospital_nombre` varchar(30) NOT NULL,
  `hospital_direccion` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hospitales`
--

INSERT INTO `hospitales` (`hospital_id`, `hospital_nombre`, `hospital_direccion`) VALUES
(1, 'Hospital Olympia', 'Dirección: P.º de la Castellana, 259, E, 28046 Madrid'),
(2, 'Hospital Quiron', 'C. Diego de Velázquez, 1, 28223 Pozuelo de Alarcón, Madrid');

-- --------------------------------------------------------

--
-- Table structure for table `medicos`
--

CREATE TABLE `medicos` (
  `medico_id` int(11) NOT NULL,
  `medico_nombre` varchar(30) NOT NULL,
  `medico_telefono` int(9) NOT NULL,
  `medico_hospital` varchar(30) NOT NULL,
  `medico_especialidad` varchar(30) NOT NULL,
  `medico_hospital_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `medicos`
--

INSERT INTO `medicos` (`medico_id`, `medico_nombre`, `medico_telefono`, `medico_hospital`, `medico_especialidad`, `medico_hospital_id`) VALUES
(13, 'Sir Joseph Lister', 656784903, 'Hospital Quiron', 'Cardiologia', 2),
(14, 'Paracelso', 656333903, 'Hospital Olympia', 'Hematologia', 1),
(15, 'John Snow', 656781597, 'Hospital Quiron', 'Neurologia', 2),
(16, 'Margaret Sanger', 606784903, 'Hospital Olympia', 'Analisis Clinicos', 1),
(17, 'Alexander Fleming', 656784968, 'Hospital Quiron', 'Cardiologia', 2),
(18, 'Gertrude Belle Elion', 656934903, 'Hospital Quiron', 'Pediatria', 2),
(19, 'Sigmund Freud', 656783503, 'Hospital Quiron', 'Neurologia', 2),
(20, 'Edward Jenner', 656784003, 'Hospital Olympia', 'Analisis Clinicos', 1),
(21, 'Florence Nightingale', 650484903, 'Hospital Olympia', 'Pediatria', 1),
(22, 'Marie Curie', 656432897, 'Hospital Olympia', 'Hematologia', 1),
(23, 'Johann Georg Faust', 666890675, 'Hospital Quiron', 'Analisis Clinicos', 2);

-- --------------------------------------------------------

--
-- Table structure for table `seguros medicos`
--

CREATE TABLE `seguros medicos` (
  `seguros_id` int(11) NOT NULL,
  `seguros_compania` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `seguros medicos`
--

INSERT INTO `seguros medicos` (`seguros_id`, `seguros_compania`) VALUES
(1, 'ADESLAS'),
(2, 'AEGON'),
(3, 'ASISA'),
(4, 'AXA'),
(5, 'DKV'),
(6, 'MAPFRE'),
(7, 'SANITAS');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL,
  `usuario_nombre` varchar(30) NOT NULL,
  `usuario_apellido` varchar(30) NOT NULL,
  `usuario_dni` varchar(9) NOT NULL,
  `usuario_telefono` int(9) NOT NULL,
  `usuario_seguros` varchar(30) NOT NULL,
  `usuario_email` varchar(60) NOT NULL,
  `usuario_contrasenia` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `usuario_nombre`, `usuario_apellido`, `usuario_dni`, `usuario_telefono`, `usuario_seguros`, `usuario_email`, `usuario_contrasenia`) VALUES
(1, 'Ana', 'Ruiz', '12345678M', 687903456, 'DKV', 'anaruiz@gmail.com', 'contrasenia1234'),
(2, 'Marco', 'Valiente', '98765432D', 678908654, 'ASISA', 'marcoval@gmail.com', 'algo78'),
(3, 'Dana', 'Helio', '26517878X', 654234175, 'ADESLAS', 'danahelio@gmail.com', 'otracontrasenia'),
(4, 'Satoru', 'Kazu', '23344356F', 609898976, 'ADESLAS', 'satorukazu@gmail.com', 'password'),
(5, 'Christopher', 'Marlowe', '89898988J', 666763111, 'AEGON', 'chrismarlowe@gmail.com', 'doctorfaust');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospitales`
--
ALTER TABLE `hospitales`
  ADD PRIMARY KEY (`hospital_id`);

--
-- Indexes for table `medicos`
--
ALTER TABLE `medicos`
  ADD PRIMARY KEY (`medico_id`),
  ADD KEY `medico_hospital_id` (`medico_hospital_id`);

--
-- Indexes for table `seguros medicos`
--
ALTER TABLE `seguros medicos`
  ADD PRIMARY KEY (`seguros_compania`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD KEY `usuario_seguros` (`usuario_seguros`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospitales`
--
ALTER TABLE `hospitales`
  MODIFY `hospital_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medicos`
--
ALTER TABLE `medicos`
  MODIFY `medico_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `medicos`
--
ALTER TABLE `medicos`
  ADD CONSTRAINT `medicos_ibfk_1` FOREIGN KEY (`medico_hospital_id`) REFERENCES `hospitales` (`hospital_id`);

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`usuario_seguros`) REFERENCES `seguros medicos` (`seguros_compania`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
