$(document).ready(function() {

    $('#addItem').on('click', addItem);

    function addItem() {
        var newTodoText = $('#newTodo').val();
        $('#todos').append('<ul>' + newTodoText + '</ul>');
        $('#newTodo').val("");

    }
});






