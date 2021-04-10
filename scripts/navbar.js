// Get what you need
var button = document.querySelector("#toggle");
var items = document.querySelector("#items");

// Define the behavior
function toggle() {
  items.classList.toggle("active");
}

// Wire it up
button.addEventListener("click", toggle);