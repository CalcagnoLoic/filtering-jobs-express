-- Adminer 4.8.1 MySQL 11.3.2-MariaDB-1:11.3.2+maria~ubu2204 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `description`;
CREATE TABLE `description` (
  `id_jobs` int(11) NOT NULL AUTO_INCREMENT,
  `description_jobs` text NOT NULL,
  `responsabilities` text NOT NULL,
  `benefits` text NOT NULL,
  PRIMARY KEY (`id_jobs`),
  CONSTRAINT `description_ibfk_2` FOREIGN KEY (`id_jobs`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `description` (`id_jobs`, `description_jobs`, `responsabilities`, `benefits`) VALUES
(1,	'Photosnap is looking for an experienced Senior Frontend Developer to join our team. You will lead the development of cutting-edge web applications using HTML, CSS, and JavaScript. Collaborate with designers and backend developers to create seamless user experiences for millions of users across the globe.',	'Develop and optimize user-facing features.\r\nEnsure responsiveness and performance across devices.\r\nCollaborate with cross-functional teams in an Agile environment.\r\nMentor junior developers and uphold code quality standards.',	'Competitive salary: $120,000 - $140,000/year.\r\nComprehensive health insurance (medical, dental, vision).\r\n401(k) with company match.\r\nGenerous paid time off and flexible working hours.\r\nProfessional development budget for conferences and certifications.'),
(2,	'Manage is seeking a skilled Fullstack Developer to work remotely on a part-time basis. You will build and maintain scalable web applications using Python for backend logic and React for dynamic user interfaces.',	'Develop APIs and microservices to support frontend applications.\r\nImplement user-centric designs with React.\r\nMaintain clean and reusable code.\r\nTroubleshoot and resolve bugs across the stack.',	'Hourly rate: $50-$70/hour, depending on experience.\r\nRemote-first culture with flexible schedules.\r\nAccess to cutting-edge tools and technologies.\r\nOpportunities for growth in a collaborative team environment.'),
(3,	'Account is hiring a Junior Frontend Developer to contribute to our growing suite of web solutions. This is a fantastic opportunity for someone new to development to gain hands-on experience working with JavaScript, React, and Sass.',	'Build user-friendly web components.\r\nDebug and test features for performance and reliability.\r\nParticipate in code reviews and team meetings.',	'Build user-friendly web components.\r\nDebug and test features for performance and reliability.\r\nParticipate in code reviews and team meetings.'),
(4,	'MyHome is seeking a Junior Frontend Developer to work on contract-based projects, improving the aesthetics and usability of our web applications. Using CSS and JavaScript, you’ll refine interfaces to align with modern UX standards.',	'Implement responsive designs for web applications.\r\nCollaborate with designers and developers to refine UI/UX.\r\nTest code and troubleshoot compatibility issues.',	'Contract rate: $30-$50/hour based on project scope.\r\nFlexible work hours with deliverable-based timelines.\r\nOpportunity to build your portfolio with high-impact projects.'),
(5,	'Loop Studios is on the hunt for a Software Engineer passionate about crafting high-quality digital experiences. You will work across the stack, leveraging JavaScript, Ruby, and Sass to deliver innovative solutions to our global audience.',	'Write clean, scalable code for front and backend systems.\r\nBuild and maintain APIs for seamless integration.\r\nContribute to the ideation of new features and improvements.',	'$100,000 - $120,000/year.\r\nHealth, vision, and dental insurance.\r\nUnlimited PTO and remote-first environment.\r\nAnnual retreat for team building and networking.'),
(6,	'FaceIt is hiring a Junior Backend Developer to support the development of robust backend solutions. You will primarily work with Ruby and Ruby on Rails (RoR) to design and maintain databases and APIs.',	'Build and maintain backend architecture.\r\nOptimize database performance.\r\nWrite and test scalable backend logic.',	'£35,000 - £45,000/year.\r\nPension scheme and private health insurance.\r\nMonthly team lunches and wellness programs.\r\nOpportunities for rapid growth in a fast-paced environment.'),
(7,	'Shortly is seeking a Junior Developer to bring creative solutions to life. If you are proficient in HTML, JavaScript, and Sass, and are eager to expand your skills, this is the perfect opportunity to start your career.',	'Develop and test features for our web platform.\r\nImplement design mockups into responsive code.\r\nCollaborate with senior developers on feature delivery.',	'$40,000 - $60,000/year.\r\nRemote-first approach with flexible working hours.\r\nPaid learning resources and mentorship programs.\r\nEquity options for long-term team members.'),
(8,	'Join Insure as a Junior Frontend Developer and create visually stunning, high-performing interfaces using JavaScript, Vue.js, and Sass. Be part of a company transforming the insurance industry.',	'Develop sleek, modern UI components.\r\nOptimize web performance for cross-device compatibility.\r\nCollaborate closely with the design and backend teams.',	'$50,000 - $70,000/year.\r\nStock options and annual bonuses.\r\nComprehensive medical and dental insurance.\r\nGym membership and monthly wellness stipends.'),
(9,	'Eyecam Co. is hiring a Full Stack Engineer to build and enhance scalable web solutions. Using JavaScript, Python, and Django, you’ll work on innovative tech solutions impacting millions globally.',	'Build robust, maintainable systems.\r\nCollaborate on API development and integrations.\r\nOptimize existing applications for better performance.',	'$90,000 - $110,000/year.\r\nFlexible PTO and remote work.\r\nHome office budget and tech allowance.\r\nLearning and development stipend.\r\n'),
(10,	'The Air Filter Company is looking for a Front-end Developer to design and develop engaging interfaces using JavaScript, React, and Sass. This part-time role is ideal for a junior developer looking to make an impact in a fast-paced environment.',	'Create and maintain responsive web components.\r\nCollaborate on UI/UX designs and prototypes.\r\nDebug and troubleshoot interface issues.',	'$25-$40/hour.\r\nRemote-friendly environment.\r\nAnnual tech stipend for software and hardware upgrades.\r\nFlexible hours tailored to your schedule.')

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id_jobs` int(11) NOT NULL,
  `url` varchar(128) NOT NULL,
  KEY `id_jobs` (`id_jobs`),
  CONSTRAINT `images_ibfk_2` FOREIGN KEY (`id_jobs`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `images` (`id_jobs`, `url`) VALUES
(1,	'./images/photosnap.svg'),
(2,	'./images/manage.svg'),
(3,	'./images/account.svg'),
(4,	'./images/myhome.svg'),
(5,	'./images/loop-studios.svg'),
(6,	'./images/faceit.svg'),
(7,	'./images/shortly.svg'),
(8,	'./images/insure.svg'),
(9,	'./images/eyecam-co.svg'),
(10,	'./images/the-air-filter-company.svg')

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
(10,	'The Air Filter Company',	'Worldwide',	'1mo ago',	'Part Time',	'Junior',	'Front-end Dev',	'Frontend')

DROP TABLE IF EXISTS `status`;
CREATE TABLE `status` (
  `id_jobs` int(11) NOT NULL,
  `isNew` bit(1) NOT NULL,
  `isFeatured` bit(1) NOT NULL,
  KEY `id_jobs` (`id_jobs`),
  CONSTRAINT `status_ibfk_2` FOREIGN KEY (`id_jobs`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `status` (`id_jobs`, `isNew`, `isFeatured`) VALUES
(1,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0),
(2,	CONV('1', 2, 10) + 0,	CONV('1', 2, 10) + 0),
(3,	CONV('1', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(4,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(5,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(6,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(7,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(8,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(9,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0),
(10,	CONV('0', 2, 10) + 0,	CONV('0', 2, 10) + 0)

DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id_jobs` int(11) NOT NULL AUTO_INCREMENT,
  `tools` varchar(255) NOT NULL,
  `languages` varchar(255) NOT NULL,
  PRIMARY KEY (`id_jobs`),
  CONSTRAINT `tags_ibfk_2` FOREIGN KEY (`id_jobs`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tags` (`id_jobs`, `tools`, `languages`) VALUES
(1,	'[]',	'[\"HTML\", \"CSS\", \"JavaScript\"]'),
(2,	'[\"React\"]',	'[\"Python\"]'),
(3,	'[\"React\", \"Sass\"]',	'[\"JavaScript\"]'),
(4,	'[]',	'[\"CSS\", \"JavaScript\"]'),
(5,	'[\"Sass\"]',	'[\"JavaScript\", \"Ruby\"]'),
(6,	'[\"RoR\"]',	'[\"Ruby\"]'),
(7,	'[\"Sass\"]',	'[\"HTML\", \"JavaScript\"]'),
(8,	'[\"Vue\", \"Sass\"]',	'[\"JavaScript\"]'),
(9,	'[\"Django\"]',	'[\"JavaScript\", \"Python\"]'),
(10,	'[\"React\", \"Sass\"]',	'[\"JavaScript\"]')

-- 2024-11-21 11:18:16