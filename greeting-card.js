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
const divFront = document.getElementById("bday-front");
const divInside = document.getElementById("bday-inside");
//assign the messages to the innerhtml of the divs
divFront.innerHTML = bdayFront;
divInside.innerHTML = bdayInside;

// Valentine's Day card
const vdayCard = Object.create(cardMaker);
const vdayFront = vdayCard.makeFrontMessage("Happy Valentine's Day, sweet baby!");
const vdayInside = vdayCard.makeInsideMessage("We're gonna be together forever and ever!");
console.log(vdayFront);
// declare vars for the html divs
const vFront = document.getElementById("vday-front");
const vInside = document.getElementById("vday-inside");
//assign the messages to the innerhtml of the divs
vFront.innerHTML = vdayFront;
vInside.innerHTML = vdayInside;