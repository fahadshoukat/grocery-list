const alertMessage = document.querySelector(".message");
const addBtn = document.querySelector(".add-btn");
const ListItem = document.querySelector(".list-item");
const clearBtn = document.querySelector(".clear-btn");

/***** start function to get todos from localStorage *****/

function getTodos(){
    
    let todos = new Array;
    let todoStr = localStorage.getItem('todo');

    if(todoStr !== null){

        todos = JSON.parse(todoStr)
    }

    return todos;
}

/***** End of getTodo function *****/

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

function remove(){
    
    let id = this.getAttribute('id');
    let todos = getTodos();
    todos.splice(id, 1);
    
    displayMessage("Item Removed From List", "red");
    localStorage.setItem('todo', JSON.stringify(todos));
    
    showTodo();
    
    return false;
}

/***** end remove function *****/

/***** start showTodo function *****/

function showTodo() {
    
    let todos = getTodos();
    
    let myList = '<ul class="list-item">';
    for(let i = 0; i < todos.length; i++) {
        myList += `<li class="title">${todos[i]}</li>
        <li class="btn-container">
        <button class="edit-btn" id = ${i}>
        <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" id = ${i}>
        <i class="fas fa-trash-alt"></i>
        </button>
        </li>`
    };
    myList += '</ul>';
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = myList;


}
/***** end showTodo function *****/

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