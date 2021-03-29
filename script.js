function computerPlay() {
  const options = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      return `It's a tie!`;
      break;

    case playerSelection === "rock" && computerSelection === "paper":
      return `Paper beats Rock. AI wins!`;
      break;

    case playerSelection === "rock" && computerSelection === "scissors":
      return `Rock beats Scissors. You win!`;
      break;

    case playerSelection === "paper" && computerSelection === "paper":
      return `It's a tie!`;
      break;

    case playerSelection === "paper" && computerSelection === "scissors":
      return `Scissors beats paper. AI wins!`;
      break;

    case playerSelection === "paper" && computerSelection === "rock":
      return `Paper beats Rock. You win!`;
      break;

    case playerSelection === "scissors" && computerSelection === "scissors":
      return `It's a tie!`;
      break;

    case playerSelection === "scissors" && computerSelection === "rock":
      return `Rock beats Scissors. AI wins!`;
      break;

    case playerSelection === "scissors" && computerSelection === "paper":
      return `Scissors beats Paper. You win!`;
      break;

    default:
      return `Please enter "Rock", "Paper", or "Scissors"`;
  }
}
