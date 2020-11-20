var firstNumber = Math.floor(1 + Math.random() * 6);
var oneSource = "images/Dice-"+firstNumber+".png";
document.querySelector("#one").setAttribute("src", oneSource);
var secondNumber = Math.floor(1 + Math.random() * 6);
var twoSource = "images/Dice-"+secondNumber+".png";
document.querySelector("#two").setAttribute("src", twoSource);


// Title Section
function dice() {
  if (firstNumber > secondNumber) {
    return ("🏆  Player 1 wins!");
  } else if (firstNumber < secondNumber) {
    return ("Player 2 Wins!  🏆");
  } else if(firstNumber = secondNumber) {
    return ("Draw");
  }
}
document.querySelector("#title-text").textContent = dice();


