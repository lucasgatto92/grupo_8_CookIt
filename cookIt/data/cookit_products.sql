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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` smallint(4) NOT NULL,
  `descuento` smallint(2) NOT NULL,
  `descripcion` varchar(512) NOT NULL,
  `tiempo` smallint(3) NOT NULL,
  `apto` varchar(100) DEFAULT NULL,
  `porciones` smallint(2) NOT NULL,
  `calorias` smallint(4) NOT NULL,
  `imagenes` varchar(255) NOT NULL,
  `receta` varchar(45) NOT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategorie_idx` (`idCategory`),
  CONSTRAINT `idCategorie` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Pizza negra',450,0,'Hace unos días, cuando publicamos nuestra receta de Mini pizzas para Halloween, uno de vosotros nos dejó un comentario muy interesante contándonos que había visto en un restaurante pizzas de masa negra hechas con tinta de calamar, como podréis entender no hemos sido capaces de esperar al próximo Halloween para probar a hacer en casa esta original masa de pizza negra, si es que nos puede el ansía viva',45,'',4,500,'images-1598381128354.jpg,images-1598381128357.jpg','receta-1598381128360.pdf',1),(2,'Buey de mar a la portuguesa (sapateira)',1230,0,'La receta de buey de mar a la portuguesa (sapateira) es un gran clásico en el Algarve portugués. Merece la pena ir a probarlo, y desde allí nos trajimos la receta.',60,'',4,125,'images-1598382215307.jpg,images-1598382215307.jpg','receta-1598382215315.pdf',1),(3,'Pollo en pepitoria',750,5,'Esta receta de pollo en pepitoria es un gran clásico entre los guisos caseros y sencillos de siempre. Aquí tienes la receta tradicional.',45,'',0,250,'images-1598382475869.jpg,images-1598382475874.jpg','receta-1598382475875.pdf',1),(4,'Berenjenas rellenas de carne',400,0,'Aquí tienes la receta para preparar la clásica receta de berenjenas rellenas de carne picada. Te contamos cómo prepararlas y algún truquillo para triunfar.',45,'',3,120,'images-1598382665690.jpg,images-1598382665695.jpg','receta-1598382665697.pdf',2),(5,'Ensalada de aguacate y gambas con salsa mil islas',780,2,'Esta receta de ensalada de aguacate y gambas con salsa mil islas se convierte en un plato de fiesta gracias a la maravillosa salsa que la adereza. Verás qué fácil es hacerla.',20,'',4,95,'images-1598383185577.jpg,images-1598383185583.jpg','receta-1598383185588.pdf',2),(6,'Medallones de solomillo al Jerez',950,5,'Estos medallones de solomillo al Jerez se preparan en un momento. Resulta un plato sencillo y la vez festivo, con un salsa deliciosa, casera y para mojar pan.',60,'',6,160,'images-1598383642231.jpg,images-1598383642240.jpg','receta-1598383642247.pdf',2),(7,'Gazpacho de sandía',550,0,'Esta receta de gazpacho de sandía es fresca y natural, una opción original para dar un toque frutal al gazpacho de siempre, y un cóctel de salud y sabor.',15,'',4,75,'images-1598383950157.jpg,images-1598383950162.jpg','receta-1598383950167.pdf',3),(8,'Ensalada de brócoli, manzana y nueces',490,0,'Con esta ensalada de brócoli, manzana y nueces preparas en pocos minutos una ensalada de verduras, crujientes y sabrosas, con un aderezo de yogur que la convierte en un plato completo y lleno de sabor.',15,'vegano',0,55,'images-1598384138830.jpg,images-1598384138832.jpg','receta-1598384138834.pdf',5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-25 21:52:07
