// duration parameter
const animation = anime({
  targets: "#box1",
  translateX: 800,
  direction: "alternate",
  easing: "easeInOutSine",
  loop: true,
  autoplay: false,
});
// Add Event Listeners for Each Animation Trigger
document.querySelector("#play").onclick = animation.play;
document.querySelector("#pause").onclick = animation.pause;
document.querySelector("#restart").onclick = animation.restart;
document.querySelector("#reverse").onclick = animation.reverse;
var seekProgressEl = document.querySelector(".progress");
seekProgressEl.oninput = function () {
  animation.seek(animation.duration * (seekProgressEl.value / 100));
};
