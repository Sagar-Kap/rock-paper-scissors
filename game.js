let options = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    return options[getRandomInt(3)];
}

function playSingleRound(player, computer) {
    let playerSelection = player.toLowerCase();
    let computerSelection = computer.toLowerCase();

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

function game() {
    let i=1;
    let j=1;
    let Computer = 0;
    let Player = 0;
    while(i<=5||j<=5)  {
        let player = window.prompt("Rock paper or scissors?");
        let computer = computerPlay();
        let decision = playSingleRound(player, computer);
        if (decision === "It was a tie") {
            console.log("It was a Tie, Try again");
            console.log(`Player ${Player} and Computer ${Computer}`);
            continue; 
        }
        else if (decision==="Computer wins"){
            Computer++;
            console.log("Computer wins this round");
            j++;
            console.log(`Player ${Player} and Computer ${Computer}`); 
            if (Player === 5){
                console.log (`Congratulation! You won ${Player}-${Computer} while playing with a machine!`);
            }
            else if (Computer === 5){
                console.log (`Whoops, You lost ${Player}-${Computer} while playing with a machine.`);
            }
            else {
                continue;
            }
        }
        else if (decision==="Player wins") {
            Player++;
            console.log("Player wins this round");
            i++;
            console.log(`Player ${Player} and Computer ${Computer}`);
            if (Player === 5){
                console.log (`Congratulation! You won ${Player}-${Computer} while playing with a machine!`);
            }
            else if (Computer === 5){
                console.log (`Whoops, You lost ${Player}-${Computer} while playing with a machine.`);
            }
            else {
                continue;
            }
        }
        else {
            console.log("You messed up big time");
            console.log(`Player ${Player} and Computer ${Computer}`);
            continue;
        }
    }
}

game();
