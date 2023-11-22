<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$database = "web_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to safely escape data
function sanitizeInput($input) {
    global $conn;
    return $conn->real_escape_string($input);
}

// Assuming you have a session and user ID is stored in the session
session_start();
$userEmail = $_SESSION["username"];

// Retrieve the user ID based on the email
$userIDQuery = "SELECT ID FROM usuarios WHERE CorreoElectronico = '$userEmail'";
$userIDResult = $conn->query($userIDQuery);

if (!($userIDResult->num_rows > 0)) {
    // User not found
    echo json_encode(array('success' => false, 'error' => 'User not found'));
    exit();
}

// Fetch the user ID from the result
$userIDRow = $userIDResult->fetch_assoc();
$userID = $userIDRow['ID'];

// Process the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Personal data
    $firstName = sanitizeInput($_POST["firstName"]);
    $lastName = sanitizeInput($_POST["lastName"]);
    $birthDate = sanitizeInput($_POST["birthDate"]);
    $nationality = sanitizeInput($_POST["nationality"]);
    $email = sanitizeInput($_POST["email"]);
    $phone = sanitizeInput($_POST["phone"]);
    $streetAddress = sanitizeInput($_POST["streetAddress"]);
    $city = sanitizeInput($_POST["city"]);
    $country = sanitizeInput($_POST["country"]);

    // Payment data
    $paymentMethod = sanitizeInput($_POST["paymentMethod"]);
    $additionalInfo = sanitizeInput($_POST["additionalInfo"]);

    // Structure additional information as a JSON string
    $additionalInfoJSON = json_encode(array(
        'firstName' => $firstName,
        'lastName' => $lastName,
        'birthDate' => $birthDate,
        'nationality' => $nationality,
        'email' => $email,
        'phone' => $phone,
        'streetAddress' => $streetAddress,
        'city' => $city,
        'country' => $country,
        'additionalInfo' => json_decode($additionalInfo, true), // Decode JSON string
    ));

    // Insert personal data into the compras table
    $sql = "INSERT INTO compras (IDUsuario, FechaDeCompra, Cantidad, Datos)
            VALUES (
                '$userID',  -- Replace with the actual user ID, assuming you have a user session
                NOW(),  -- Use the current date and time for the purchase
                1,  -- Assuming a quantity of 1 for simplicity
                '$additionalInfoJSON'
            )";

    if ($conn->query($sql) === TRUE) {
        echo "Order submitted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
