document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    var elementosPorPagina = 3; // Número de elementos por página
    var paginaActual = 1; // Página inicial
    var data = []; // Array que contendrá todos los elementos

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);

            // Renderizar la página actual
            renderizarPagina(paginaActual);
        }
    };

    xhttp.open("GET", "datos.php", true);
    xhttp.send();

    function renderizarPagina(numeroPagina) {
        var filtroPrecioMin = document.getElementById('filtroPrecioMin').value;
        var filtroPrecioMax = document.getElementById('filtroPrecioMax').value;
        var filtroEstilo = document.getElementById('filtroEstilo').value;
        var filtroNombre = document.getElementById('filtroNombre').value.toLowerCase();
        var filtroAno = document.getElementById('filtroAno').value.toLowerCase();
        var filtroAutor = document.getElementById('filtroAutor').value.toLowerCase();
    
        var elementosFiltrados = data.filter(function(elemento) {
            var precio = parseFloat(elemento.Precio);
    
            var pasaFiltroPrecio = true;
            if (filtroPrecioMin !== '' && filtroPrecioMax !== '') {
                pasaFiltroPrecio = precio >= parseFloat(filtroPrecioMin) && precio <= parseFloat(filtroPrecioMax);
            }
    
            var pasaFiltroEstilo = true;
            if (filtroEstilo !== '') {
                pasaFiltroEstilo = elemento.Estilo.toLowerCase().includes(filtroEstilo.toLowerCase());
            }
    
            var pasaFiltroNombre = true;
            if (filtroNombre !== '') {
                pasaFiltroNombre = elemento.Nombre.toLowerCase().includes(filtroNombre);
            }
    
            var pasaFiltroAno = true;
            if (filtroAno !== '') {
                pasaFiltroAno = elemento.AnoDeCreacion.toLowerCase().includes(filtroAno);
            }
    
            var pasaFiltroAutor = true;
            if (filtroAutor !== '') {
                pasaFiltroAutor = elemento.Autor.toLowerCase().includes(filtroAutor);
            }
    
            return pasaFiltroPrecio && pasaFiltroEstilo && pasaFiltroNombre && pasaFiltroAno && pasaFiltroAutor;
        });
    
        var totalPages = Math.ceil(elementosFiltrados.length / elementosPorPagina); // Calcular las páginas
    
        // Actualizar lógica de paginación
        var inicio = (numeroPagina - 1) * elementosPorPagina;
        var fin = inicio + elementosPorPagina;
        var elementosPagina = elementosFiltrados.slice(inicio, fin);

        var elementosHtml = '';
        elementosPagina.forEach(function(elemento) {
            elementosHtml += '<div class="col-lg-4 col-md-6 mb-4">'; // Tamaño de las columnas ajustado para dispositivos grandes y medianos
            elementosHtml += '<div class="card" style="background-color: beige;">';
            elementosHtml += '<img src="assets/images/' + elemento.Imagen + '" alt="Imagen del Elemento" class="card-img-top img-thumbnail">';
            elementosHtml += '<div class="card-body">';
            elementosHtml += '<h5 class="card-title">' + elemento.Nombre + '</h5>';
            elementosHtml += '<p class="card-text author"><span>Autor:</span> ' + elemento.Autor + '</p>';
            elementosHtml += '<p class="card-text"><span class="price bg-warning text-dark rounded px-2">Precio: ' + elemento.Precio + '</span></p>';
            elementosHtml += '<button class="btn btn-secondary info-btn" data-bs-toggle="modal" data-bs-target="#infoModal' + elemento.id + '">+ Info</button>';
            // Add to Cart button
            elementosHtml += '<button class="btn btn-primary add-to-cart-btn" onclick="addToCart(' + elemento.ID + ')">Add to Cart</button>';
            elementosHtml += '</div></div></div>';

            // Modal para la información adicional
            elementosHtml += '<div class="modal fade" id="infoModal' + elemento.id + '" tabindex="-1">';
            elementosHtml += '<div class="modal-dialog">';
            elementosHtml += '<div class="modal-content">';
            elementosHtml += '<div class="modal-header">';
            elementosHtml += '<h5 class="modal-title">Información Adicional</h5>';
            elementosHtml += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
            elementosHtml += '</div>';  
            elementosHtml += '<div class="modal-body">';
            elementosHtml += '<p><strong>Descripción:</strong> ' + elemento.Descripcion + '</p>';
            elementosHtml += '<p><strong>Año de Creación:</strong> ' + elemento.AnoDeCreacion + '</p>';
            elementosHtml += '<p><strong>Estilo:</strong> ' + elemento.Estilo + '</p>';
            elementosHtml += '</div></div></div></div>';
        });

        document.getElementById("elementos").innerHTML = '<div class="row">' + elementosHtml + '</div>';
    }    

    // Agregar evento al botón de filtrar por precio
    document.getElementById("filtrarBtn").addEventListener("click", function() {
        renderizarPagina(paginaActual);
    });

    // Event listeners para botones de paginación
    document.getElementById("prevPage").addEventListener("click", function() {
        if (paginaActual > 1) {
            paginaActual--;
            renderizarPagina(paginaActual);
        }
    });

    document.getElementById("nextPage").addEventListener("click", function() {
        var filtroPrecioMin = document.getElementById('filtroPrecioMin').value;
        var filtroPrecioMax = document.getElementById('filtroPrecioMax').value;
        var filtroEstilo = document.getElementById('filtroEstilo').value;

        var elementosFiltrados = data.filter(function(elemento) {
            var precio = parseFloat(elemento.Precio);

            var pasaFiltroPrecio = true;
            if (filtroPrecioMin !== '' && filtroPrecioMax !== '') {
                pasaFiltroPrecio = precio >= parseFloat(filtroPrecioMin) && precio <= parseFloat(filtroPrecioMax);
            }

            var pasaFiltroEstilo = true;
            if (filtroEstilo !== '') {
                pasaFiltroEstilo = elemento.Estilo.toLowerCase() === filtroEstilo.toLowerCase();
            }

            return pasaFiltroPrecio && pasaFiltroEstilo;
        });

        var totalPages = Math.ceil(elementosFiltrados.length / elementosPorPagina);

        if (paginaActual < totalPages) {
            paginaActual++;
            renderizarPagina(paginaActual);
        }
    });
});

function addToCart(elementID) {
    // Make an AJAX call to your PHP script for adding to the cart
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
                if (response.success) {
                    // Item added to cart successfully
                    alert('Item added to cart successfully!');
                } else {
                    // Display an appropriate error message
                    alert(response.message);
                }
        }
    };
    
    xhttp.open("GET", "addToCart.php?elementID=" + elementID, true);
    xhttp.send();
}
