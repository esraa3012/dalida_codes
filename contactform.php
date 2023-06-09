<?php

$servername = "localhost";
// $username = "esraas";
// $password = "unmqqq9n1HS4pg==";
// $dbname = "esraas_dalida_newsletter";
$username = "dalida";
$password = "esraa3012";
$dbname = "newsletter";

if (isset($_POST['email']) && !empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $errorCode = true;
    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = $conn->prepare("INSERT INTO newsletter (email) VALUES ( :email )");
        $sql->bindParam(':email', $_POST['email'], PDO::PARAM_STR);
        $sql->execute();
    }
    catch(PDOException $e){
        $errorCode = $e->getcode();
    }
    $conn = null;
    echo json_encode(["responseServer"=>true, "responseDB"=>$errorCode]);
    
} else {
    echo json_encode(["responseServer"=>false]);
}

?>