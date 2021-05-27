//  events
const button = document.getElementById("btn");
const body = document.querySelector("body");

button.style.padding = "10px 20px";
button.style.borderRadius = "15%";
button.style.border = "none";
button.style.marginTop = "50px";
button.style.fontSize = "50px";

button.addEventListener("click", changeBacground);

function changeBacground() {
  let colors = [
    "blue",
    "hot pink",
    "skyblue",
    "red",
    "rgb(255, 159, 23)",
    "#58e6",
    "#A6E2f7",
  ];
  let colorPicker = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorPicker];
  console.log(colorPicker);
}
