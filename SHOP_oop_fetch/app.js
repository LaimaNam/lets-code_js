// Products data from API
const PRODUCTS_ENDPOINT = 'products.json';

// ----- OOP ------
//-----------------

// // PIRMAS BŪDAS

// // VARIABLES --------------------------------------
// // DOM elements
// const productsElement = document.querySelector('#products');

// // data (stores products from file)
// let products = [];

// class SHOP {
//   constructor(element, array) {
//     this.element = element;
//     this.array = array;
//   }

//   static createProductItem(product) {
//     let shopItem = `
//       <div>
//       <img src="${product.image}">
//       <h3>${product.title}</h3>
//       <p>${product.category.join(',')}</p>
//       <p>${product.price}</p>
//       </div>
//       `;
//     return shopItem;
//   }

//   render() {
//     let output = '';

//     for (let product of this.array) {
//       output += SHOP.createProductItem(product);
//     }

//     this.element.innerHTML = output;
//   }
// }

// //   EVENTS ------------------------------------------

// window.addEventListener('DOMContentLoaded', () => {
//   fetch(PRODUCTS_ENDPOINT)
//     .then((response) => response.json())
//     .then((data) => {
//       let shop = new SHOP(productsElement, data);
//       shop.render();
//     });
// });

// --------------------- OOP -----------------------------------
// ANTRAS BŪDAS

// VARIABLES --------------------------------------
// DOM elements
const productsElement = document.querySelector('#products');
const filters = document.querySelectorAll('input[type=radio]');
// // data (stores products from PRODUCTS_ENDPOINT)
let cachedProducts = [];

// CLASSES
// -----------
class SHOP {
  constructor(element, endpoint) {
    this.element = element;
    this.endpoint = endpoint;
  }

  static createProductItem(product) {
    let shopItem = `
      <div class="shopItem">
      <img src="${product.image}">
      <h3>${product.title}</h3>
      <p>${product.category.join(',')}</p>
      <p>${product.price.toFixed(2)} €</p>
      </div>
      `;
    return shopItem;
  }

  filter(filterCategory) {
    let products =
      filterCategory !== 'all-products'
        ? cachedProducts.filter((product) =>
            product.category.includes(filterCategory)
          )
        : cachedProducts.map((product) => product);

    let output = '';
    for (let product of products) {
      output += SHOP.createProductItem(product);
    }

    this.element.innerHTML = output;
  }

  render() {
    return fetch(this.endpoint)
      .then((response) => response.json())
      .then((data) => {
        let products = data;

        cachedProducts.push(...data);

        let output = '';
        for (let product of products) {
          output += SHOP.createProductItem(product);
        }

        this.element.innerHTML = output;
      });
  }
}
// -----------
class App {
  static init() {
    const shop = new SHOP(productsElement, PRODUCTS_ENDPOINT);
    shop.render();

    filters.forEach((filter) => {
      filter.addEventListener('change', (e) => shop.filter(e.target.value));
    });
  }
}

// starting APP
App.init();
