<?php

session_start();
if( isset($_POST["login"]) ){
  if( $_POST["user"] == "admin" && $_POST["pass"] == 123){
      header("Location: utama.html");
      exit;
  }else{
      $error = true;
  }
}
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuliner Samarinda</title>
</head>

    <div class="container">
        <div class="login">
        <form action="" method="post">
        <h1>LOGIN</h1>
        <h3>Kuliner <span>Samarinda</span></h3>
            Username:
            <input type="text" id="user">
            <br>
            Password:
            <input type="password" id="pass">
            <br>
            <button type="submit" id="login">LOGIN</button>
            <?php if( isset( $error)) : ?>
                <p style="color: red; font-family: sans-serif;">
                    Maaf Username atau Password Anda salah
                </p>
            <?php endif ?>
            <p>
              <a href="registrasi.html">Belum memiliki akun?</a>
            </p>
        </form>
        </div>
        <div class="right">
            <img src="https://www.bango.co.id/gfx/recipes/temp_thumb-1629186058.jpg" alt="">
        </div>
    </div>
</body>
<script src="index.js"></script>  
</html>


</body>
<script src="index.js"></script>

</html>

<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<style>

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url(img/bg5.png);
}

.container {
    width: 100%;
    display: flex;
    max-width: 850px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.login {
    width: 400px;
}

h3 {
    color: #000000;
    text-align: center;
    padding-bottom: 10%;
    font-size: 20px;
    font-family:'Raleway', sans-serif;
}

span {
    color: #9f4e12;
    font-family:'Raleway', sans-serif;
}

form {
    width: 250px;
    margin: 20px auto;
    padding-top: 5%;
}

h1 {
    margin: 20px;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
}

hr {
    border-top: 2px solid #ffa12c;
}

p {
    text-align: center;
    margin: 10px;
}

.right img {
    width: 450px;
    height: 100%;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

form label {
    display: block;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
}

input {
    width: 100%;
    margin: 2px;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid gray;
}

button {
    border: none;
    outline: none;
    padding: 8px;
    width: 252px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
    background: #9f4e12;
}

button:hover {
    background: rgba(214, 86, 64, 1);
}


@media (max-width: 880px) {
    .container {
        width: 100%;
        max-width: 750px;
        margin-left: 20px;
        margin-right: 20px;
    }

    form {
        width: 300px;
        margin: 20px auto;
    }

    .login {
        width: 400px;
        padding: 20px;
    }

    button {
        width: 100%;
    }

    .right img {
        width: 100%;
        height: 100%;
    }
}

	</style>
</head>

</html>
