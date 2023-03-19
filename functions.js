// Get the button and body elements
const toggleBtn = document.querySelector("#toggle-dark-mode");
const body = document.querySelector("body");

// Add an event listener to the button
toggleBtn.addEventListener("click", function() {
  // Toggle the "dark-mode" class on the body
  body.classList.toggle("dark-mode");
});



