const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ADVERTS "DB" - simulation
let adverts = [
  { id: 1, name: 'PS5', price: '800', phone: '+37067438970' },
  { id: 2, name: 'X-box', price: '900', phone: '+37067438555' },
];

// ROUTES (REST API)
// --GET all adverts
app.get('/adverts/', (req, res) => {
  res.send(adverts);
});
// --GET single advert based on id
app.get('/adverts/:id/', (req, res) => {
  res.send(adverts.filter((item) => item.id === +req.params.id));
});

// POST ----------------------------------------
app.post('/adverts/', (req, res) => {
  // sugeneruojamas id
  let id = adverts.length === 0 ? 1 : adverts[adverts.length - 1].id + 1;
  // req.body - yra name price ir phone is front endo formos
  adverts.push({ id, ...req.body });

  res.send({ data: adverts, message: 'New advert added!' });
});

//PUT-------------------------------------------
app.put('/adverts/:id/', (req, res) => {
  let updatedAdvert = req.body;
  let advertID = +req.params.id;

  let updatedAdverts = adverts.map((advert) => {
    if (advert.id === advertID) {
      return { ...updatedAdvert };
    } else {
      return advert;
    }
  });

  adverts.length = 0;
  adverts.push(...updatedAdverts);
  res.send({ data: updatedAdverts, message: 'Advert updated!' });
});

//DELETE ----------------------------------------
app.delete('/adverts/:id/', (req, res) => {
  let advertID = +req.params.id;

  let updatedAdverts = adverts.reduce((newArr, currentItem) => {
    if (currentItem.id !== advertID) {
      newArr.push(currentItem);
    }
    return newArr;
  }, []);

  adverts.length = 0;
  adverts.push(...updatedAdverts);
  res.send({ data: updatedAdverts, message: 'Advert deleted!' });
});

// ... starting server-------------------------------------
app.listen(5000, () => console.log('Server is running on port: 5000'));

//  ---------------- TEORIJA -------------------
// --------- REST API ir CRUD -------------------------

// C - create | method: POST
// R - read   | method: GET
// U - update | method: PUT/PATCH
// D - delete | method: DELETE

//--- creating REST API routes
//GET:
//     ----/adverts - get all adverts
//     ----/adverts/:id - get advert based on id

// POST:
//     ---ideti kazka naujo
//     ---/adverts - add to all adverts

//PUT:
//   --- /adverts/:id - atnaujinti vieną item'ą based on id

//DELETE:
//   ---/adverts/:id - delete advert based on id
