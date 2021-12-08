const alertMessage = document.querySelector(".message");
const input = document.getElementById("inputBox");
const addBtn = document.querySelector(".add-btn");
const itemList = document.querySelector(".item-container");
const clearBtn = document.querySelector(".clear-btn");
const itemCard = document.querySelector(".card-content");

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let value = input.value;
    if (value) {
        items.push(value);
        input.value = "";
        itemList.classList.add("show-article");
        displayMessage("Item added to list", "green");
    } else {
        displayMessage("Empty value", "red");
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
