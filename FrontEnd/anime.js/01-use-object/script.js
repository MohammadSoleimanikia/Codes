// Define an object with properties to animate
// This object holds the x and y coordinates that will be updated during the animation
const myObject = {
    x: 0, // Initial x-coordinate
    y: 0, // Initial y-coordinate
};

// Get the DOM element with the ID 'box'
// This will be the element that triggers the animation and reflects the changes
const box = document.getElementById('box');

// Add a click event listener to the 'box' element
// When the box is clicked, the animation will start
box.addEventListener('click', () => {
    // Use Anime.js to animate the properties of myObject
    anime({
        targets: myObject, // Target the JavaScript object for the animation
        x: 200,            // Final value of x-coordinate
        y: 300,            // Final value of y-coordinate
        duration: 2000,    // Duration of the animation in milliseconds (2 seconds)
        easing: 'easeInOutQuad', // Easing function for a smooth effect
        update: function () {
            // This function is called on every animation frame
            // Update the transform style of the box element to reflect the animated values
            box.style.transform = `translate(${myObject.x}px, ${myObject.y}px)`;
        },
    });
});
