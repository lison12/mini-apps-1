DROP DATABASE IF EXISTS ;
CREATE DATABASE name;

USE name;

CREATE TABLE name (
  id TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50) NOT NULL, 
	email VARCHAR(50),
  password INT,
  address VARCHAR(50),
  phone INT,
  credit_card INT,
  expire DATE,
  cvv TINYINT,
  zipcode TINYINT,
);


INSERT INTO animals (name) VALUES
    ('dog'),('cat'),('penguin'),
    ('lax'),('whale'),('ostrich');