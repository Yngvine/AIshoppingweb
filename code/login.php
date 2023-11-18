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
    if ($result->num_rows > 0) {
        $_SESSION["username"] = $username;
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
