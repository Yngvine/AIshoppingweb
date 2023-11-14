$(document).ready(function() {
    // Función para realizar la búsqueda de productos
    $('#search').on('input', function() {
        var query = $(this).val();
        if (query !== '') {
            $.ajax({
                url: 'search.php',
                method: 'POST',
                data: {query: query},
                success: function(data) {
                    $('#result').html(data);
                }
            });
        } else {
            $('#result').html('');
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
});
