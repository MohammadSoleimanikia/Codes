// duration parameter
const animateBox1 = () => {
  anime({
    // select every box and make it array
    targets: ".box",
    translateX: 270,
    direction: "alternate",
    loop: true,
    // (element,index, targetsLength:The total number of animated targets)
    delay: function (el, i, l) {
      //for first item we have : el:<div> ...</div>  i:0  l:3
      return i * 100;
    },
    endDelay: function (el, i, l) {
      return (l - i) * 100;
    },
  });
};
// Add Event Listeners for Each Animation Trigger
document.querySelector("#box1").addEventListener("click", animateBox1);
