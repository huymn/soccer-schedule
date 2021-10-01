const fixtureBtn = document.getElementById("fixture-btn");
const standingsBtn = document.getElementById("standings-btn");
const fixtureTable = document.querySelector(".fixture-table");
const standingsTable = document.querySelector(".standings-table");
const seasonSelector = document.getElementById("season-selector");

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

//Add in new fixture
const createNewFixture = (season) => {
  //Create new div
  const newFixture = document.createElement('div');

  /*********************************
  ****Add in all require attributes*
  **********************************/
  
  //id of this fixture(preset widget)
  newFixture.setAttribute('id', 'wg-api-football-fixtures');

  //where this data is hosted
  newFixture.setAttribute('data-host', 'v3.football.api-sports.io');

  //refresh rate of fixture table
  newFixture.setAttribute('data-refresh', "");

  //today's date
  newFixture.setAttribute('data-date', "");

  //league to display for fixture
  newFixture.setAttribute('data-league', '39');

  //team to display for
  newFixture.setAttribute('data-team', "");

  //season
  newFixture.setAttribute('data-season', season);

  //number of previous matches to display
  newFixture.setAttribute('data-last', "");

  //number of next matches to display
  newFixture.setAttribute('data-next', "");

  //API key (SHOULD BE INVISIBLE/SECURE)
  newFixture.setAttribute('data-key', '0faf0093c15b42c79332d719ba6724f9');

  //theme of table (dark, light) default is light
  newFixture.setAttribute('data-theme', '');

  //show error
  newFixture.setAttribute('data-show-errors', 'false');

  //class of div
  newFixture.setAttribute('class', 'api_football_loader');

  //Return the new fixture
  return newFixture;
}

//Create new standing element
const createNewStandings = (season) => {
  //Create new div
  const newStandings = document.createElement('div');

  /*********************************
  ****Add in all require attributes*
  **********************************/
  
  //id of this standings(preset widget)
  newStandings.setAttribute('id', 'wg-api-football-standings');

  //where this data is hosted
  newStandings.setAttribute('data-host', 'v3.football.api-sports.io');

  //league to display for standings
  newStandings.setAttribute('data-league', '39');

  //team to display for
  newStandings.setAttribute('data-team', "");

  //season
  newStandings.setAttribute('data-season', season);

  //API key (SHOULD BE INVISIBLE/SECURE)
  newStandings.setAttribute('data-key', '0faf0093c15b42c79332d719ba6724f9');

  //theme of table (dark, light) default is light
  newStandings.setAttribute('data-theme', '');

  //show error
  newStandings.setAttribute('data-show-errors', 'false');

  //class of div
  newStandings.setAttribute('class', 'api_football_loader');

  //Return the new fixture
  return newStandings;

}

seasonSelector.addEventListener('change', () => {
  //Get the selected season
  const season = seasonSelector[seasonSelector.selectedIndex].value;

  //Remove all current children nodes
  removeAllChildNodes(fixtureTable);
  removeAllChildNodes(standingsTable)

  //Add in the newly created element
  fixtureTable.appendChild(createNewFixture(season));
  standingsTable.appendChild(createNewStandings(season));
});

const removeAllChildNodes = (parent) => {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}