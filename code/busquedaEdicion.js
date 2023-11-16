document.addEventListener("DOMContentLoaded", function () {
    // Función para cargar la lista de productos
    function loadProductList() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('productList').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'get_products.php', true);
        xhr.send();
    }

    // Cargar la lista de productos al cargar la página
    loadProductList();

    // Función para realizar la búsqueda de productos
    document.getElementById('search').addEventListener('input', function () {
        var query = this.value;
        if (query !== '') {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById('productList').innerHTML = xhr.responseText;
                }
            };
            xhr.open('POST', 'search.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('query=' + query);
        } else {
            // Si la búsqueda está vacía, cargar la lista completa de productos
            loadProductList();
        }
    });

    // Función para cargar el formulario de edición al hacer clic en un producto
    document.getElementById('productList').addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            var product_id = event.target.getAttribute('data-id');
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById('editForm').innerHTML = xhr.responseText;
                }
            };
            xhr.open('POST', 'edit_form.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('id=' + product_id);
        }
    });

    // Función para actualizar una obra de arte
    window.updateArtwork = function (artwork_id) {
        var artworkName = document.getElementById('artworkName').value;
        var artworkPrice = document.getElementById('artworkPrice').value;
        // Agrega campos adicionales según la descripción de las columnas
        var artworkImage = document.getElementById('artworkImage').value; // Aquí deberías manejar la imagen según tu implementación
        var artworkDescription = document.getElementById('artworkDescription').value;
        var artworkYear = document.getElementById('artworkYear').value;
        var artworkStyle = document.getElementById('artworkStyle').value;
        var artworkAuthor = document.getElementById('artworkAuthor').value;
        var artworkType = document.getElementById('artworkType').value;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Puedes manejar la respuesta aquí (por ejemplo, mostrar un mensaje de éxito)
                console.log(xhr.responseText);
            }
        };
        xhr.open('POST', 'update_artwork.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send('id=' + artwork_id +
            '&name=' + artworkName +
            '&price=' + artworkPrice +
            '&image=' + artworkImage +
            '&description=' + artworkDescription +
            '&year=' + artworkYear +
            '&style=' + artworkStyle +
            '&author=' + artworkAuthor +
            '&type=' + artworkType);
    };
});
