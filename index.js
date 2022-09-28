console.log("hello world!");


// function for computer to return randomly 'rock', 'paper', or 'scissors'.
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "ROCK";
    } else if (computerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }

}


// function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    /*return a string that declares the winner of the round like so:
    "You Lose! Paper beats Rock"*/

    let draw = "Draw! both are same";
    let win = `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    let lose = `You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`;

    if (playerSelection.toUpperCase() === computerSelection) { //first check whether both are same.
        return draw; //when both are same the output is "DRAW".
    } else {
        if (playerSelection.toUpperCase() === "ROCK") { //when user is ROCK.
            if (computerSelection === "SCISSORS") {
                return win;
            } else {
                return lose;
            }   
        } else if (playerSelection.toUpperCase() === "PAPER") { //when user is PAPER.
            if (computerSelection === "ROCK") {
                return win;
            } else {
                return lose;
            }
        } else { //when user is SCISSORS.
            if (computerSelection === "PAPER") {
                return win;
            } else {
                return lose;
            }

        }
    }

}



function game() {
        let winScore = 0;
        let loseScore = 0;
        let drawScore = 0;

    for (let i = 0; i < 5; i++) { //play a 5 round game
        let playerSelection = prompt("Enter any one -> Rock, Paper or Scissors?"); //USER input

        console.log("Game " + (i + 1) + ". You choose: " + playerSelection);
       

        let result = playRound(playerSelection, computerSelection);
        console.log(result);
            
            if (result.search("Won!") > -1) {
                winScore++;
            } else  if (result.search("Lose!") > -1) {
                loseScore++;
            } else {
                drawScore++;
            }
    }


    console.log(`Your score is ${winScore} `);
    console.log(`Computer score is ${loseScore} `);
    console.log(`No of draws ${drawScore}`);
    
    if (winScore > loseScore) {
        console.log("Hurray!! You Won the MATCH!!!!");
    } else if (winScore < loseScore) {
        console.log("You Lose this match! Try again next time.");
    } else {
        console.log("It's a tie match")
    }
}

const computerSelection = getComputerChoice(); // computer choice call
