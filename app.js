const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {

    return choices[randomInterval(0, 2)];
}

function randomInterval(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock") {

        switch (computerSelection) {

            case "Rock":
                return "It's a draw! You both selected ROCK."
            
            case "Paper":
                return "You Lose! PAPER beats ROCK."
            
            case "Scissors":
                return "Good Job You Win! ROCK beats SCISSORS."
        }
    }

    if (playerSelection === "paper") {

        switch (computerSelection) {

            case "Paper":
                return "It's a draw! You both selected PAPER."
            
            case "Scissors":
                return "You Lose! SCISSORS beats PAPER."
            
            case "Rock":
                return "Good Job You Win! PAPER beats ROCK."
        }
    }

    if (playerSelection === "scissors") {

        switch (computerSelection) {

            case "Scissors":
                return "It's a draw! You both selected SCISSORS."
            
            case "Rock":
                return "You Lose! ROCK beats SCISSORS."
            
            case "Paper":
                return "Good Job You Win! SCISSORS beats PAPER."
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        const player = prompt("Input Rock, Paper or Scissors... ");
        const computer = computerPlay();

        console.log(playRound(player, computer));

    }
}

game();