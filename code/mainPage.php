<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colores y Sueños</title>

    <!-- Agregar el enlace al archivo CSS de Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
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
            
            <div id="filtroContainer" class="my-4">
                <div class="row g-3">
                    <div class="col-md">
                        <label for="filtroPrecioMin" class="form-label">Precio mínimo:</label>
                        <input type="number" class="form-control" id="filtroPrecioMin" placeholder="Precio mínimo">
                    </div>
                    <div class="col-md">
                        <label for="filtroPrecioMax" class="form-label">Precio máximo:</label>
                        <input type="number" class="form-control" id="filtroPrecioMax" placeholder="Precio máximo">
                    </div>
                    <div class="col-md">
                        <label for="filtroEstilo" class="form-label">Estilo:</label>
                        <select class="form-select" id="filtroEstilo">
                            <option value="">Todos los estilos</option>
                            <option value="Impresionista">Impresionismo</option>
                            <option value="Cubismo">Cubismo</option>
                            <option value="Cubismo">Realismo</option>
                            <option value="Románico">Románico</option>
                            <!-- Agregar más opciones según los estilos disponibles -->
                        </select>
                    </div>
                    <div class="col-md">
                        <label for="filtroNombre" class="form-label">Nombre:</label>
                        <input type="text" class="form-control" id="filtroNombre" placeholder="Nombre">
                    </div>
                    <div class="col-md">
                        <label for="filtroAno" class="form-label">Año de Creación:</label>
                        <input type="number" class="form-control" id="filtroAno" placeholder="Año de Creación">
                    </div>
                    <div class="col-md">
                        <label for="filtroAutor" class="form-label">Autor:</label>
                        <input type="text" class="form-control" id="filtroAutor" placeholder="Autor">
                    </div>
                    <div class="col-md-auto align-self-end">
                        <button id="filtrarBtn" class="btn btn-secondary">Filtrar</button>
                    </div>
                </div>
            </div>            

            <div class="container my-5">
                <h2>Lista de Elementos</h2>
                <div id="elementos"></div>
                <div class="text-center mt-4">
                    <button id="prevPage" class="btn btn-secondary me-2">Página Anterior</button>
                    <button id="nextPage" class="btn btn-secondary">Página Siguiente</button>
                </div>
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
