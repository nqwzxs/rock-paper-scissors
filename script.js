let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    return prompt("Choose Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beat paper";
    } else {
        return "It's a tie!";
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    if (playerScore > computerScore) {
        console.log(`You win! Score: ${playerScore} : ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose! Score: ${playerScore} : ${computerScore}`);
    } else {
        console.log(`It's a tie! ${playerScore} : ${computerScore}`);
    }
}

game();