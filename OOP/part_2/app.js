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

class Products {
  constructor(name, price, salePrice, category) {
    (this.name = name),
      (this.price = price),
      (this.salePrice = salePrice),
      (this.category = category);
  }

  getProductInfo() {
    return `${this.name}, ${this.getCurrentPrice()} eur`;
  }

  isOnSale() {
    return this.salePrice !== null
      ? this.salePrice
      : `Šiam produktui akcija nėra taikoma.`;
  }

  //   paduoda galutinę kainą:
  getCurrentPrice() {
    return this.salePrice !== null ? this.salePrice : this.price;
  }
}

//---------------- single products ---------------------
const tshirt = new Products('Karl Lagerfeld t-shirt', 15.99, 10.99, [
  'T-shirts',
  'Clothes',
]);
const pants = new Products('Puma pants', 25.99, null, ['Pants', 'Clothes']);
// console.log(pants.getProductInfo());
// console.log(pants.isOnSale());

const sportSweater = new Products('Nike sweater', 45.99, 39.99, [
  'Sweater',
  'Clothes',
]);
const sportShoes = new Products('Adidas shoes', 89.9, 75.9, [
  'Shoes',
  'Sport shoes',
]);

const sweater = new Products('sweater', 59.9, null, ['Sweater', 'Clothes']);

// -------------- all products ----------------
const currentProducts = [tshirt, pants, sportSweater, sportShoes, sweater];

// ------------------F I L T R A I ----------------------------

const filterProductAccordingToPrice = (products, price, strOrNum) => {
  return products.filter((product) => {
    if (!isNaN(strOrNum)) {
      // jei paduotas 3 argumentas number
      return (
        product.getCurrentPrice() >= price &&
        product.getCurrentPrice() <= strOrNum
      );
    } else if (strOrNum === 'iki') {
      // jei "iki"
      return product.getCurrentPrice() <= price;
    } else {
      // jei "nuo"
      return product.getCurrentPrice() >= price;
    }
  });
};

console.log(filterProductAccordingToPrice(currentProducts, 10, 'nuo'));

// Yvijus
