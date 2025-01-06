// duration parameter
const animateBox1 = () => {
    anime({
      targets: "#box1",
      translateX: 450,
      duration: 1500, // Animation duration in milliseconds (1.5 seconds)
      // delay parameter
      delay:1000,
      // endDelay parameter : pause in the end of animation: 
      // used with loop,timelines or individual animations
      endDelay:1000,
      easing: "easeInOutQuad",
      loop:3
    });
  };
  // Add Event Listeners for Each Animation Trigger
  document.querySelector("#box1").addEventListener("click", animateBox1);
