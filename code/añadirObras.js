// Utilizamos AJAX para cargar los datos desde el archivo PHP
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var elementosHtml = '';

        data.forEach(function(elemento) {
            elementosHtml += '<div class="card mb-3">';
            elementosHtml += '<img src="assets/images/' + elemento.Imagen + '" alt="Imagen del Elemento" class="card-img-top">';
            elementosHtml += '<div class="card-body">';
            elementosHtml += '<h5 class="card-title">' + elemento.Nombre + '</h5>';
            elementosHtml += '<p class="card-text">Autor: ' + elemento.Autor + '</p>';
            elementosHtml += '<p class="card-text">Precio: ' + elemento.Precio + '</p>';
            elementosHtml += '</div>';
            elementosHtml += '</div>';
        });
        

        document.getElementById("elementos").innerHTML = elementosHtml;
    }
};
xhttp.open("GET", "datos.php", true);
xhttp.send();

