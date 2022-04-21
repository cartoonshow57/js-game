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

    let player = 0;
    let computer = 0;

    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {

        button.addEventListener('click', () => {

            let text = playRound(button.value, computerPlay());

            if (text.startsWith("You Lose!")) computer++;
            else if (text.startsWith("Good Job")) player++;

            if (computer === 5 || player === 5) {

                let d1 = document.getElementsByClassName("score")[0];
                d1.innerHTML = "";

                let d2 = document.getElementsByClassName("res")[0];
                d2.innerHTML = "";

                let final = document.getElementsByClassName("final-res")[0];

                if (computer === 5) {

                    let text = document.createTextNode("You lost against a bot ROFLMAO\nReloading...");
                    final.appendChild(text);
                } else {

                    let text = document.createTextNode("Wow you best a computer!\nReloading...");
                    final.appendChild(text);
                }

                btns.forEach((button) => button.setAttribute("disabled", true));
                setTimeout(() => document.location.reload(), 2000);
            } else {

                let s1 = document.getElementById("player");
                let s2 = document.getElementById("computer");

                const t1 = document.createTextNode(player);
                s1.innerHTML = "";
                s1.appendChild(t1);

                const t2 = document.createTextNode(computer);
                s2.innerHTML = "";
                s2.appendChild(t2);

                const textNode = document.createTextNode(text);
                let div = document.getElementById("result");
                div.innerHTML = '';
                div.appendChild(textNode);
            }
        })
    })
}

game();