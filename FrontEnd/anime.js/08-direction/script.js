// duration parameter
const animateBox1 = () => {
  anime({
    targets: '#box1',
    translateX: 250,
    easing: 'easeInOutSine'
    // direction normal: default value ---> Animation progress goes from 0 to 100%
  });
  
  anime({
    targets: '#box2',
    translateX: 250,
    // Animation progress goes from 100% to 0
    direction: 'reverse',
    easing: 'easeInOutSine'
  });
  
  anime({
    targets: '#box3',
    translateX: 250,
    // Animation progress goes from 0% to 100% then goes back to 0%
    direction: 'alternate',
    easing: 'easeInOutSine'
  });
  };
  // Add Event Listeners for Each Animation Trigger
  document.querySelector("#box1").addEventListener("click", animateBox1);
