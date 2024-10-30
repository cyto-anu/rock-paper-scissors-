// returns computer choice as string;
function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber < (1/3)){
        computerChoice = "rock";
        return "rock";
    } if (randomNumber > (2/3)){
        computerChoice = "paper";
        return "scissors";
    } else {
        computerChoice = "scissors";
        return "paper";
    };
};


//globally declared scores to start the game
let humanScore = 0;
let computerScore = 0;

// logic to play one round and increment score
function playRound (humanChoice, computerChoice) {

    
    if ((humanChoice === "rock") && (computerChoice === "rock")) {
        console.log("its a tie! you both chose ROCK");
    } if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerScore++;
        console.log("you lost! paper beats ROCK");
    } if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        console.log("you won! ROCK beats scissors");

    } if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        console.log("you won! PAPER beats rock");
    }if ((humanChoice === "paper") && (computerChoice === "paper")) {
        console.log("its a tie! you both chose PAPER");
    }if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++;
        console.log("you lost! scissors beats PAPER");

    }if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        humanScore++;
        console.log("you won! SCISSORS beats rock");
    }if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        computerScore++;
        console.log("you lost! paper beats SCISSORS");
    }if ((humanChoice === "scissors") && (computerChoice === "scissors")) {
        console.log("its a tie! you both chose SCISSORS");
    };

    console.log(`you: ${humanScore}`);
    console.log(`computer: ${computerScore}`);

    
};



function playGame () {
    playRound(humanChoice,getComputerChoice());
    playRound(humanChoice,getComputerChoice());
    playRound(humanChoice,getComputerChoice());
    playRound(humanChoice,getComputerChoice());
    playRound(humanChoice,getComputerChoice());
};

function whoWon () {
    playGame();
    if (humanScore>computerScore){
        console.log("YOU WIN THE GAME!");
    } if (computerScore>humanScore) {
        console.log("YOU LOSE THE GAME!")
    } if (humanScore === computerScore) {
        console.log("YOUVE TIED THE GAME!")
    };
};

///event listeners below

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const scoreDiv = document.querySelector(".score");

const picks = document.querySelector(".picks");

function gameOver () {
    if (humanScore == 5) {
        console.log("human wins!");
        scoreDiv.textContent = "YOU WIN!!! " + "You: " + humanScore + " Computer: " + computerScore;
        humanScore = 0;
        computerScore = 0;
        } if (computerScore == 5) {
            console.log("computer wins!");
            scoreDiv.textContent = "COMPUTER WINS!!! " + "You: " + humanScore + " Computer: " + computerScore;
            humanScore = 0;
            computerScore = 0;

        };
};

rockBtn.addEventListener("click", (e)=> {
    humanChoice = "rock";
    playRound(humanChoice,getComputerChoice());
    picks.textContent = "You chose: " + humanChoice + " and the computer chose: " + computerChoice;
    scoreDiv.textContent = "You: " + humanScore + " Computer: " + computerScore;
    gameOver ();

});

paperBtn.addEventListener("click", (e)=> {
    humanChoice = "paper";
    playRound(humanChoice,getComputerChoice());
    picks.textContent = "You chose: " + humanChoice + "and the computer chose: " + computerChoice;
    scoreDiv.textContent = "You: " + humanScore + " Computer: " + computerScore;
    gameOver ();
});

scissorsBtn.addEventListener("click", (e)=> {
    humanChoice = "scissors";
    playRound(humanChoice,getComputerChoice());
    picks.textContent = "You chose: " + humanChoice + + "and the computer chose: " + computerChoice;
    scoreDiv.textContent = "You: " + humanScore + " Computer: " + computerScore;
    gameOver ();
});
