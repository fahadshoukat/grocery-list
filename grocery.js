const alertMessage = document.querySelector(".message");
const input = document.getElementById("inputBox");
const addBtn = document.querySelector(".add-btn");
const ListItem = document.querySelector(".list-item");
const clearBtn = document.querySelector(".clear-btn");
const itemContainer = document.querySelector(".item-container");

let editItem;
let editFlag = false;
let editId = "";

addBtn.addEventListener("click", function (e) {

    e.preventDefault();
    let value = input.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {

        const element = document.createElement("article");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("list-item");
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>`;
        ListItem.appendChild(element);
        displayMessage("Item saved to list", "green");
        itemContainer.classList.add("show-article");

        const editBtn = document.querySelector(".edit-btn");
        editBtn.addEventListener('click', function(){

        });

        const deleteBtn = document.querySelector(".delete-btn");
        deleteBtn.addEventListener('click', function(e){
            
            const element = e.currentTarget.parentElement.parentElement;

            ListItem.removeChild(element);
        });
    }
    else if (!value && editFlag){
        console.log("Editing");
    } 
    else {
        displayMessage("Please Enter value", "red");
    }
});

function displayMessage(text, color) {
    alertMessage.textContent = text;
    alertMessage.classList.add(`${color}`);

    setTimeout(function () {
        alertMessage.textContent = "";
        alertMessage.classList.remove(`${color}`);
    }, 1000);
}
