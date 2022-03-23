let options = ["rock", "paper", "scissors"];
let aPlayer = 0;
let bComputer = 0;
let dictionary = {"rock": "✊", "paper": "✋", "scissors":"✌️"};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPlay() {
    return options[getRandomInt(3)];
}

function playSingleRound(e) {
    audioPlay.play();
    let computerSelection = computerPlay();
    let playerSelection = e.target.getAttribute("data-button");
    

    if (playerSelection === computerSelection) {
        
        audioTieGame.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "It was tie!";
        footerHeading.textContent = "No one won. Let's go again!";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "It was a tie";    
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        
        bComputer+=1;
        audioLoss.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "Computer wins this round!"
        footerHeading.textContent = "Paper beats rock";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "Computer wins";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        
        aPlayer+=1;
        audioWin.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "Player wins this round!"
        footerHeading.textContent = "Rock wrecks the scissors";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "Player wins";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        
        aPlayer+=1;
        audioWin.play();
        printResult(aPlayer,bComputer);
        heading.textContent = "Player wins this round!";
        footerHeading.textContent = "Paper beats rock";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "Player wins";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
 
        bComputer+=1;
        audioLoss.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "Computer wins this round!";
        footerHeading.textContent = "Scissors destroys paper!";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection]; 
        return "Computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {

        bComputer+=1;
        audioWin.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "Computer wins this round!";
        footerHeading.textContent = "Rock wrecks the scissors";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "Computer wins";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {

        aPlayer+=1;
        audioWin.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "Player wins this round!";
        footerHeading.textContent = "Scissors destroys the paper";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "Player wins";
    }
    else {

        audioTieGame.play();
        printResult(aPlayer,bComputer);
        declareWinner(aPlayer,bComputer);
        heading.textContent = "It was all a misunderstanding!";
        footerHeading.textContent = "Oops, something went wrong.";
        player.textContent = dictionary[playerSelection];
        computer.textContent = dictionary[computerSelection];
        return "Incorrect Input";
        
    }
    
} 

function printResult(a,b){ 

    playerScore.textContent = `Player ${a}`;

    computerScore.textContent = `Computer ${b}`;

}


function declareWinner(a,b){
    if (a === 5 || b === 5) {
        if (a>b){                      
            audioVictory.play();
            modal.style.display = "block";
            modalHeader.textContent= "You won, you fantastic living being!"
            modalPara.textContent= "You have accomplished the things that most people can only dream of. You are a role model for everyone around you. Congratulations!";
            modalFooter.textContent = "Want to play again my Liege?";         
        }
        else {
            audioLoseGame.play();
            modalHeader.textContent= "Unfortunately you lost!";
            modalPara.textContent= "You learn more from losing than winning. You learn how to keep going.";
            modalFooter.textContent = "Play again?";
                     
        }
        modal.style.display = "block";
    }
}

let audioPlay = new Audio("sounds/tink.wav");
let audioWin = new Audio("sounds/win.wav");
let audioLoss = new Audio("sounds/loss.wav");
let audioVictory = new Audio("sounds/victory.wav");
let audioLoseGame = new Audio("sounds/losegame.mp3");
let audioTieGame = new Audio("sounds/tie.wav");

const Result = document.querySelector(".result");
let heading = document.getElementById("heading");
let footerHeading = document.getElementById("footer-heading");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

const selection = document.querySelectorAll("#rps");
selection.forEach(button => button.addEventListener("click", playSingleRound));

// Get the modal
let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal

span.addEventListener("click", closeWindow);


function closeWindow () {
    window.open('','_self').close();
}

function resetGame () {
  modal.style.display = "none";
  aPlayer = 0;
  bComputer =0;
  printResult(aPlayer,bComputer);
  heading.textContent = "First to score 5 points is the winner";
  footerHeading.textContent = "Warning❗ Sound involved❗";
  player.textContent = "❓";
  computer.textContent = "❓";

}

// Writing the Message on the modal
let modalHeader = document.getElementById("modal-header-h2");
let modalPara = document.getElementById("para");
let modalFooter = document.getElementById("modal-footer-h3");
let modalFoot = document.querySelector(".modal-footer");

modalFoot.addEventListener("click", resetGame);

