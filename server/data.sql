-- Adminer 4.8.1 MySQL 11.3.2-MariaDB-1:11.3.2+maria~ubu2204 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id-jobs` int(11) NOT NULL,
  `url` varchar(128) NOT NULL,
  KEY `id-jobs` (`id-jobs`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id-jobs`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `images` (`id-jobs`, `url`) VALUES
(1,	'./images/photosnap.svg'),
(2,	'./images/manage.svg'),
(3,	'./images/account.svg'),
(4,	'./images/myhome.svg'),
(5,	'./images/loop-studios.svg'),
(6,	'./images/faceit.svg'),
(7,	'./images/shortly.svg'),
(8,	'./images/insure.svg'),
(9,	'./images/eyecam-co.svg'),
(10,	'./images/the-air-filter-company.svg');

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `location` varchar(128) NOT NULL,
  `time` varchar(128) NOT NULL,
  `contract` varchar(128) NOT NULL,
  `level` varchar(128) NOT NULL,
  `position` varchar(128) NOT NULL,
  `role` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `jobs` (`id`, `name`, `location`, `time`, `contract`, `level`, `position`, `role`) VALUES
(1,	'Photosnap',	'USA Only',	'1d ago',	'Full Time',	'Senior',	'Senior Frontend Developer',	'Frontend'),
(2,	'Manage',	'Remote',	'1d ago',	'Part Time',	'Midweight',	'Fullstack Developer',	'Fullstack'),
(3,	'Account',	'USA Only',	'2d ago',	'Part Time',	'Junior',	'Junior Frontend Developer',	'Frontend'),
(4,	'MyHome',	'USA Only',	'5d ago',	'Contract',	'Junior',	'Junior Frontend Developer',	'Frontend'),
(5,	'Loop Studios',	'Worldwide',	'1w ago',	'Full Time',	'Midweight',	'Software Engineer',	'Fullstack'),
(6,	'FaceIt',	'UK Only',	'2w ago',	'Full Time',	'Junior',	'Junior Backend Developer',	'Backend'),
(7,	'Shortly',	'Worldwide',	'2w ago',	'Full Time',	'Junior',	'Junior Developer',	'Frontend'),
(8,	'Insure',	'USA Only',	'2w ago',	'Full Time',	'Junior',	'Junior Frontend Developer',	'Frontend'),
(9,	'Eyecam Co.',	'Worldwide',	'3w ago',	'Full Time',	'Midweight',	'Full Stack Engineer',	'Fullstack'),
(10,	'The Air Filter Company',	'Worldwide',	'1mo ago',	'Part Time',	'Junior',	'Front-end Dev',	'Frontend');

DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id-jobs` int(11) NOT NULL,
  `is-new` bit(1) NOT NULL,
  `is-featured` bit(1) NOT NULL,
  KEY `id-jobs` (`id-jobs`),
  CONSTRAINT `status_ibfk_1` FOREIGN KEY (`id-jobs`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `status` (`id-jobs`, `is-new`, `is-featured`) VALUES
(1,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0),
(2,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0),
(3,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(4,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(5,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(6,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(7,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(8,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(9,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(10,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0);

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id-jobs` int(11) NOT NULL AUTO_INCREMENT,
  `tools` varchar(255) NOT NULL,
  `languages` varchar(255) NOT NULL,
  PRIMARY KEY (`id-jobs`),
  CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`id-jobs`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tags` (`id-jobs`, `tools`, `languages`) VALUES
(1,	'[]',	'[\"HTML\", \"CSS\", \"JavaScript\"]'),
(2,	'[\"React\"]',	'[\"Python\"]'),
(3,	'[\"React\", \"Sass\"]',	'[\"JavaScript\"]'),
(4,	'[]',	'[\"CSS\", \"JavaScript\"]'),
(5,	'[\"Sass\"]',	'[\"JavaScript\", \"Ruby\"]'),
(6,	'[\"RoR\"]',	'[\"Ruby\"]'),
(7,	'[\"Sass\"]',	'[\"HTML\", \"JavaScript\"]'),
(8,	'[\"Vue\", \"Sass\"]',	'[\"JavaScript\"]'),
(9,	'[\"Django\"]',	'[\"JavaScript\", \"Python\"]'),
(10,	'[\"React\", \"Sass\"]',	'[\"JavaScript\"]');

-- 2024-11-18 12:15:25