let gridBox = document.querySelector("#grid-wrapper");

gridBox.addEventListener("mouseover", () => {
  gridBox.style.outline = "red solid 5px";
});
gridBox.addEventListener("mouseleave", () => {
  gridBox.style.outline = "none";
});

// ----------------------------------------------------------
// gridItems.addEventListener("mouseover", gridItemOutline);
let gridItem = document.querySelectorAll(".grid-item");

// function gridItemOutline() {
//   for (i = 0; i < gridItem.length; i++) {
//     const eachBox = gridItem[i];

//     eachBox.addEventListener("mouseover", () => {
//       eachBox.style.outline = "5px solid yellow";
//     });
//     eachBox.addEventListener("mouseleave", () => {
//       eachBox.style.outline = "none";
//     });
//   }
// }

// gridItemOutline();

// -----------------------

function randColor() {
  let randNum = Math.floor(Math.random() * 255);
  let color =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
  // let color = `rgb(${randNum}, ${randNum}, ${randNum})`;
  // console.log(color);
  return color;
}

gridItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.style.backgroundColor) {
      item.style.backgroundColor = "";
    } else {
      item.style.backgroundColor = randColor();
    }
  });

  item.addEventListener("mouseover", () => {
    item.style.outline = "5px solid yellow";
  });
  item.addEventListener("mouseleave", () => {
    item.style.outline = "none";
  });
});
