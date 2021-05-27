const form = document.querySelector("form");

form.addEventListener("submit", printMyCard);

function printMyCard(e) {
  e.preventDefault();
  //   div
  let cardBox = document.querySelector("#cardBox");
  //   url - pasiimu + susidedu on submit ---------------
  let url = document.querySelector("#url").value;
  let img = document.querySelector("#imgUrl");
  img.src = url;
  // name + age ----------------------------------------------
  let name = e.target.elements.firstName.value;
  let age = e.target.elements.age.value;
  let nameSpan = document.querySelector("#nameSpan");
  let ageSpan = document.querySelector("#ageSpan");
  nameSpan.append(name);
  ageSpan.append(age);
  // checked gender radio ------------------------------------------
  let gender = e.target.elements.gender.value;
  let genderSpan = document.querySelector("#genderSpan");
  genderSpan.textContent = gender;
  // selected relationship
  let relationshipStatus = Number(
    document.querySelector("#relationship").value
  );
  let relSpan = document.querySelector("#relSpan");
  relSpan.textContent = switchResults(relationshipStatus);
  // textarea info
  let textArea = e.target.elements.aboutYou.value;
  let txtSpan = document.querySelector("#txtSpan");
  txtSpan.textContent = textArea;

  //   clean
  form.reset();
}

function switchResults(options) {
  let option = "";

  switch (options) {
    case 1:
      option = "single and ready to mingle!";
      break;

    case 2:
      option = "married";
      break;

    case 3:
      option = "other";
      break;

    case 0:
      option = "you haven't choose relationship status";
      break;
  }
  return option;
}
