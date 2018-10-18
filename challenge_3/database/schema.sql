DROP DATABASE IF EXISTS store;
CREATE DATABASE store;

USE store;

CREATE TABLE checkout (
  id TINYINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50), 
	email VARCHAR(50),
  password VARCHAR(50),
  address VARCHAR(50),
  phone VARCHAR(50),
  creditcard VARCHAR(50),
  expiry VARCHAR(50),
  cvv VARCHAR(20),
  billingzip VARCHAR(20)
);


-- INSERT INTO animals (name) VALUES
--     ('dog'),('cat'),('penguin'),
--     ('lax'),('whale'),('ostrich');