let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    return Math.floor(Math.random())+1

}

function getHumanChoice(){

    prompt("Let's play rock-paper-scissor")
}

function playRound(humanChoice, computerChoice){


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


