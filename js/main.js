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
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    const clearItems = document.getElementById("clearItems");
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm("Are you sure you want to clear the entire list?");
            if (confirmed) {
                toDoList.clearList();
                // TODO update persistent data
                refreshThePage();
            }
        }
    });

    // Procedural
    // Load list object
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
    addClickListenerToCheckbox(checkBox);
    const label = document.createElement("label");
    label.htmlFor = item.getId();
    label.textContent = item.getItem();
    div.appendChild(checkBox);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
}

function addClickListenerToCheckbox(checkbox) {
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

function processSubmission() {
    const newEntryText = getNewEntry();
    if(!newEntryText.length) return;

    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);
    toDoList.addItemToList(toDoItem);
    // TODO update persistent data
    refreshThePage();
}

function getNewEntry() {
    return document.getElementById("newItem").value.trim();
}

function calcNextItemId() {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length - 1].getId() + 1;
    }
    return nextItemId;
}

function createNewItem(id, text) {
    const toDo = new ToDoItem();
    toDo.setId(id);
    toDo.setItem(text);
    return toDo;
}