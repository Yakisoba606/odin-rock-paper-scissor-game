let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    return Math.floor(Math.random())+1

}

function getHumanChoice(){

    choice = prompt("Let's play rock-paper-scissor")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){

    console.log(humanChoice);
    console.log(computerChoice);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

let playGame = (playRound) => {

}
