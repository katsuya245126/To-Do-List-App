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
    // renderList();
    // clearItemEntryField();
    // setFocusOnItemEntry();
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