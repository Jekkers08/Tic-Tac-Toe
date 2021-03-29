function computerPlay() {
  const options = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      console.log(`It's a tie!`);
      break;

    case playerSelection === "rock" && computerSelection === "paper":
      console.log(`Paper beats Rock. AI wins!`);
      break;

    case playerSelection === "rock" && computerSelection === "scissors":
      console.log(`Rock beats Scissors. You win!`);
      break;

    case playerSelection === "paper" && computerSelection === "paper":
      console.log(`It's a tie!`);
      break;

    case playerSelection === "paper" && computerSelection === "scissors":
      console.log(`Scissors beats paper. AI wins!`);
      break;

    case playerSelection === "paper" && computerSelection === "rock":
      console.log(`Paper beats Rock. You win!`);
      break;

    case playerSelection === "scissors" && computerSelection === "scissors":
      console.log(`It's a tie!`);
      break;

    case playerSelection === "scissors" && computerSelection === "rock":
      console.log(`Rock beats Scissors. AI wins!`);
      break;

    case playerSelection === "scissors" && computerSelection === "paper":
      console.log(`Scissors beats Paper. You win!`);
      break;

    default:
      console.log(`Please enter "Rock", "Paper", or "Scissors"`);
  }
}
