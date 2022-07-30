let answers = ["rock", "paper", "scissors"];

function getComputerChoice(answer) {
  (randomNumber = Math.floor(Math.random() * answers.length)),
    (pcChoice = answers[randomNumber]);
  return pcChoice;
}
const playerChoice = "rock";
const computerChoice = getComputerChoice();
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It is a TIE!");
  }
}
console.log(playRound(playerChoice, computerChoice));
//function playerSelection(playerAnswer) {
//playerAnswer = prompt("Rock, Paper, Scissors?");
