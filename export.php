<?php

$servername = "localhost";
$username = "dalida";
$password = "esraa3012";
$dbname = "newsletter";

$handle = fopen('php://output','w');

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$req=$conn->query('SELECT `email`, `date` FROM `newsletter`');
$ctr=0;

while($donnees=$req->fetch(PDO::FETCH_ASSOC))
{
    // Head
    if($ctr===0){
       $champs=array_keys($donnees);
        fputcsv($handle,$champs);
    }
    // Body
    fputcsv($handle,$donnees);
    $ctr++;
}

$req->closeCursor();
fclose($handle);

$today = date("d-m-Y"); 
header('Content-Type: text/csv');
header('Content-Disposition: attachment;filename=newsletter-'.$today.'.csv');

 
?>