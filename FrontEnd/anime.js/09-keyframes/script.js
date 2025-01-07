// keyframes allow you to define multiple stages of an animation with different properties at specific points in time.
//ANIMATION KEY FRAMES
const animateBox1 = () => {
  anime({
    targets: "#box1",
    keyframes: [
      // each object in this array represent a state of animation
      { translateY: -40 },
      // we can control duration on each state
      { translateX: 250, duration: 100 },
      { translateY: 40 },
      // we can combine properties too
      { translateX: 0, rotate: 45 },
      { translateY: 0 },
    ],
    translateX: 450,
    duration: 4500,
    easing: "easeInQuad",
    loop: true,
  });
  // ----------------------------------------------------
  // PROPERTY KEYFRAMES
  // Property keyframes allow overlapping animations since each property have its own keyframes array.
  anime({
    targets: "#box2",
    translateX: [
      { value: 250, duration: 1000, delay: 500 },
      { value: 0, duration: 1000, delay: 500 },
    ],
    translateY: [
      { value: -40, duration: 500 },
      { value: 40, duration: 500, delay: 1000 },
      { value: 0, duration: 500, delay: 1000 },
    ],
    scaleX: [
      { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
      { value: 1, duration: 900 },
      { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
      { value: 1, duration: 900 },
    ],
    scaleY: [
      { value: [1.75, 1], duration: 500 },
      { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
      { value: 1, duration: 450 },
      { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
      { value: 1, duration: 450 },
    ],
    easing: "easeOutElastic(1, .8)",
    loop: true,
  });
};

// Add Event Listeners for Each Animation Trigger
document.querySelector("#box1").addEventListener("click", animateBox1);
