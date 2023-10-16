// Utilizamos AJAX para cargar los datos desde el archivo PHP
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var elementosHtml = '';

        data.forEach(function(elemento) {
            elementosHtml += '<div class="row">';
            elementosHtml += '<div class="col-12 col-md-6">';
            elementosHtml += '<h4>' + elemento.nombre + '</h4>';
            elementosHtml += '<img src="' + elemento.imagen + '" alt="Imagen del Elemento" class="img-fluid">';
            elementosHtml += '</div>';
            elementosHtml += '<div class="col-12 col-md-6">';
            elementosHtml += '<p>' + elemento.descripcion + '</p>';
            elementosHtml += '<p>Autor: ' + elemento.autor + '</p>';
            elementosHtml += '<p>Año: ' + elemento.año + '</p>';
            elementosHtml += '<p>Palabra: ' + elemento.palabra + '</p>';
            elementosHtml += '</div>';
            elementosHtml += '</div>';
        });

        document.getElementById("elementos").innerHTML = elementosHtml;
    }
};
xhttp.open("GET", "datos.php", true);
xhttp.send();
