// Function for Box 1 Animation
const animateBox1 = () => {
    anime({
      targets: "#box1", // Specifies the HTML element to animate
      translateX: 450, // Moves 350px to the right
      rotate: "1turn", // Rotates 360 degrees (1 full turn)
      backgroundColor: "#FF6F61", // Changes the background color
      duration: 1500, // Animation duration in milliseconds (1.5 seconds)
      easing: "easeInOutQuad", // Smooth start and end easing function
    });
  };
  
  // Function for Box 2 Animation
  const animateBox2 = () => {
    anime({
      targets: "#box2",
      translateY: 250, // Moves 250px down
      scale: 2, // Grows the box to 2x its original size
      easing: "spring(1, 80, 10, 0)", // Adds a spring-like bouncy effect
    });
  };
  
  // Function for Box 3 Animation
  const animateBox3 = () => {
    anime({
      targets: "#box3",
      translateY: -250, // Moves 250px up (negative Y-axis)
      opacity: [0.5, 1], // Fades in from 50% to 100% opacity
      backgroundColor: "#50FFBF",
    });
  };
  
  // Function for Box 4 Animation
  const animateBox4 = () => {
    anime({
      targets: "#box4",
      scale: [1, 3, 1], // Scales the box up to 3x size, then back to original
      duration: 2000,
      easing: "easeOutElastic(1, .8)", // Creates a spring-back effect
    });
  };
  
  // Function to Animate Object Property (Number from 0 to 100)
  const obj = { value: 0 }; // Initial object value
  const text = () => {
    anime({
      targets: obj, // First occurrence: Specifies the object to animate
      value: 10, // Changes the 'value' property from 0 to 10
      duration: 2000,
      easing: "easeOutExpo",
      round: 1, // Rounds the value to the nearest integer
      update: function () {
        document.querySelector(".number").textContent = obj.value; // Updates displayed number in real-time
      },
    });
  };
  
  // Add Event Listeners for Each Animation Trigger
  document.querySelector("#box1").addEventListener("click", animateBox1);
  document.querySelector("#box2").addEventListener("click", animateBox2);
  document.querySelector("#box3").addEventListener("click", animateBox3);
  document.querySelector("#box4").addEventListener("click", animateBox4);
  document.querySelector(".number").addEventListener("click", text); // Adds event listener for number animation
  