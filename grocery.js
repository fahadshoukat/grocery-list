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

}

/****** end of add function ******/

/***** start remove all items function *****/
function removeAllItems() {

    let todos = getTodos();
    todos.length = 0;

    let newTodos = todos;
    localStorage.setItem('todo', JSON.stringify(newTodos));

    showTodo();
    displayMessage("All Items Removed", "red");
}
/***** end remove all items function *****/

/***** start remove function for one item *****/

function removeItem() {

    let selected = this.document.activeElement.parentNode.parentNode.firstChild.nextElementSibling.textContent;

    let todos = getTodos();
    let selectedIndex = todos.indexOf(selected);
    todos.splice(selectedIndex, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    showTodo();
    displayMessage("Item Remove", "red");
}

/***** end remove function for one item *****/

/***** start update function for one item *****/

function updateItem() {

    // console.log(this.document.activeElement.parentNode.parentNode.firstChild.nextElementSibling.textContent);
    let selected = this.document.activeElement.parentNode.parentNode.firstChild.nextElementSibling.textContent;

    document.getElementById("inputBox").value = selected;
    addBtn.style.display = "none";

    const updateBtn = document.querySelector('.update-btn');
    updateBtn.style.display = "inline";
    updateBtn.onclick = function () {

        let todos = getTodos();
        let selectedIndex = todos.indexOf(selected);
        let newItem = document.getElementById("inputBox").value;

        todos.splice(selectedIndex, 1, newItem);

        localStorage.setItem('todo', JSON.stringify(todos));

        showTodo();
        displayMessage("Item Changed", "green");
        updateBtn.style.display = "none";
        addBtn.style.display = "inline";
    }

}

/***** end update function for one item *****/


/***** start showTodo function *****/

function showTodo() {

    document.getElementById("inputBox").value = "";
    let todos = getTodos();


    let myList = '';
    for (let i = 0; i < todos.length; i++) {

        myList += `<ul>
        <li class="title">${todos[i]}</li>
        <li class="btn-container">
        <button class="edit-btn" onclick="updateItem()" id = ${i}>
        <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn" onclick="removeItem()" id = ${i}>
        <i class="fas fa-trash-alt"></i>
        </button>
        </li>
        </ul>`
    };

    myList += `<button class="clear-btn" onclick="removeAllItems()">Clear Items</button>`;

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
    }, 1500);
}


addBtn.addEventListener('click', addTodo);
showTodo();

