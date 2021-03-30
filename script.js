let userScore = 0;
let aiScore = 0;

function computerPlay() {
  const options = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      return `It's a tie!`;

    case playerSelection === "rock" && computerSelection === "paper":
      aiScore++;
      return `Paper beats Rock. AI wins!`;

    case playerSelection === "rock" && computerSelection === "scissors":
      userScore++;
      return `Rock beats Scissors. You win!`;

    case playerSelection === "paper" && computerSelection === "paper":
      return `It's a tie!`;

    case playerSelection === "paper" && computerSelection === "scissors":
      aiScore++;
      return `Scissors beats paper. AI wins!`;

    case playerSelection === "paper" && computerSelection === "rock":
      userScore++;
      return `Paper beats Rock. You win!`;

    case playerSelection === "scissors" && computerSelection === "scissors":
      return `It's a tie!`;

    case playerSelection === "scissors" && computerSelection === "rock":
      aiScore++;
      return `Rock beats Scissors. AI wins!`;

    case playerSelection === "scissors" && computerSelection === "paper":
      userScore++;
      return `Scissors beats Paper. You win!`;

    default:
      return `Please enter "Rock", "Paper", or "Scissors"`;
  }
}

function game() {
  let playerSelect = window.prompt(`Rock, Paper, or Scissors?`).toLowerCase();
  let computerSelect = computerPlay();
  console.log(playRound(playerSelect, computerSelect));
  console.log(`Your score is ${userScore}`);
  console.log(`AI score is ${aiScore}`);
}

function gameLoop() {
  for (i = 0; i < 5; i++) {
    game();
  }
}

gameLoop();
