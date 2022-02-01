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
        console.log("It was a tie");
        return "It was a tie";    
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins");
        return "Computer wins";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins");
        return "Player wins";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins");
        return "Player wins";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins");
        return "Computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins");
        return "Computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins");
        return "Player wins";
    }
    else {
        console.log("Incorrect Input");
        return "Incorrect Input";
    }
}

const selection = document.querySelectorAll("#rps");

selection.forEach(button => button.addEventListener("click", playSingleRound));





