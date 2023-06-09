<?php 

$servername = "localhost";
 $username = "esraas";
 $password = "unmqqq9n1HS4pg==";
 $dbname = "esraas_dalida_newsletter";

if (isset($_POST['username']) && !empty($_POST['username']) && isset($_POST['password']) && !empty($_POST['password'])) {
    $errorCode = true;
    
    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sth = $conn->prepare("SELECT `username`, `password` FROM `users` WHERE `username`=:username");
        $sth->bindValue(':username', $_POST['username'], PDO::PARAM_STR);
        $sth->execute();
        $res = $sth->fetch(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e){
        $errorCode = $e->getCode();
    }
    $conn = null;
    if (isset($res['password']) && password_verify($_POST['password'], $res['password'])){
        echo json_encode(["responseServer"=>true,"responseDB"=>$errorCode , "connection"=>true]);
        session_start();
        $_SESSION['user'] = $_POST['username'];
    } else {
        echo json_encode(["responseServer"=>true, "responseDB"=>$errorCode, "connection"=>false]);
    }
} else {
    echo json_encode(["responseServer"=>false]);
}
?>
