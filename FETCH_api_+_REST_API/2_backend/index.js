const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ADVERTS DB - simulation
let adverts = [
  { id: 1, name: 'PS5', price: 800, phone: '+37067438970' },
  { id: 2, name: 'X-box', price: 900, phone: '+37067438555' },
  { id: 3, name: 'X-box', price: 1900, phone: '+37067438555' },
];

// ROUTES (REST API)
// --GET all adverts
app.get('/adverts', (req, res) => {
  res.send(adverts);
});
// --GET single advert based on id
app.get('/adverts/:id', (req, res) => {
  res.send(adverts.filter((item) => item.id === +req.params.id));
});

// POST
app.post('/adverts', (req, res) => {
  let id = adverts[adverts.length - 1].id + 1;

  adverts.push({ id, ...req.body });
  res.send(adverts);
});

// ... starting server
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
//     ----/adverts/:id - advert based on id
// POST:
//     ---ideti kazka naujo
//     ---/adverts - add to all adverts
