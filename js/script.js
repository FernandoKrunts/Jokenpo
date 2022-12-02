let userScore = 0;
let computerScore = 0;
const computerScoreSpan = document.querySelector(".perdeu span");
const userScoreSpan = document.querySelector(".ganhou span");
const winner = document.querySelector(".ganhador h2");
const papel = document.querySelector("#papel");
const tesoura = document.querySelector("#tesoura");
const pedra = document.querySelector("#pedra");

function getComputerChoice() {
  const choices = ["papel", "pedra", "tesoura"];
  let randonNumbers = Math.floor(Math.random() * 3);
  return choices[randonNumbers];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "papelpedra":
    case "pedratesoura":
    case "tesourapapel":
      win(userChoice, computerChoice);
      break;
    case "pedrapapel":
    case "tesourapedra":
    case "papeltesoura":
      lose(userChoice, computerChoice);
      break;
    case "papelpapel":
    case "tesouratesoura":
    case "pedrapedra":
      draw(userChoice, computerChoice);
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  winner.innerHTML =
    userChoice + " é melhor  que " + computerChoice + " . Você  ganhou !!!!";
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  winner.innerHTML =
    computerChoice + " é melhor  que " + userChoice + " . Você  PERDEU !!!!";
}
function draw(userChoice, computerChoice) {
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  winner.innerHTML =
    computerChoice + " é igual " + userChoice + " . Você  Empatou !!!!";
}

function main() {
  papel.addEventListener("click", function () {
    game("papel");
  });
  pedra.addEventListener("click", function () {
    game("pedra");
  });
  tesoura.addEventListener("click", function () {
    game("tesoura");
  });
}

main();
