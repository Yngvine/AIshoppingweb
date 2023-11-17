var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var elementosHtml = '';

        data.forEach(function(elemento) {
            elementosHtml += '<div class="col-md-4 mb-4">';
            elementosHtml += '<div class="card" style="background-color: beige;">';
            elementosHtml += '<img src="assets/images/' + elemento.Imagen + '" alt="Imagen del Elemento" class="card-img-top img-thumbnail">';
            elementosHtml += '<div class="card-body">';
            elementosHtml += '<h5 class="card-title">' + elemento.Nombre + '</h5>';
            elementosHtml += '<p class="card-text">Autor: ' + elemento.Autor + '</p>';
            elementosHtml += '<p class="card-text">Precio: ' + elemento.Precio + '</p>';
            elementosHtml += '<button class="btn btn-primary info-btn" data-bs-toggle="modal" data-bs-target="#infoModal' + elemento.id + '">+ Info</button>';
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
};
xhttp.open("GET", "datos.php", true);
xhttp.send();
