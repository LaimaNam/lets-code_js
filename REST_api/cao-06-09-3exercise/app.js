//  3 --- Organizuojate vestuves - pasiimkite informaciją iš "https://boiling-reaches-93648.herokuapp.com/week-3/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

// variables
const guestTable = document.querySelector('#guest-info');

// getting wedding guest data
const generateAttendeeCard = () => {
  fetch('https://boiling-reaches-93648.herokuapp.com/week-3/wedding')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((result) => {
      result.forEach((element) => {
        let name = element.name;
        let plusOne = element.plusOne ? '+' : '-';
        let attendence = element.attending ? '+' : '-';

        let tr = document.createElement('tr');
        let tdForName = document.createElement('td');
        let tdForPlusOne = document.createElement('td');
        let tdForAttendence = document.createElement('td');
        tdForName.textContent = name;
        tdForPlusOne.textContent = plusOne;
        tdForAttendence.textContent = attendence;
        tr.append(tdForName, tdForPlusOne, tdForAttendence);
        guestTable.appendChild(tr);
      });
    });
};

generateAttendeeCard();
