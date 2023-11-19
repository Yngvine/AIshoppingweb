<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "web_db"; 

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();
    // Retrieve username and password from the form
    $username = $_POST["mail"];
    $password = $_POST["password"];

    $conn = new mysqli($servername, $username, $password, $database);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $password = md5($password);
    $sql = "SELECT * FROM usuarios WHERE CorreoElectronico = '$mail' AND Contrasena = '$password'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    if ($result->num_rows > 0) {
        $_SESSION["username"] = $username;
        //if admin value is 1, then the user is an admin
        if ($row["admin"] == 1) {
            $_SESSION["admin"] = true;
        }
        else {
            $_SESSION["admin"] = false;
        }
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
