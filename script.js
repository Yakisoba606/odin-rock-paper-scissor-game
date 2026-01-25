let humanScore = 0;
let computerScore = 0;


const para = document.querySelector(".score-board");

const humanPoint = document.createElement('span');
const computerPoint = document.createElement('span');
const statusText = document.querySelector('.score-announcement');


para.textContent = 'Score : ';
para.appendChild(humanPoint);
humanPoint.textContent = '0';
para.insertAdjacentText('beforeend', ' - ');
para.appendChild(computerPoint);
computerPoint.textContent = '0';

function getHumanChoice() {
  buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id == "reset") {
        resetGame();
      } else {
        playGame(button.id);
      }
    });
  });
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
    statusText.textContent = 'A draw!!';
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "scissor" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "scissor")
  ) {
    computerScore++;
    computerPoint.textContent = computerScore;
    statusText.textContent = `${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)} beats ${humanChoice}`
  } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "scissor" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissor")
  ) {
    humanScore++;
    humanPoint.textContent = humanScore;
    statusText.textContent = `${humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1)} beats ${computerChoice}`
  }
}

function playGame(humanSelection) {

  if(humanScore >=5 || computerScore >=5) return;

  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore === 5) {
    statusText.textContent = "YOU WIN THE GAME!!";
  } else if (computerScore === 5) {
    statusText.textContent = "YOU LOSE THE GAME";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanPoint.textContent = '0';
  computerPoint.textContent = '0';
  statusText.textContent = 'GAME RESET';
}

getHumanChoice();
