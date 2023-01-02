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