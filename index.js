//Adds event listener to log when DOM is loaded.

document.addEventListener('DOMContentLoaded', function() {
    console.log("The DOM has loaded.");
});

//Proves that the Event Handler defined above doesn't execute until after the DOM is loaded.

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered."
);

//Changes the text in body > p.

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#text').textContent = "This is really cool!"
});