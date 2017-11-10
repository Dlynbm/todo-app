$(document).ready(function() {
    //adds list item when button is clicked
    $('#addItem').on('click', addItem);
    $('#todos').on('change', '.completeItem', completeItem);
    //click event on deleteitem, then starts deleteitem function
    $('#todos').on('click', '.deleteItem', deleteItem);

    function addItem() {
        //collects new item and stores in this variable
        var newTodoText = $('#newTodo').val();
        //adds new item to the list
        $('#todos').append('<ul><input class = "completeItem" type = "checkbox">' + newTodoText + '<span class = "glyphicon glyphicon-trash deleteItem"></span></ul>');
        $('#newTodo').val("");

    }


    //adds focus and blur to text entry box
    $("input").focus(function() {
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

    function deleteItem() {
        //chooses the ul and removes when you click on trash
        $(this).parent().remove();

    }

    function completeItem(){
    //chooses the ul parent and marks done
        $(this).parent().toggleClass('done');
    }

});






