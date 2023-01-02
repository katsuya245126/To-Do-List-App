import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

// Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
})

function initApp() {
    // Add listeners

    // Procedural
    // Load list object
    // Refresh the page
    refreshThePage();
}

function refreshThePage() {
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
}

function clearListDisplay() {
    const parentElement = document.getElementById("listItems");
    deleteContents(parentElement);
}

function deleteContents(parentElement) {
    let child = parentElement.lastElementChild;

    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

function renderList() {
    const list = toDoList.getList();

    list.forEach(item => {
        buildListItem(item);
    })
}

function buildListItem(item) {
    const div = document.createElement("div");
    div.className = "item";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = item.getId();
    checkBox.tabIndex = 0;
    addClickListenerToCheckbox(check);
    const label = document.createElement("label");
    label.htmlFor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
}

function addClickListenerToCheckbox(check) {
    checkbox.addEventListener("click", (event) => {
        toDoList.removeItemFromList(checkbox.id);
        // TODO remove from persistent data
        setTimeout(() => {
            refreshThePage();
        }, 1000)
    })
}

function clearItemEntryField() {
    document.getElementById("newItem").value = "";
}

function setFocusOnItemEntry() {
    document.getElementById("newItem").focus();
}