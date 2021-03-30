let userScore = 0;
let aiScore = 0;

const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];

  const random = Math.floor(Math.random() * options.length);
  return options[random];
};

const playRound = (playerSelection, computerSelection) => {
  let result;

  switch (true) {
    case playerSelection === "rock" && computerSelection === "rock":
      result = `It's a tie!`;
      break;

    case playerSelection === "rock" && computerSelection === "paper":
      aiScore++;
      result = `Paper beats Rock. AI wins!`;
      break;

    case playerSelection === "rock" && computerSelection === "scissors":
      userScore++;
      result = `Rock beats Scissors. You win!`;
      break;

    case playerSelection === "paper" && computerSelection === "paper":
      result = `It's a tie!`;
      break;

    case playerSelection === "paper" && computerSelection === "scissors":
      aiScore++;
      result = `Scissors beats paper. AI wins!`;
      break;

    case playerSelection === "paper" && computerSelection === "rock":
      userScore++;
      result = `Paper beats Rock. You win!`;
      break;

    case playerSelection === "scissors" && computerSelection === "scissors":
      result = `It's a tie!`;
      break;

    case playerSelection === "scissors" && computerSelection === "rock":
      aiScore++;
      result = `Rock beats Scissors. AI wins!`;
      break;

    case playerSelection === "scissors" && computerSelection === "paper":
      userScore++;
      result = `Scissors beats Paper. You win!`;
      break;

    default:
      result = `Please enter "Rock", "Paper", or "Scissors"`;
  }

  return result;
};

const game = () => {
  let playerSelect = window.prompt(`Rock, Paper, or Scissors?`).toLowerCase();
  let computerSelect = computerPlay();

  console.log(playRound(playerSelect, computerSelect));
  console.log(`Your score is ${userScore}`);
  console.log(`AI score is ${aiScore}`);
};

const gameLoop = () => {
  for (i = 0; i < 5; i++) {
    game();
  }
};

gameLoop();
