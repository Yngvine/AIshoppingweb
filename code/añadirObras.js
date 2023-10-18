// Utilizamos AJAX para cargar los datos desde el archivo PHP
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var elementosHtml = '';

        data.forEach(function(elemento) {
            elementosHtml += '<div class="row element-container">'; // Add a class for styling
            // Rest of your code
            
            elementosHtml += '<div class="row">';
            elementosHtml += '<div class="col-12 col-md-6">';
            elementosHtml += '<h4>' + elemento.Nombre + '</h4>';
            elementosHtml += '<img src="assets/images/' + elemento.Imagen + '" alt="Imagen del Elemento" class="img-fluid image-with-padding">';
            elementosHtml += '</div>';
            elementosHtml += '<div class="col-12 col-md-6">';
            elementosHtml += '<p>' + elemento.Descripcion + '</p>';
            elementosHtml += '<p><strong>Author:</strong> ' + elemento.Autor + '</p>';
            elementosHtml += '<p><strong>Año:</strong> ' + elemento.AnoDeCreacion + '</p>';
            elementosHtml += '</div>';
            elementosHtml += '</div>';
            
            elementosHtml += '<hr>';
            elementosHtml += '</div>';
        });

        document.getElementById("elementos").innerHTML = elementosHtml;
    }
};
xhttp.open("GET", "datos.php", true);
xhttp.send();

