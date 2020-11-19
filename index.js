var firstNumber = Math.floor(1 + Math.random() * 6);
var secondNumber = Math.floor(1 + Math.random() * 6);

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

// Dices Section
function imageOne() {
  if (firstNumber === 1) {
    document.querySelector("#one").setAttribute("src", "images/Dice-1.png");
  } else  if (firstNumber === 2){
    document.querySelector("#one").setAttribute("src", "images/Dice-2.png");
  } else if (firstNumber === 3) {
    document.querySelector("#one").setAttribute("src", "images/Dice-3.png");
  } else if (firstNumber === 4) {
    document.querySelector("#one").setAttribute("src", "images/Dice-4.png");
  } else if (firstNumber === 5) {
    document.querySelector("#one").setAttribute("src", "images/Dice-5.png");
  } else if (firstNumber === 6) {
    document.querySelector("#one").setAttribute("src", "images/Dice-6.png");
  }
}
function imageTwo() {
  if (secondNumber === 1) {
    document.querySelector("#two").setAttribute("src", "images/Dice-1.png");
  } else  if (secondNumber === 2){
    document.querySelector("#two").setAttribute("src", "images/Dice-2.png");
  } else if (secondNumber === 3) {
    document.querySelector("#two").setAttribute("src", "images/Dice-3.png");
  } else if (secondNumber === 4) {
    document.querySelector("#two").setAttribute("src", "images/Dice-4.png");
  } else if (secondNumber === 5) {
    document.querySelector("#two").setAttribute("src", "images/Dice-5.png");
  } else if (secondNumber === 6) {
    document.querySelector("#two").setAttribute("src", "images/Dice-6.png");
  }
}
imageOne();
imageTwo();
