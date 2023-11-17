// Utilizamos AJAX para cargar los datos desde el archivo PHP
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var elementosHtml = '';

        data.forEach(function(elemento) {
            elementosHtml += '<div class="col-md-4 mb-4">'; // Div con clase col-md-4 para ocupar 1/3 del ancho en pantallas medianas y grandes
            elementosHtml += '<div class="card">';
            elementosHtml += '<img src="assets/images/' + elemento.Imagen + '" alt="Imagen del Elemento" class="card-img-top img-thumbnail">';
            elementosHtml += '<div class="card-body">';
            elementosHtml += '<h5 class="card-title">' + elemento.Nombre + '</h5>';
            elementosHtml += '<p class="card-text">Autor: ' + elemento.Autor + '</p>';
            elementosHtml += '<p class="card-text">Precio: ' + elemento.Precio + '</p>';
            elementosHtml += '</div>';
            elementosHtml += '</div>';
            elementosHtml += '</div>'; // Cerrar div con clase col-md-4
        });
        
        document.getElementById("elementos").innerHTML = '<div class="row">' + elementosHtml + '</div>';        
    }
};
xhttp.open("GET", "datos.php", true);
xhttp.send();

