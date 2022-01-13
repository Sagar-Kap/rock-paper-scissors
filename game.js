let options = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    return options[getRandomInt(3)];
}

function playSingleRound() {

    let computerSelection = computerPlay();
    let playerSelection = "rock";

    if (playerSelection === computerSelection) {
        return "It was a tie";    
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer wins";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player wins"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player wins";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player wins";
    }
    else {
        return "Incorrect Input";
    }
}

const selection = document.querySelectorAll("#rps");

selection.forEach(button => button.addEventListener("click", playSingleRound));





