// Function to Animate Box with Linear Easing
const linearAnimation = () => {
  anime({
    targets: '#linear', 
    translateY: 250, 
    duration: 1000, 
    easing: 'linear', // Linear easing (constant speed)
  });
};

// Function to Animate Box with EaseInQuad
const easeInQuadAnimation = () => {
  anime({
    targets: '#easeInQuad', 
    translateY: 250, 
    duration: 1000, 
    easing: 'easeInQuad', // start slow then speed up
  });
};

// Function to Animate Box with EaseOutQuad
const easeOutQuadAnimation = () => {
  anime({
    targets: '#easeOutQuad', 
    translateY: 250, 
    duration: 1000, 
    easing: 'easeOutQuad', // end slow 
  });
};

// Function to Animate Box with EaseInOutQuad
const easeInOutQuadAnimation = () => {
  anime({
    targets: '#easeInOutQuad', 
    translateY: 250, 
    duration: 1000,
    easing: 'easeInOutQuad', // Smooth acceleration and deceleration
  });
};

// Function to Animate Box with Spring Easing
const springAnimation = () => {
  anime({
    targets: '#spring', 
    translateY: 250, 
    duration: 1000, 
    easing: 'spring(1, 80, 10, 0)', // Spring-like bounce effect (realistic)
  });
};

// Function to Animate Box with Elastic Easing
const elasticAnimation = () => {
  anime({
    targets: '#elastic', 
    translateY: 250, 
    duration: 1000, 
    easing: 'easeOutElastic(1, 0.5)', // Elastic bounce effect (cartoony)
  });
};

// Function to Animate Box with Custom Cubic Bezier
const customAnimation = () => {
  anime({
    targets: '#custom', 
    translateY: 250, 
    duration: 1000, 
    easing: 'cubicBezier(0.42, 0, 0.58, 1)', // Custom cubic bezier easing
  });
};

// Attach Event Listeners to Each Box
document.querySelector('#linear').addEventListener('click', linearAnimation);
document.querySelector('#easeInQuad').addEventListener('click', easeInQuadAnimation);
document.querySelector('#easeOutQuad').addEventListener('click', easeOutQuadAnimation);
document.querySelector('#easeInOutQuad').addEventListener('click', easeInOutQuadAnimation);
document.querySelector('#spring').addEventListener('click', springAnimation);
document.querySelector('#elastic').addEventListener('click', elasticAnimation);
document.querySelector('#custom').addEventListener('click', customAnimation);
