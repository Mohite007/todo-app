// Getting references to input and task list elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if input is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item with user input
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a delete (×) button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for ×
        li.appendChild(span);
    }

    // Clear input field
    inputBox.value = "";
    // Save updated list
    saveData();
}

// Add event listener for clicking list items
listContainer.addEventListener("click", function (e) {
    // Toggle "checked" class when LI is clicked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // Remove item when span (×) is clicked
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call function to display saved tasks on page load
showTask();
