game();
function computerPlay() {
    let myArray = ["rock", "paper", "scissors"];
    let computerChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return computerChoice;
}
function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "You Tied!";
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerWins++;
                return "You win! Rock beats Scissors!"
            }
        case "paper":
            if (computerSelection === "rock") {
                playerWins++;
                return "You win! Paper beats Rock!"
            }
        case "scissors":
            if (computerSelection === "paper") {
                playerWins++;
                return "You win! Scissors beats paper!"
            }
        default:
            computerWins++;
            return "You lost! " + computerSelection + "beats " + playerSelection;
    }
}
function game() {
    let playerSelection;
    playerWins = 0;
    let computerSelection;
    computerWins = 0;
    for(let rounds = 0; rounds < 5; rounds++) {
        playerSelection = prompt("Please Select from Rock, Paper, and Scissors");
        playerSelection.toLowerCase;
        if (playerSelection === "rock" || "paper" || "scissors") {
            computerSelection = computerPlay();
            if (playerSelection === computerSelection) {rounds--};
            console.log(singleRound(playerSelection,computerSelection));
            console.log("Player wins: " + playerWins  + " Computer wins: " + computerWins);
        } else {
            return "Invalid choice, please try again.";
        }
        if (rounds == 4 && playerWins > computerWins) {
            console.log("You won the match! Congrats!");
        } else {
            console.log("Computer wins this time! Try again soon!");
        }
    }
    return;
}