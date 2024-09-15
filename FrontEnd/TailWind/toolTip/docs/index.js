const tooltipLink = document.querySelector(".tooltip-link");
const tooltipBox = document.querySelector(".tooltip-box");

tooltipLink.addEventListener("click", () => {
  if (!tooltipBox.classList.contains("hidden")) {
    tooltipBox.classList.add("hidden");
  }
  else{
    tooltipBox.classList.remove("hidden");
  }
});
