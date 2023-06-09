<?php
$servername = "localhost";
$username = "dalida";
$password = "esraa3012";
$dbname = "newsletter";


$_POST = json_decode(file_get_contents('php://input'), true);


if (isset($_POST) && !empty($_POST)) {
    $errorCode = true;
    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sth = $conn->prepare("DELETE FROM `newsletter` WHERE `email`=:email;");
        $sth->bindParam(':email', $_POST, PDO::PARAM_STR);
        $sth->execute();
    }
    catch(PDOException $e){
        $errorCode = $e->getCode();
    }
    $conn = null;
    echo json_encode(["responseServer"=>true, "responseDB"=>$errorCode]);
} else {
    echo json_encode(["responseServer"=>false]);
}

?>


