const ENDPOINT_URL = 'https://golden-whispering-show.glitch.me';

//Variables
const form = document.querySelector('form');

//   -- POST data
function postData(e) {
  e.preventDefault();

  let img = e.target.imgUrl.value;
  let productTitle = e.target.productTitle.value;
  let price = e.target.price.value;

  if (!img || !price || !productTitle) {
    return alert('Please fill all the fields!');
  }

  return fetch(ENDPOINT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: img,
      title: productTitle,
      price: price,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Product added!');
      form.reset();
      window.location.href = 'index.html';
    });
}

//events
form.addEventListener('submit', postData);
