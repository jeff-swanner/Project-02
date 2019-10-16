DROP DATABASE IF EXISTS fashion_trader;
create database fashion_trader;

use fashion_trader;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,  
  firstName varchar(30) NOT NULL,
  lastName varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  password varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT, 
  user_id int,
  department varchar(30) NOT NULL,
  product varchar(30) NOT NULL,
  price int,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);