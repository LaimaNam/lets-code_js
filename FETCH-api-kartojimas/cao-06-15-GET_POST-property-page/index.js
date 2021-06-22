BASE_URL = 'https://radial-reinvented-shoe.glitch.me';

// DOM variables
const propertyListDiv = document.querySelector('#property-list');
const buttons = document.querySelectorAll('.city-btn');

document.addEventListener('DOMContentLoaded', () => {
  return fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => {
      let adverts = data;

      //filter by city buttons event
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          const city = button.innerText.toLowerCase();
          const filteredData = filterData(data, city);
          renderdata(filteredData);
        });
      });

      renderdata(adverts);
    });
});

// filter adverts by city
function filterData(data, city) {
  return data.filter((a) => a.city.toLowerCase() === city);
}

// render data
function renderdata(advert) {
  propertyListDiv.innerHTML = advert.reduce((output, currentAdvert) => {
    let price = currentAdvert.price
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    output += `
    <div class="property-list-item">
        <div>
        <img src="${currentAdvert.image}">
        </div>
        <div class="property-details">
        <h4>${price} €</h4>
        <h5>${currentAdvert.city}</h5>
        <p>${currentAdvert.description}</p>
        </div>
    </div>
    `;

    return output;
  }, '');
}
