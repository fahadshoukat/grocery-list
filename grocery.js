const alertMessage = document.querySelector(".message");
const addBtn = document.querySelector(".add-btn");
const ListItem = document.querySelector(".list-item");
const clearBtn = document.querySelector(".clear-btn");
const itemContainer = document.querySelector(".item-container");

/************ start function to get todos from localStorage *******************/

function getTodos(){

    let todos = new Array;
    let todoStr = localStorage.getItem('todo');

    if(todoStr !== null){

        todos = JSON.parse(todoStr)
    }

    return todos;
}

/********* End of getTodo function ************/

/****** start add function ******/

function addTodo(){

    let input = document.getElementById("inputBox").value;
    let todos = getTodos();
    todos.push(input);

    displayMessage("Item Saved To List", "green");
    localStorage.setItem('todo', JSON.stringify(todos));

    showTodo();
    setBackToDefault();

    return false;
}

/****** end of add function ******/

/***** start remove function *****/

/***** end remove function *****/

function displayMessage(text, color) {
    alertMessage.textContent = text;
    alertMessage.classList.add(`${color}`);

    setTimeout(function () {
        alertMessage.textContent = "";
        alertMessage.classList.remove(`${color}`);
    }, 1000);
}

function setBackToDefault() {
    input.value = "";
    addBtn.textContent = "Add";
}