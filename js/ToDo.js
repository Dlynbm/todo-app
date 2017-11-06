var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");




//create the task list item
var createNewTask = function(task){

    //set up the new list item
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");

//pulls the inputed text into the label
    label.innerText = task;

//add properties
    checkBox.type = "checkbox";

//add items to the li
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

//everything put together
    return listItem;
};


//add new task into incomplete list
var addTask = function(){

    var listItem = createNewTask(newTask.value);

    //add the new list item to list
    toDoUl.appendChild(listItem);

    //clear input
    newTask.value = "";

    //bind new list item to the incomplete list
    bindIncompleteItems(listItem, completeTask);
};

document.getElementById("new-task")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("addTask").click();
        }
    });

var completeTask = function(){

    //grabs the checkbox's parent element, the li it's in
    var listItem = this.parentNode;

    //create and insert the delete button
    var deleteBtn = document.createElement("button");

    //button
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    listItem.appendChild(deleteBtn);

    //select checkbox from completed checkbox and remove
    var checkBox =
        listItem.querySelector("input[type=checkbox]");
    checkBox.remove();

    //place inside the completed list
    completeUl.appendChild(listItem);

    //bind new completed list
    bindCompleteItems(listItem, deleteTask);
};

//delete task functions
var deleteTask = function(){


    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
};

//function that binds each of the elements in the incomplete list

var bindIncompleteItems = function(taskItem, checkBoxClick) {


    //bind the checkbox to a var
    var checkBox =
        taskItem.querySelector("input[type=checkbox]");

    //setup event listener for the checkbox
    checkBox.onchange = checkBoxClick;
};

//function that binds each of the elements in the complete list
var bindCompleteItems = function(taskItem, deleteButtonPress){


    //bind the delete button
    var deleteButton = taskItem.querySelector(".delete");

    //when delete button is pressed, runs the delete task function
    deleteButton.onclick = deleteButtonPress;
};

for(var i=0; i < toDoUl.children.length; i++) {
    bindIncompleteItems(toDoUl.children[i], completeTask);
}

for (var i=0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);


window.onload = initDate;
function initDate() {
    var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
    var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var now = new Date();
    var dtString = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();
    document.getElementById("Date"). innerHTML = dtString;
}





