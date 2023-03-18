const playerButtons = document.querySelectorAll("#player button");
const computerButtons = document.querySelectorAll("#computer button");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

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

function getResult(playerSelection, computerSelection) {
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

function finishGame() {
    playerButtons.forEach((button) => {
        button.removeEventListener("click", playRound);
    });

    if (playerScore === 5) {
        result.textContent = "Congratulations! You win the game"
    } else {
        result.textContent = "Game over! You lose the game"
    }
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
     
    result.textContent = getResult(playerSelection, computerSelection);
    score.textContent = `${playerScore} : ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) finishGame();
}

playerButtons.forEach((button) => {
    button.addEventListener("click", playRound);
});
