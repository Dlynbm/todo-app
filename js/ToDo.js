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
        $('#todos').append('<li class = "completeItem"><input type="checkbox"><label contenteditable="true">'+  newTodoText + '</label><span class = "glyphicon glyphicon-trash deleteItem trash"></span></li>');
        $('#newTodo').val("");

    }


    //adds focus and blur to text entry box
    $("input").focus(function() {
        $(this).css("background-color", "#f2efd0");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

    function deleteItem() {
        //chooses the ul and removes when you click on trash
        $(function(){
            $('.trash').on('click',function(){
                $(this).closest('li').remove();
            });
        });

    }

    function completeItem(){
    //chooses the ul parent and marks done
        $(this).closest('li').toggleClass('done');
    }

});






