CREATE DATABASE  IF NOT EXISTS `cookit` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `cookit`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: cookit
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `wines`
--

DROP TABLE IF EXISTS `wines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(512) NOT NULL,
  `precio` int(4) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wines`
--

LOCK TABLES `wines` WRITE;
/*!40000 ALTER TABLE `wines` DISABLE KEYS */;
INSERT INTO `wines` VALUES (1,'FUEGO NEGRO MALBEC\n','De color rojo brillante con aristas violáceas. En nariz, presenta una intensidad propia de los descriptores aromáticos del varietal, como guindas, fresas y cassis en perfecta conjunción con la vainilla aportada por su paso por el roble francés de tostado medio. En boca se siente persistente y elegante, es un vino perfectamente equilibrado, amable, dulce y delicado.',302,'vino01.jpg'),(2,'DV CATENA CABERNET MALBEC\n','DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas. \n\nA la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble. \n\nEn boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.',990,'vino02.jpg'),(3,'EL GRAN ENEMIGO GUALTALLARY CABERNET','Posee algunos aromas balsámicos, notas medicinales, vestigios de piel de naranja, azafrán y un toque de especias dulces. \n\nEstá construido alrededor de taninos muy finos y un notable núcleo de acidez que actúa como espina dorsal, dándole longitud y largo final. Hay unas 3.000 botellas de este vino. Fue embotellado en marzo de 2017.',2730,'vino03.jpg'),(4,'FINCA GABRIEL MERLOT\n','Color rojo rubí con tonos bordó. \n\nAroma delicado e intenso a frutas secas con un dejo de vainilla y chocolate al final. \n\nSabor suave y redondo.',275,'vino04.jpg'),(5,'CLOS DE LOS SIETE','Un blend de un rojo intenso con aromas a frutos rojos maduros y especias. Posee taninos maduros que dan una sensación de redondez y una amplitud y final perdurables.',950,'vino05.jpg'),(6,'ANGELICA ZAPATA MALBEC\n','Angélica Zapata Malbec es un blend proveniente de uvas Malbec de diferentes viñedos. El resultado es un vino de gran concentración y elegancia. \n\nEl viñedo Angélica aporta aromas de ciruelas maduras, mermelada de frutos rojos, suavidad y volumen al paladar. \n\nLa Pirámide entrega aromas de frutos negros de carozo y notas especiadas de pimienta negra y clavo de olor. \n\nNicasia cuartel 2, aporta frutos rojos del bosque , frescura y elegancia. ',2840,'vino06.jpg'),(7,'PHEBUS MALBEC\n','Color rojo vivaz con bordes violetas típico de esta variedad. De su nariz se desprenden intensos aromas a frutas rojas con toques florales.   Su boca es persistente, con taninos dulces y una buena franqueza varietal.',331,'vino07.jpg'),(8,'ALAMOS MALBEC\n','Presenta un profundo color púrpura con reflejos violeta. \n\nSu aroma remite a intensos frutos negros con ligeras notas florales y de tostado. \n\nEn boca es un vino de gran concentración, con pronunciados sabores a cassis y frambuesas y un leve dejo a chocolate y especias dulces provenientes del añejamiento en roble. El final es largo, con taninos maduros y sedosos.',572,'vino08.jpg'),(9,'DV CATENA MALBEC MALBEC\n','Domingo Vicente Catena Malbec es un blend proveniente de uvas Malbec de dos diferentes viñedos. \n\nEl viñedo Angelica aporta aromas de mermeladas de ciruelas maduras y moras negras, suavidad y volumen al paladar. \n\nLa Pirámide entrega aromas de frutos negros de carozo y notas de especias como pimienta negra y clavo de olor. \n\nSe conjugan de manera excepcional para dar origen a este vino, intenso y concentrado, de final largo y muy persistente.',1750,'vino09.jpg'),(10,'BIANCHI NUESTRO MARGAUX','Es un vino de color rojo rubí de intensidad media, muy buen perfume, aterciopelado sabor, estructura media, fresco joven y frutado.',3570,'vino10.jpg'),(11,'BEGANI PREMIUM BLEND\n','Rojo violáceo con reflejos al tono, profundo y vivaz. \n\nPropone un amplio abanico aromático que recorre la familia de las frutas rojas frescas y las bayas confitadas con tonos especiados y herbales. El roble juega un rol protagónico que se aprecia en las notas de palo santo y sándalo. \n\nAtaque brioso de estructura firme que se aligera en un fluir envolvente donde logra una textura untuosa. Franco, con sabores de mermeladas, taninos vivos pero amables y final prolongado.',980,'vino11.jpg'),(12,'SAINT FELICIEN MALBEC\n','Saint Felicien Malbec es un vino elegante y complejo, de color violeta oscuro y profundo, típico de los malbecs argentinos. \n\nA la nariz, intenso y concentrado, presenta aromas de moras maduras con notas ligeras de vainilla, tabaco y licor. \n\nEn boca, de impacto dulce y gran complejidad, es untuoso, con taninos suaves y redondos característicos del viñedo Angélica. De final largo y persistente, este vino muestra el gran potencial de los Malbec de Argentina.',860,'vino12.jpg');
/*!40000 ALTER TABLE `wines` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-04  0:58:18
