SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `prj`
--

-- --------------------------------------------------------

--
-- Structure de la table `album`
--

CREATE TABLE IF NOT EXISTS `album` (
  `idAlbum` int(11) NOT NULL AUTO_INCREMENT,
  `Album_name` varchar(255) NOT NULL,
  `Album_date` datetime NOT NULL,
  `idSong` int(11) NOT NULL,
  `idArtist` int(11) NOT NULL,
  PRIMARY KEY (`idAlbum`),
  KEY `idArtist` (`idArtist`),
  KEY `idSong` (`idSong`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `artist`
--

CREATE TABLE IF NOT EXISTS `artist` (
  `idArtist` int(11) NOT NULL AUTO_INCREMENT,
  `Artist_firstname` varchar(255) DEFAULT NULL,
  `Artist_lastname` varchar(255) DEFAULT NULL,
  `Arstist_stagename` varchar(255) NOT NULL,
  `idAlbum` int(11) NOT NULL,
  PRIMARY KEY (`idArtist`),
  KEY `idAlbum` (`idAlbum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

CREATE TABLE IF NOT EXISTS `playlist` (
  `id_Playlist` int(11) NOT NULL AUTO_INCREMENT,
  `Playlist_title` varchar(255) NOT NULL,
  `Playlist_Description` text NOT NULL,
  `Playlist_creationDate` datetime NOT NULL,
  `Playlist_UpdateDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idSong` int(11) NOT NULL,
  `id_User` int(11) NOT NULL,
  PRIMARY KEY (`id_Playlist`),
  KEY `idSong` (`idSong`),
  KEY `id_User` (`id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `song`
--

CREATE TABLE IF NOT EXISTS `song` (
  `idSong` int(11) NOT NULL AUTO_INCREMENT,
  `Song_title` varchar(255) NOT NULL,
  `idAlbum` int(11) NOT NULL,
  `id_Playlist` int(11) NOT NULL,
  PRIMARY KEY (`idSong`),
  KEY `idAlbum` (`idAlbum`),
  KEY `id_Playlist` (`id_Playlist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id_User` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_Playlist` int(11) NOT NULL,
  PRIMARY KEY (`id_User`),
  UNIQUE KEY `pseudo` (`pseudo`),
  KEY `id_Playlist` (`id_Playlist`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_User`, `first_name`, `last_name`, `pseudo`, `email`, `password`, `id_Playlist`) VALUES
(1, 'clarence', 'rouvel', 'jgj', 'clarence.rouvel@gmail.com', 'josee', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
