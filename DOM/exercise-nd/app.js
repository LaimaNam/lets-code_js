// hmtl'e bus tik container and button

// VARIABLES : ---------------------------------
const header = document.querySelector('header');
const navigationBox = document.querySelector('.navigation');
const togglerBtn = document.querySelector('.fas');

// CREATING ELEMENTS
const navigationList = document.createElement('ul');
navigationList.innerHTML = `
<li><a href="">Home</a></li>
<li><a href="">Contact</a></li>
<li><a href="">About</a></li>
<li><a href="">Shop</a></li>
`;
navigationBox.appendChild(navigationList);
navigationBox.style.display = 'none';
let listItems = document.querySelectorAll('li');
let listLinks = document.querySelectorAll('a');

// STYLES ------------------------------------->
header.style.backgroundColor = 'grey';
header.style.color = 'white';
header.style.padding = '10px';
togglerBtn.style.display = 'flex';
togglerBtn.style.justifyContent = 'flex-end';
togglerBtn.style.cursor = 'pointer';
navigationList.style.color = 'white';

function smallWindowMenuStyle() {
  navigationList.style.textAlign = 'center';
  navigationList.style.padding = '0';
  listItems.forEach((element) => {
    element.style.listStyle = 'none';
    element.style.padding = '10px';
  });
  listLinks.forEach((element) => {
    element.style.textDecoration = 'none';
    element.style.color = 'white';
  });
}
function largeWindowMenuStyle() {
  navigationList.style.display = 'flex';
  navigationList.style.flexDirection = 'row';
  navigationList.style.justifyContent = 'space-around';
  listItems.forEach((element) => {
    element.style.listStyle = 'none';
    element.style.padding = '10px';
  });
  listLinks.forEach((element) => {
    element.style.textDecoration = 'none';
    element.style.color = 'white';
  });
}
// functionality--------------------------------------------->

let width = window.innerWidth;

if (width < 768) {
  let showingMenu = true;

  togglerBtn.addEventListener('click', () => {
    if (showingMenu) {
      // navigationBox.appendChild(navigationList);
      navigationBox.style.display = 'block';
      showingMenu = false;
      smallWindowMenuStyle();
    } else {
      // navigationBox.removeChild(navigationList);
      navigationBox.style.display = 'none';
      showingMenu = true;
    }
  });
} else {
  navigationBox.style.display = 'block';
  togglerBtn.style.display = 'none';
  largeWindowMenuStyle();
}

//TOGGLE MENU event -----------------------------
// let showingMenu = true;

// togglerBtn.addEventListener('click', () => {
//   if (showingMenu) {
//     // navigationBox.appendChild(navigationList);
//     navigationBox.style.display = 'block';
//     showingMenu = false;
//     smallWindowMenuStyle();
//     // ----------------------->
//   } else {
//     // navigationBox.removeChild(navigationList);
//     navigationBox.style.display = 'none';
//     showingMenu = true;
//   }
// });

// ------------------------------>

// let mql = window.matchMedia('(max-width: 768px)');
// function responsive(e) {
//   if (e.matches) {
//     let showingMenu = true;

//     togglerBtn.addEventListener('click', () => {
//       if (showingMenu) {
//         // navigationBox.appendChild(navigationList);
//         navigationBox.style.display = 'block';
//         showingMenu = false;
//         smallWindowMenuStyle();
//         // ----------------------->
//       } else {
//         // navigationBox.removeChild(navigationList);
//         navigationBox.style.display = 'none';
//         showingMenu = true;
//       }
//     });
//   } else {
//     navigationBox.style.display = 'block';
//     togglerBtn.style.display = 'none';
//     largeWindowMenuStyle();
//   }
// }

// mql.addEventListener('change', responsive);
