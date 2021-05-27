// Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Pakoreguokite tik tekstą šio elemento ir pakeiskite jį į savo vardą su JS.
document.getElementById("name").textContent = "Laima";

// Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JS pakeiskite paskutinį list item tekstą į "Sūris".
document.getElementsByTagName("li")[2].textContent = "More coffee";

// 1. Ištaisykite klaidą. Nusikopijuokite apačioje esantį kodą ir su JS naudodami querySelector, pasikeiskite antrame paragrafe esantį span - iš 'red' teksto, turi būti 'blue':

document.querySelector(".bluetext span").textContent = "blue";

// 2. - Sukurkite ordered list su trim list item'ais: "BMW group", "VW group", "GE". Tik "VW group" didesnis už "BMW group". -  Su querySelector pakeiskite tekstus pirmo ir antro item'o, kad teisingai atvaizduotų. -  Tačiau, kabliukas - negalite rašyti jokio teksto per JS. Pirma jums šias tekstų reikšmes reikės pasiimti ir išsisaugoti į kintamuosius.

let bmwGroup = document.querySelector("ol :nth-child(1)").textContent;
let vwGroup = document.querySelector("ol :nth-child(2)").textContent;

document.querySelector("ol :nth-child(1)").textContent = vwGroup;
document.querySelector("ol :nth-child(2)").textContent = bmwGroup;
