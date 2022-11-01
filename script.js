let answers = ["rock", "paper", "scissor"];

const playerChoice = prompt("Rock, Paper, Scissor?");
const computerChoice = "rock";
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It is a TIE!";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "Computer Wins";
  } else if (playerChoice == "paper" && computerChoice == "scissor") {
    return "Computer Wins";
  } else if (playerChoice == "scissor" && computerChoice == "rock") {
    return "Computer Wins";
  } else {
    return "YOU WIN";
  }
}

console.log(playRound(playerChoice, computerChoice));
