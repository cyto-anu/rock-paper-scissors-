// returns computer choice as string;
function getComputerChoice () {
    let randomNumber = Math.random();
    if (randomNumber < (1/3)){
        return "rock";
    } if (randomNumber > (2/3)){
        return "scissors";
    } else {
        return "paper";
    };
};

// returns user prompt input as string
function getHumanChoice () {
    let humanPrompt = prompt();
    return humanPrompt;
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
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
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