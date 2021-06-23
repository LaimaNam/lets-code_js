/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

// -----  Pirmas variantas
const showObjectKeys = (object) => {
  let properties = [];
  for (let property in object) {
    properties.push(property);
  }
  return properties;
};

console.log(showObjectKeys(audi));

// -----  Antras variantas
console.log(Object.keys(audi));
