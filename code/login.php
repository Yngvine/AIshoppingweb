<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "web_db"; 

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();
    // Retrieve username and password from the form
    $user_mail = $_POST["username"];
    $user_password = $_POST["password"];

    $conn = new mysqli($servername, $username, $password, $database);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $user_password = md5($user_password);
    $sql = "SELECT * FROM usuarios WHERE CorreoElectronico = '$user_mail' AND Contrasena = '$user_password'";
    echo $sql;
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    if ($result->num_rows > 0) {
        $_SESSION["username"] = $user_mail;
        if ($row["admin"] == 1) {
            $_SESSION["admin"] = true;
        }
        else {
            $_SESSION["admin"] = false;
        }
        print_r( $result );
        header("Location: mainPage.html");
        exit();
    }
    else {
        $_SESSION["username"] = "";
        echo -1;
    }
    $conn->close();
}
?>
