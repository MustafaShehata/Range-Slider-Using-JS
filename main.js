const slider = document.getElementById("myRange");
const output = document.getElementById("value");

output.innerHTML = slider.value;
slider.oninput = function(){
  output.innerHTML = this.value;
}

slider.addEventListener("input", function(){
  const x = ((slider.value-slider.min)/(slider.max-slider.min) * 100);
  const color = "linear-gradient(90deg, rgb(117,252,117)"+x+"%, rgb(214,214,214)"+x+"%)";
  slider.style.background= color;
})