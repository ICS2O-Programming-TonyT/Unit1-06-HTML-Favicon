var slider = document.querySelector(".slider");
var output = document.querySelector("p");

output.innerHTML = "Value: " + slider.value;

slider.oninput = function() {
  output.innerHTML = "Value: " + this.value;
}