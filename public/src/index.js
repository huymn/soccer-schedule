const fixtureBtn = document.getElementById("fixture-btn");
const standingsBtn = document.getElementById("standings-btn");
const fixtureTable = document.querySelector(".fixture-table");
const standingsTable = document.querySelector(".standings-table");

//Show fixtures when the fixtures button is pressed
fixtureBtn.addEventListener('click', () => {
  removeActiveClasses();
  standingsTable.classList.add('hide');
});

//Show standings when standings button is pressed
standingsBtn.addEventListener('click', () => {
  removeActiveClasses();
  fixtureTable.classList.add('hide');
});

//Remove all the classes with active in it
const removeActiveClasses = () => {
    fixtureTable.classList.remove("hide");
    standingsTable.classList.remove("hide");
}