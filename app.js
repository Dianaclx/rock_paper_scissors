let userScore = 0;
let compScore = 0;
let counter = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const button_reset = document.getElementById("reset");

//Main Menu
const btn1 = document.getElementById("letsplay");
const menu_div = document.getElementById("main-menu");
const game_div = document.getElementById("game");

function reset() {
  button_reset.addEventListener("click", () => location.reload());
}
reset();

// Game button 1
function startgame1() {
  btn1.addEventListener("click", () => {
    menu_div.classList.add("fadeout");
    game_div.classList.add("fadein");
  });
}
startgame1();

function getComputerScore() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}
/* function for winning, loosing or draw */

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  result_p.innerHTML = `${convert(userChoice)} Beats ${convert(
    computerChoice
  )}. You win! 🔥`;
  userChoice_div.classList.add("green-glow");
  computerChoice_div.classList.add("red-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("green-glow"),
      computerChoice_div.classList.remove("red-glow");
  }, 300);
}
function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  result_p.innerHTML = `${convert(userChoice)} is Beaten by ${convert(
    computerChoice
  )}. You Lost.....! 💩`;
  userChoice_div.classList.add("red-glow");
  computerChoice_div.classList.add("green-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("red-glow"),
      computerChoice_div.classList.remove("green-glow");
  }, 300);
}
function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  const computerChoice_div = document.getElementById(computerChoice);
  result_p.innerHTML = `Computer has choosen ${convert(computerChoice)} too!`;
  userChoice_div.classList.add("grey-glow");
  computerChoice_div.classList.add("grey-glow");
  setTimeout(() => {
    userChoice_div.classList.remove("grey-glow"),
      computerChoice_div.classList.remove("grey-glow");
  }, 300);
}
/* Game Comparation */

function game(userChoice) {
  const computerChoice = getComputerScore();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissor_div.addEventListener("click", () => game("s"));
}
main();
