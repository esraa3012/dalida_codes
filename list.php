<?php
$servername = "localhost";
$username = "dalida";
$password = "esraa3012";
$dbname = "newsletter";

$limit = 10;
$errorCode = true;
try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sth = $conn->prepare("SELECT `email`, `date` FROM `newsletter` ORDER BY `date` LIMIT ".$limit);
    $sth->execute();
    $res=$sth->fetchAll(PDO::FETCH_ASSOC);
}
catch(PDOException $e){
    $errorCode = $e->getCode();
}
$conn = null;
echo json_encode(["data"=>$res]);

try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sth = $conn->prepare("SELECT COUNT(`email`) as `totalNumberEmail` FROM `newsletter`");
    $sth->execute();
    $res=$sth->fetchAll(PDO::FETCH_ASSOC);
}
catch(PDOException $e){
    $errorCode = $e->getCode();
}
$record=json_encode($res[0]);
header('Record-number: '.$record);
header('Select-number: '.$limit);

?>