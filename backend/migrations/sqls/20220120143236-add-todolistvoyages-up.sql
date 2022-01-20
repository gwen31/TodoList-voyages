CREATE TABLE IF NOT EXISTS `users`(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE IF NOT EXISTS `departments`(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255) NOT NULL,
    region VARCHAR(100) NOT NULL,
    lat FLOAT(8,6) NOT NULL,
    lng FLOAT(9,6) NOT NULL
    );

CREATE TABLE IF NOT EXISTS `locations`(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    departments_id INT,
    details_id INT,
    visited BOOLEAN NOT NULL DEFAULT false
    );
   

CREATE TABLE IF NOT EXISTS `details`(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	type VARCHAR(100) NOT NULL
    );

ALTER TABLE locations
    ADD FOREIGN KEY (departments_id) REFERENCES departments(id);

ALTER TABLE locations
    ADD FOREIGN KEY (details_id) REFERENCES details(id);
