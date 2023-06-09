<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Voltaire&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style1.css"/>
    <script src="script1.js" defer></script>
    <title>Login</title>
</head>
<body>
<main>
    <div id="container">
        
            <img class="logo"  src="DALIDA.png" alt="logo">
    
        
        <form id="login_form" novalidate>

             <label for="username">Username</label>  <br> 
             <input type="text" id="login_name" class="login_input" name="username" required>
             <label for="password">Password</label>  <br>
             <input type="password" id="login_pass" class="login_input" name="password" required>
             <input type="submit" id="login_button" value="Log in">
          
        </form>
    </div>
</main>
</body>
</html>