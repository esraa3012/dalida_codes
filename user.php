
<?php
 
 class DB{
      const HOST = 'localhost';
      const DATABASE = 'newsletter';
      const USER = 'dalida';
      const PASSWORD = 'esraa3012';

      function getDB(){
        $conn = new PDO('mysql:host='.self::HOST.';dbname='.self::DATABASE.';', self::USER, self::PASSWORD);
        return $conn;
      }

 }
 
//require __DIR__ .'/../vendor/autoload.php';
//$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
//$dotenv->load();
//$SERVER = "SERVER";
//$DATABASE = "DATABASE";
//$USERNAME = "USERNAME";
//$PASSWORD = "PASSWORD";

//define('SERVER', $_ENV['SERVER']);
//define('DATABASE', $_ENV['DATABASE']);
//define('USERNAME', $_ENV['USERNAME']);
//define('PASSWORD', $_ENV['PASSWORD']);


