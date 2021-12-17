const alertMessage = document.querySelector(".message");
const addBtn = document.querySelector(".add-btn");
const clearBtn = document.querySelector(".clear-btn");


/***** start function to get todos from localStorage *****/


function getTodos() {

    let todos = new Array;
    let todoStr = localStorage.getItem('todo');

    if (todoStr !== null) {

        todos = JSON.parse(todoStr);
    }

    return todos;
}

/***** End of getTodo function *****/

/****** start add function ******/

function addTodo() {

    let input = document.getElementById("inputBox").value;
    let todos = getTodos();
    todos.push(input);
    displayMessage("Item Saved To List", "green");
    localStorage.setItem('todo', JSON.stringify(todos));

    showTodo();

    return false;
}

/****** end of add function ******/

/***** start remove all items function *****/

clearBtn.onclick = function(e){
    
    console.log(e.target);
}
/***** end remove all items function *****/

/***** start showTodo function *****/

function showTodo() {

    document.getElementById("inputBox").value = "";
    let todos = getTodos();

    
    let myList = '';
    for (let i = 0; i < todos.length; i++) {
        
        myList += `<ul class="list-item">
        <li class="title">${todos[i]}</li>
        <li class="btn-container">
        <button class="edit-btn" id = ${i}>
        <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" id = ${i}>
        <i class="fas fa-trash-alt"></i>
        </button>
        </li>
        </ul>`
    };
    
    myList += `<button class="clear-btn">Clear Items</button>`;
    
    document.querySelector('.item-container').classList.add("show-container");

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


addBtn.addEventListener('click', addTodo);
showTodo();

