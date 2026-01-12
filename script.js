let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let choice = prompt("Let's play rock-paper-scissor");

  while(!choice){
    choice = prompt("Let's play rock-paper-scissor");
  }

  return choice.toLowerCase();
}

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice == 1) {
    return "rock";
  } else if (randomChoice == 2) {
    return "paper";
  } else if (randomChoice == 3) {
    return "scissor";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("It's a draw");
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "scissor" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log(`You lose! ${humanChoice} beats ${computerChoice}.`);
    computerScore++;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
      console.log(`Human wins. Score: ${humanScore} | ${computerScore}`);
    } else {
      console.log(`Computer wins. Score: ${humanScore} | ${computerScore}`);
    }
}

playGame();