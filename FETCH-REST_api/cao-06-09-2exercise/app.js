// 2 ----- Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

const getData = () => {
  fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((result) => {
      let dataOutput = document.createElement('h1');
      result.filter((element) => {
        if (element.name === 'Kristupas Lapeika') {
          console.log(element.vip);
          dataOutput.innerText = `Kristupas Lapeika ${
            element.vip ? 'yra VIP' : 'nėra VIP'
          } narys.`;
          document.body.appendChild(dataOutput);
        }
      });
    });
};

getData();
