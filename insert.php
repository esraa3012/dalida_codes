<?php
$servername = "localhost";
$username = "dalida";
$password = "esraa3012";
$dbname = "newsletter";
$errorCode = true;
try{

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $password = password_hash($password, PASSWORD_BCRYPT);
    $sth = $conn->prepare("INSERT INTO users (username, password) 
    VALUES (:username, :password)");
    $sth->bindValue(':username', $username, PDO::PARAM_STR);
    $sth->bindValue(':password', $password, PDO::PARAM_STR);
    $sth->execute();
    }
catch(PDOException $e){
    $errorCode = $e->getCode();
}


?>