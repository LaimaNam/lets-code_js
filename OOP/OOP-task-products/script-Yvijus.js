// ********** 1 DALIS **********
// 1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Product. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category (bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:
// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");
// 1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;
// 2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;
// 3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:
// 3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//  - kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
//  - arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos;
//  - arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;
const categories = ['T-shirts', 'Pants', 'Sweater', 'Shoes'];

// --- Class ---
class Product {
  constructor(name, price, salePrice, category) {
    this.name = name;
    this.price = price;
    this.salePrice = salePrice ? salePrice : null;
    this.category = category;
  }
  getProductIntro() {
    return `${this.name}: ${this.salePrice ? this.salePrice : this.price}€`;
  }

  // 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuolada");
  getProductSale() {
    if (this.salePrice) {
      const discount = 100 - (this.salePrice / this.price) * 100;
      return `Produktui ${this.name} taikoma ${Math.round(
        discount
      )}% nuolaida!`;
    }
    return `${this.name} akcija nera taikoma.`;
  }
}

// Made products using class
const shoeNike = new Product('Nike shoes', 20, '', ['Shoes']);
const pantsAdidas = new Product('Adidas pants', 30, 15, ['Pants']);
const shirtAdidas = new Product('Adidas shirt', 20, 10, ['T-shirts']);
const sweaterAdidas = new Product('Adidas sweater', 40, 30, ['Sweater']);
const pantsNike = new Product('Nike pants', 59, 40, ['Pants']);
const jumpsuitNike = new Product('Nike jumpsuit', 78, '', ['Pants', 'Sweater']);
// Products pushed to array
const currentProducts = [];

currentProducts.push(
  shoeNike,
  pantsAdidas,
  shirtAdidas,
  sweaterAdidas,
  pantsNike,
  jumpsuitNike
);

// console.log(currentProducts);

// Filter function
const filterProduct = (products, inputPrice, compare) => {
  if (compare === 'nuo') {
    return products.filter((a) => {
      if (a.salePrice) {
        return inputPrice <= a.salePrice;
      }
      return inputPrice <= a.price;
    });
  }

  if (compare === 'iki') {
    return products.filter((a) => {
      if (a.salePrice) {
        return inputPrice >= a.salePrice;
      }
      return inputPrice >= a.price;
    });
  }

  return products.filter((a) => {
    if (a.salePrice) {
      return inputPrice <= a.salePrice && a.salePrice <= compare;
    }
    return inputPrice <= a.price && a.price <= compare;
  });
};

// console.log(filterProduct(currentProducts, 20, 40));

// ********** 2 DALIS **********
// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);
const findProductByCategory = (products, category) => {
  return products.filter((product) =>
    product.category.some((categoryElement) => categoryElement === category)
  );
};

console.log(findProductByCategory(currentProducts, 'Sweater'));

// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;
const isOnSale = (products) => {
  return products.filter((product) => product.salePrice);
};

console.log(isOnSale(currentProducts));

// 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuolada");
console.log(pantsNike.getProductSale());
console.log(jumpsuitNike.getProductSale());
console.log(sweaterAdidas.getProductSale());
