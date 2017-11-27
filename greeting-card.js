const cardMaker = {
  makeFrontMessage: function(string) {
    return `<h2>${string}</h2>`;
  },
  makeInsideMessage: function(string2) {
      return `<p>${string2}</p>`;
  }
  
};

//Refactor this to link this object to cardMaker
// const BirthdayCard = Object.create();
// Birthday Card
const bdayCard = Object.create(cardMaker);
const bdayFront = bdayCard.makeFrontMessage("Happy Birthday, Jabroni!");
const bdayInside = bdayCard.makeInsideMessage("Another year older, another year closer to death!");
console.log(bdayFront);
// declare vars for the html divs
const divBdayFront = document.getElementById("bday-front");
const divBdayInside = document.getElementById("bday-inside");
// gives the divs classes for styling
divBdayFront.setAttribute("class", "bday");
divBdayInside.setAttribute("class", "bday");
//assign the messages to the innerhtml of the divs
divBdayFront.innerHTML = bdayFront;
divBdayInside.innerHTML = bdayInside;

// Valentine's Day card
const vdayCard = Object.create(cardMaker);
const vdayFront = vdayCard.makeFrontMessage("Happy Valentine's Day, sweet baby!");
const vdayInside = vdayCard.makeInsideMessage("We're gonna be together forever and ever!");
console.log(vdayFront);
// declare vars for the html divs
const vFront = document.getElementById("vday-front");
const vInside = document.getElementById("vday-inside");
// gives the divs classes for styling
vFront.setAttribute("class", "vday");
vInside.setAttribute("class", "vday");
//assign the messages to the innerhtml of the divs
vFront.innerHTML = vdayFront;
vInside.innerHTML = vdayInside;

