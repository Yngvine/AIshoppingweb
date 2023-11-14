<?php
// Database configuration
$servername = "localhost"; // Replace with your MySQL server's hostname
$username = "root"; // Replace with your MySQL username (default is often "root")
$password = ""; // Replace with your MySQL password (default is often empty)
$database = "web_db"; // Replace with your database name

// Create a connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $database);

if ($mysqli->connect_error) {
    die('Error de conexión: ' . $mysqli->connect_error);
}

// Obtener el ID de la obra de arte seleccionada
$artwork_id = $mysqli->real_escape_string($_POST['id']);

// Obtener los detalles de la obra de arte
$result = $mysqli->query("SELECT * FROM obras_de_arte WHERE ID = '$artwork_id'");
$row = $result->fetch_assoc();

// Mostrar el formulario de edición
echo '<form id="editForm">';
echo '<label for="artworkName">Nombre de la Obra de Arte:</label>';
echo '<input type="text" id="artworkName" value="' . $row['Nombre'] . '">';
echo '<label for="artworkPrice">Precio de la Obra de Arte:</label>';
echo '<input type="text" id="artworkPrice" value="' . $row['Precio'] . '">';
echo '<label for="artworkImage">Imagen de la Obra de Arte:</label>';
echo '<input type="file" id="artworkImage" accept="image/*">';
echo '<label for="artworkDescription">Descripción de la Obra de Arte:</label>';
echo '<textarea id="artworkDescription">' . $row['Descripcion'] . '</textarea>';
echo '<label for="artworkYear">Año de Creación:</label>';
echo '<input type="text" id="artworkYear" value="' . $row['AnoDeCreacion'] . '">';
echo '<label for="artworkStyle">Estilo:</label>';
echo '<input type="text" id="artworkStyle" value="' . $row['Estilo'] . '">';
echo '<label for="artworkAuthor">Autor:</label>';
echo '<input type="text" id="artworkAuthor" value="' . $row['Autor'] . '">';
echo '<label for="artworkType">Tipo de Arte:</label>';
echo '<input type="text" id="artworkType" value="' . $row['TipoDeArte'] . '">';
echo '<button onclick="updateArtwork(' . $artwork_id . ')">Guardar cambios</button>';
echo '</form>';

$mysqli->close();
?>
