let answers = ["rock", "paper", "scissor"];

function getComputerChoice(answer) {
  (randomNumber = Math.floor(Math.random() * answers.length)),
    (pcChoice = answers[randomNumber]);
  return pcChoice;
}
const playerChoice = prompt("Rock, Paper, Scissor?");
const computerChoice = getComputerChoice();
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It is a TIE!");
  } else if (playerChoice == "rock") {
    if (computerChoice == "paper") console.log("Computer Wins");
  } else if (playerChoice == "paper") {
    if (computerChoice == "scissor") console.log("Computer Wins");
  } else if (playerChoice == "scissor") {
    if (computerChoice == "rock") console.log("Computer Wins");
    else {
      console.log("YOU WIN");
    }
  }
}
//console.log(playRound(playerChoice, computerChoice));
