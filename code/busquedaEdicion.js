$(document).ready(function() {
    // Función para cargar la lista de productos
    function loadProductList() {
        $.ajax({
            url: 'get_products.php',
            method: 'GET',
            success: function(data) {
                $('#productList').html(data);
            }
        });
    }

    // Cargar la lista de productos al cargar la página
    loadProductList();

    // Función para realizar la búsqueda de productos
    $('#search').on('input', function() {
        var query = $(this).val();
        if (query !== '') {
            $.ajax({
                url: 'search.php',
                method: 'POST',
                data: {query: query},
                success: function(data) {
                    $('#productList').html(data);
                }
            });
        } else {
            // Si la búsqueda está vacía, cargar la lista completa de productos
            loadProductList();
        }
    });

    // Función para cargar el formulario de edición al hacer clic en un producto
    $(document).on('click', '.edit-btn', function() {
        var product_id = $(this).data('id');
        $.ajax({
            url: 'edit_form.php',
            method: 'POST',
            data: {id: product_id},
            success: function(data) {
                $('#editForm').html(data);
            }
        });
    });

    function updateArtwork(artwork_id) {
        var artworkName = $('#artworkName').val();
        var artworkPrice = $('#artworkPrice').val();
        // Agrega campos adicionales según la descripción de las columnas
        var artworkImage = $('#artworkImage').val(); // Aquí deberías manejar la imagen según tu implementación
        var artworkDescription = $('#artworkDescription').val();
        var artworkYear = $('#artworkYear').val();
        var artworkStyle = $('#artworkStyle').val();
        var artworkAuthor = $('#artworkAuthor').val();
        var artworkType = $('#artworkType').val();
    
        $.ajax({
            url: 'update_artwork.php',
            method: 'POST',
            data: {
                id: artwork_id,
                name: artworkName,
                price: artworkPrice,
                // Agrega datos adicionales según la descripción de las columnas
                image: artworkImage,
                description: artworkDescription,
                year: artworkYear,
                style: artworkStyle,
                author: artworkAuthor,
                type: artworkType
            },
            success: function(data) {
                // Puedes manejar la respuesta aquí (por ejemplo, mostrar un mensaje de éxito)
                console.log(data);
            }
        });
    }
    
    
});
