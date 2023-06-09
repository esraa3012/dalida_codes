drop database if exists `newsletter`;
create database newsletter;
use newsletter;

CREATE TABLE newsletter (
    idnewsletter INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    date DATE DEFAULT NOW()
    );

CREATE TABLE users (
    idusers INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(255) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL
    );   

