let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){

    choice = prompt("Let's play rock-paper-scissor")
    return choice.toLowerCase();
}

function getComputerChoice(){
    
    let randomChoice = Math.floor(Math.random()*3)+1;
    
    if (randomChoice == 1){
        return 'rock'
    } else if (randomChoice == 2) {
        return 'paper'
    }else if (randomChoice == 3){
        return 'scissor'
    }

}

function playRound(humanChoice, computerChoice){
   if (humanChoice == computerChoice){
    return console.log('its a draw')
   }else if (humanChoice == 'rock' && computerChoice == 'paper'){
    return console.log('its a win for computer')
   }else if (humanChoice == 'rock' && computerChoice == 'scissor'){
    return console.log('its a win for human')
   }else if (humanChoice == 'scissor' && computerChoice == 'rock'){
    return console.log('its a win for computer')
   }else if (humanChoice == 'scissor' && computerChoice == 'paper'){
    return console.log('its a win for human')
   }else if (humanChoice == 'paper' && computerChoice == 'rock'){
    return console.log('its a win for computer')
   }else if (humanChoice == 'paper' && computerChoice == 'scissor'){
    return console.log('its a win for human')
   }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

let playGame = (playRound) => {

}
