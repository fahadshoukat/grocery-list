const alertMessage = document.querySelector(".message");
const input = document.getElementById("inputBox");
const addBtn = document.querySelector(".add-btn");
const ListItem = document.querySelector(".list-item");
const clearBtn = document.querySelector(".clear-btn");
const itemContainer = document.querySelector(".item-container");



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