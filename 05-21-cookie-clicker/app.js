/* 3 busenos - 
paspaudus start playing - atsiranda game page
ant kukio uzvedus su eventais - mouseenter padideja, mouse leave sumazeja
-paspaudus go shop mygtuka atsiranda parduotuve, kukio nebera

*/

// button variables ---------->
const startPlayingBtn = document.querySelector("#goPlay");
const goShopBtn = document.querySelector("#goShop");
const goBackBtn = document.querySelector("#goBack");
const spinBtn = document.querySelector("#spinCookie");
const addTwo = document.querySelector("#addTwo");
const addFive = document.querySelector("#addFive");
const showCookieBtn = document.querySelector("#changeCookie");

// page variables
const startPageDiv = document.querySelector("#startPage");
const gamePageDiv = document.querySelector("#gamePage");
const shopPageDiv = document.querySelector("#shopPage");
const img = document.querySelector("#cookie");
const score = document.querySelector("#score");
const scoreTxt = document.querySelector(".scoreTxt");
const cookieVariationsBox = document.querySelector("#cookieVarriations");
const firstImg = document.querySelector("#firstImg");
const secondImg = document.querySelector("#secondImg");
const thirdImg = document.querySelector("#thirdImg");

// events ------------>

startPlayingBtn.addEventListener("click", openGame);
goShopBtn.addEventListener("click", openShop);
goBackBtn.addEventListener("click", openGame);
img.addEventListener("mouseenter", cookieSizeUp);
img.addEventListener("mouseleave", cookieSizeDown);
img.addEventListener("click", countPoints);
spinBtn.addEventListener("click", startSpinning);
document.addEventListener("keyup", stopSpinning);
addTwo.addEventListener("click", addTwoPoints);
addFive.addEventListener("click", addFivePoints);
showCookieBtn.addEventListener("click", showZeKuki);
firstImg.addEventListener("click", changeToFirstImg);
secondImg.addEventListener("click", changeToSecondImg);
thirdImg.addEventListener("click", changeToThirdImg);

// logika, funkcijos ----------->

function openGame() {
  startPageDiv.style.display = "none";
  gamePageDiv.style.display = "flex";
  shopPageDiv.style.display = "none";
  scoreTxt.style.display = "block";
}

function openShop() {
  gamePageDiv.style.display = "none";
  shopPageDiv.style.display = "flex";
}

// pasirasyti funkcijas (dvi) uzvedus pele ant cookie nuotraukos ji padideja, pele patraukus grizta i savo original size

function cookieSizeUp() {
  img.style.transform = "scale(1.1)";
}

function cookieSizeDown() {
  img.style.transform = "scale(1)";
}

// counter-ataskaitos taskas
let counter = 0;
// point skaicius uz viena click
let points = 100;

// update score
function updateScore() {
  score.textContent = counter;
}
// add points
function countPoints() {
  counter += points;
  updateScore();
}

// spin ze kuki
function startSpinning() {
  // checking if enough points
  if (counter >= 20) {
    //   jeigu uztenka atimti
    counter -= 20;
    // atnaujinti points
    updateScore();
    // spin ze kuki
    img.classList.add("rotate");
  } else {
    alert("no mon, no fun :(");
  }
}

function stopSpinning() {
  img.classList.remove("rotate");
}

// adding 2 point on cookie click
function addTwoPoints() {
  if (counter >= 100) {
    counter -= 100;
    updateScore();
    points = 2;
    addTwo.setAttribute("disabled", true);
  } else {
    alert("no mon no fun :(");
  }
}

// add 5 points on cookie click
function addFivePoints() {
  if (counter >= 200) {
    counter -= 200;
    updateScore();
    points = 5;
    addFive.setAttribute("disabled", true);
  } else {
    alert("No mon no fun :(");
  }
}

// show cookie list
function showZeKuki() {
  if (
    cookieVariationsBox.style.display === "none" ||
    cookieVariationsBox.style.display === ""
  ) {
    cookieVariationsBox.style.display = "block";
  } else {
    cookieVariationsBox.style.display = "none";
  }
}

function changeToFirstImg() {
  if (counter >= 150) {
    counter -= 150;
    updateScore();
    let change = firstImg.src;
    img.src = change;
  } else {
    alert("no mon no fun :(");
  }
}

function changeToSecondImg() {
  if (counter >= 150) {
    counter -= 150;
    updateScore();
    let change = secondImg.src;
    img.src = change;
  } else {
    alert("no mon no fun :(");
  }
}

function changeToThirdImg() {
  if (counter >= 150) {
    counter -= 150;
    updateScore();
    let change = thirdImg.src;
    img.src = change;
  } else {
    alert("no mon no fun :(");
  }
}
