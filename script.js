function computerPlay() {
    let picklist = ["rock", "paper", "scissors"];
    return picklist[0];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("Tie! No points For both");
        return "";
    }
    else if (playerSelection   == "rock" &&
         computerSelection == "paper") {
        console.log("Computer chose 'Paper': You loose.");
        return "computer";
    }
    else if (playerSelection   == "rock" &&
         computerSelection == "scissors") {
        console.log("Computer chose 'Scissors': This round goes to you!");
        return "player";
    }
    else if (playerSelection   == "paper" &&
             computerSelection == "rock") {
        console.log("Computer chose 'Rock': This round goes to you!");
        return "player";
    }
    else if (playerSelection   == "paper" &&
         computerSelection == "scissors") {
        console.log("Computer chose 'Scissors': You loose.");
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
         computerSelection == "rock") {
        console.log("Computer chose 'Rock': You loose.");
        return "computer";
    }
    else if (playerSelection   == "scissors" &&
         computerSelection == "paper") {
        console.log("Computer chose 'Paper': This round goes to you!");
        return "player";
    }
    else {
        console.log("Error. This state should not happen\n" +
                "Player: {playerState}\n" +
                "Computer: {computerState}");
    
}

function game() {
    let playerScore   = 0;
    let computerScore = 0;
    
    var i;
    for (i = 0; i < 5; i++) {
        let playerSelection   = null;
        let computerSelection = computerPlay();
        
        while (playerSelection = !window.prompt("Do you choose 'Rock', 'Paper' or 'Scissors'?")) {
            console.log("Please choose one of the three");
        }

        let roundWinner = playRound();

        if      (roundWinner == "player")   playerScore++;
        else if (roundWinner == "computer") computerScore++;
        
    }

    console.log("You have won {playerScore} Rounds.");
    console.log("The computer won {computerScore} Rounds.");
}