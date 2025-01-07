// Staggering: a way to make animations happen one after the other for multiple elements
const animateBox1 = () => {
    anime({
      // select multiple items
      targets: ".box",
      // each items start after 500ms after the last item
      //delay starts at 0ms then increase by 500ms
      delay:anime.stagger(500),
      // start value for stagger---------------------------------------------------------- 
      // translate starts at 200 then increase by 100 for each elements.
      translateX: anime.stagger(100,{start:200}),
      easing: "easeInOutQuad",
      direction: 'alternate',
      // range for stagger -------------------------------------------------------------
      // rotation will be distributed from -360deg to 360deg evenly between all elements
      rotate:anime.stagger([360,-360]),
      // from value ------------------------------------------------------------------------
      // Starts the stagger effect from a specific position.
      scale: anime.stagger(1,{from:'center'}),
      
      duration:4000
    });
  };
  // Add Event Listeners for Each Animation Trigger
  document.querySelector("#box1").addEventListener("click", animateBox1);
