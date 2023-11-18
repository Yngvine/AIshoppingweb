document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    var elementosPorPagina = 3; // Número de elementos por página
    var paginaActual = 1; // Página inicial
    var data = []; // Array que contendrá todos los elementos
    var elementosHtml = ''; // String que contendrá el HTML de los elementos a mostrar

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);

            // Renderizar la página actual
            renderizarPagina(paginaActual);

            // Event listeners para botones de paginación
            document.getElementById("prevPage").addEventListener("click", function() {
                if (paginaActual > 1) {
                    paginaActual--;
                    renderizarPagina(paginaActual);
                }
            });

            document.getElementById("nextPage").addEventListener("click", function() {
                var totalPages = Math.ceil(data.length / elementosPorPagina);
                if (paginaActual < totalPages) {
                    paginaActual++;
                    renderizarPagina(paginaActual);
                }
            });
        }
    };

    xhttp.open("GET", "datos.php", true);
    xhttp.send();

    function renderizarPagina(numeroPagina) {
        var inicio = (numeroPagina - 1) * elementosPorPagina;
        var fin = inicio + elementosPorPagina;
        var elementosPagina = data.slice(inicio, fin);

        elementosHtml = '';

        elementosPagina.forEach(function(elemento) {
            elementosHtml += '<div class="col-lg-4 col-md-6 mb-4">'; // Tamaño de las columnas ajustado para dispositivos grandes y medianos
            elementosHtml += '<div class="card" style="background-color: beige;">';
            elementosHtml += '<img src="assets/images/' + elemento.Imagen + '" alt="Imagen del Elemento" class="card-img-top img-thumbnail">';
            elementosHtml += '<div class="card-body">';
            elementosHtml += '<h5 class="card-title">' + elemento.Nombre + '</h5>';
            elementosHtml += '<p class="card-text author"><span>Autor:</span> ' + elemento.Autor + '</p>';
            elementosHtml += '<p class="card-text"><span class="price bg-warning text-dark rounded px-2">Precio: ' + elemento.Precio + '</span></p>';
            elementosHtml += '<button class="btn btn-secondary info-btn" data-bs-toggle="modal" data-bs-target="#infoModal' + elemento.id + '">+ Info</button>';
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
});
