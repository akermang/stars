// Subsidized firt triangular
var inputNum = prompt("SELECT A NUMBER FROM  1 -.. 12");

var spaceNum = inputNum;
var starString = "*";
var starCounter = 1;
while(starCounter <= inputNum){
  var spaceCounter = 0 ;
  var spaceString = "\xa0";
  while(spaceCounter < spaceNum){
    spaceString += "\xa0";
    spaceCounter += 1;
  }
  spaceNum -= 1;
  document.write(spaceString + starString + "<br>");
  starString += "*";
  starCounter += 1;
};
// Subsidized second triangular
var starsNum = inputNum;
var spaceCounter = 0;
var spaceString = "\xa0\xa0\xa0";
while(spaceCounter < inputNum){
  var starCounter = 1 ;
  starString = "";
  while(starCounter < starsNum){
    starString += "*"
    starCounter += 1;
  }
  starsNum -= 1;
  document.write(spaceString + starString + "<br>");
  spaceCounter += 1;
  spaceString += "\xa0";
};
//  Square
var starString = "*";
var starCounter = 1;
var lineNum = 0;
while (lineNum < inputNum) {
  while(starCounter < inputNum){
    starString += "*";
    starCounter+= 1;
  };
  document.write(starString + "<br>");
  lineNum += 1;
};
// A straight-angled triangle
var starString = "*";
var starsCounter = 0;
while(starsCounter < inputNum){
  document.write(starString + "<br>");
  starString += "*";
  starsCounter+= 1;
};
