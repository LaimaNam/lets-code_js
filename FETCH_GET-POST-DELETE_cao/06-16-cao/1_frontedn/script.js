const ENDPOINT_URL = 'https://golden-whispering-show.glitch.me';

//variables
//DOM variables
const productsOutput = document.querySelector('#all-products');

let id;

//functions

// --- GET data
function showProducts() {
  return fetch(ENDPOINT_URL)
    .then((response) => response.json())
    .then((products) => {
      let output = '';
      for (let product of products) {
        output += `
        <div class="product-item" id="${product.id}">
            <img src="${product.image}">
            <div class="product-content">
                <h5>${product.title}</h5>
                <h3>${product.price}</h3>
            </div>
        </div>
        `;
      }

      productsOutput.innerHTML = output;
    });
}

//events
document.addEventListener('DOMContentLoaded', showProducts);
