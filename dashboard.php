<?php
session_start();
if(!isset($_SESSION['user']) || $_SESSION['user'] !== "dalida"){
    header("Location: login.php");
    exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Voltaire&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style2.css"/>
    <script src="script2.js" defer></script>
    <title>NewsLetter</title>
</head>
<body>
        <?php 
            include("popup.html");
        ?>
    <div id="container">
        
        <img class="logo"  src="DALIDA.png" alt="logo">
<div id="news">
    <h1>Newsletter List</h1>
    <div class="search-container">
        <form>
        <!-- action="search.php" -->
          <input type="text" placeholder="Search.." name="search" id="search">
        </form>
    </div>
    <p ><a href="export.php"  id="export"><button class="button_export"> Export CSV </button></a></p>
</div>
<table class="table">
    <thead>
    <tr class="head">
        <th width="50%" id="mail">Email-Address</th>
        <th width="30%" id="head_date">Date</th>
        <th width="20%" id="head_bin">Unsubscribe</th>
    </tr>
    </thead>
    <tbody>

    </tbody>
</table>
<p id="record">Display of <span id="record_select">X</span> recordings on <span id="record_total">X</span>.</p>
<input type="button" value="See More" id="more">
<div id="logout">
    <h2>LogOut</h2>
    <a href="logout.php" id="logut">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="55" viewBox="0 0 50 55" fill="none">
    <path d="M33.3333 38.9583V32.0833H18.75V22.9166H33.3333V16.0416L43.75 27.5L33.3333 38.9583ZM29.1667 4.58331C30.2717 4.58331 31.3315 5.0662 32.1129 5.92574C32.8943 6.78528 33.3333 7.95107 33.3333 9.16665V13.75H29.1667V9.16665H10.4167V45.8333H29.1667V41.25H33.3333V45.8333C33.3333 47.0489 32.8943 48.2147 32.1129 49.0742C31.3315 49.9338 30.2717 50.4166 29.1667 50.4166H10.4167C9.3116 50.4166 8.25179 49.9338 7.47039 49.0742C6.68899 48.2147 6.25 47.0489 6.25 45.8333V9.16665C6.25 7.95107 6.68899 6.78528 7.47039 5.92574C8.25179 5.0662 9.3116 4.58331 10.4167 4.58331H29.1667Z" fill="#F9BA46"/>
    </svg>
        </a>
</div>
</div>
<template id="templatemail">
        <tr>
            <td class="admin_email"></td>
            <td class="admin_date"></td>
            <td class="admin_bin">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M16.6667 9.99999H23.3333C23.3333 9.11594 22.9822 8.26809 22.357 7.64297C21.7319 7.01785 20.8841 6.66666 20 6.66666C19.116 6.66666 18.2681 7.01785 17.643 7.64297C17.0179 8.26809 16.6667 9.11594 16.6667 9.99999V9.99999ZM13.3333 9.99999C13.3333 8.23188 14.0357 6.53619 15.286 5.28595C16.5362 4.03571 18.2319 3.33333 20 3.33333C21.7681 3.33333 23.4638 4.03571 24.7141 5.28595C25.9643 6.53619 26.6667 8.23188 26.6667 9.99999H35C35.442 9.99999 35.866 10.1756 36.1785 10.4882C36.4911 10.8007 36.6667 11.2246 36.6667 11.6667C36.6667 12.1087 36.4911 12.5326 36.1785 12.8452C35.866 13.1577 35.442 13.3333 35 13.3333H33.53L32.0533 30.5667C31.9114 32.2308 31.15 33.781 29.9198 34.9106C28.6896 36.0402 27.0802 36.6669 25.41 36.6667H14.59C12.9199 36.6669 11.3105 36.0402 10.0803 34.9106C8.85005 33.781 8.08864 32.2308 7.94668 30.5667L6.47001 13.3333H5.00001C4.55798 13.3333 4.13406 13.1577 3.8215 12.8452C3.50894 12.5326 3.33334 12.1087 3.33334 11.6667C3.33334 11.2246 3.50894 10.8007 3.8215 10.4882C4.13406 10.1756 4.55798 9.99999 5.00001 9.99999H13.3333ZM25 20C25 19.558 24.8244 19.134 24.5119 18.8215C24.1993 18.5089 23.7754 18.3333 23.3333 18.3333C22.8913 18.3333 22.4674 18.5089 22.1548 18.8215C21.8423 19.134 21.6667 19.558 21.6667 20V26.6667C21.6667 27.1087 21.8423 27.5326 22.1548 27.8452C22.4674 28.1577 22.8913 28.3333 23.3333 28.3333C23.7754 28.3333 24.1993 28.1577 24.5119 27.8452C24.8244 27.5326 25 27.1087 25 26.6667V20ZM16.6667 18.3333C16.2246 18.3333 15.8007 18.5089 15.4882 18.8215C15.1756 19.134 15 19.558 15 20V26.6667C15 27.1087 15.1756 27.5326 15.4882 27.8452C15.8007 28.1577 16.2246 28.3333 16.6667 28.3333C17.1087 28.3333 17.5326 28.1577 17.8452 27.8452C18.1577 27.5326 18.3333 27.1087 18.3333 26.6667V20C18.3333 19.558 18.1577 19.134 17.8452 18.8215C17.5326 18.5089 17.1087 18.3333 16.6667 18.3333Z" fill="#F9BA46"/>
            </svg></td>
        </tr>
    </template>

</body>
</html>