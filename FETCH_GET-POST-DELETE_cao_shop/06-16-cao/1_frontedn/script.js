const ENDPOINT_URL = 'https://golden-whispering-show.glitch.me/';

//variables
//DOM variables
const productsOutput = document.querySelector('#all-products');

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
            <button class="deleteBtn" data-id="${product.id}">Ištrinti</button>
        </div>
        `;
      }
      productsOutput.innerHTML = output;

      // delete event on button
      const deleteBtn = document.querySelectorAll('.deleteBtn');
      deleteBtn.forEach((btn) => btn.addEventListener('click', deleteProduct));
    });
}

// --- DELETE data
function deleteProduct(e) {
  let id = +e.target.dataset.id;

  return fetch(ENDPOINT_URL + id, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showProducts();
    });
}

//events
document.addEventListener('DOMContentLoaded', showProducts);
