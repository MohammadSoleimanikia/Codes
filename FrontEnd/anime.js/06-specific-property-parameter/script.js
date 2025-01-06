//
const animateBox1 = () => {
  anime({
    // Target elements with the specified class
    targets: "#box1",

    // Translate (move) the target elements 250px along the X-axis
    translateX: {
      value: 250, // Distance to move
      duration: 800, // Duration of the animation in milliseconds
    },

    // Rotate the target elements 360 degrees
    rotate: {
      value: 360, // Degrees to rotate
      duration: 1800, // Duration of the rotation
      easing: "easeInOutSine", // Smooth easing function for the rotation
    },

    // Scale the target elements to twice their original size
    scale: {
      value: 2, // Scale factor
      duration: 1600, // Duration of the scaling animation
      delay: 800, // Start scaling after a delay of 800ms
      easing: "easeInOutQuart", // Smooth easing function for scaling
    },

    // Delay applied to all properties except 'scale'
    delay: 250, // 250ms delay before the animation starts
  });
};
// Add Event Listeners for Each Animation Trigger
document.querySelector("#box1").addEventListener("click", animateBox1);
