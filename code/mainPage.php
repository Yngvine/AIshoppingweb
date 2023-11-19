<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores y Sueños</title>

    <!-- Agregar el enlace al archivo CSS de Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="añadirObras.js"></script>

    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <style>
        /* Add your custom styles here */
        .chart-icon {
            position: fixed;
            top: 10px;
            right: 10px;
            font-size: 24px;
            color: #ffffffc2;
            cursor: pointer;
        }
    </style>
 

    <style>
        .element-container {
            margin-bottom: 20px; /* Add a margin between elements */
        }
        
        .image-with-padding {
            margin-bottom: 10px; /* Add padding at the bottom of the image */
        }
    </style>
    

</head>
<body>
    <!-- Barra de navegación -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Colores y Sueños</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Acerca de</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Display the chart icon if the user is logged in -->
    <div>
    <?php
        session_start();
        if (isset($_SESSION["username"]) && !empty($_SESSION["username"])) {
            echo '<a href="cart.html">';
            echo '<i class="fas fa-shopping-cart chart-icon"></i>';
            echo '</a>';
        }
    ?>
    </div>

    <!-- Contenido principal -->
    <div class="container my-5">
        <h1>Bienvenido a Colores y Sueños</h1>
        <div class="container my-5">
            <h2>Piezas de arte</h2>
            <div class="container my-5">
                <h2>Lista de Elementos</h2>
                <div id="elementos"></div>
            </div>
    
        </div>
    </div>
    <script src="añadirObras.js"></script>
    

    <!-- Pie de página -->
    <footer class="bg-dark text-light py-3">
        <div class="container text-center">
            &copy; 2023 Colores y Sueños. Todos los derechos reservados.
        </div>
    </footer>

    <!-- Agregar el enlace al archivo JavaScript de Bootstrap (opcional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

    
</body>
</html>
