
let btnRock = document.querySelector('.rock'); // rock select
let btnPaper = document.querySelector('.paper'); // paper select
let btnScissors = document.querySelector('.scissors'); // scissors select

let rockPaperScissors = document.querySelectorAll('button');

let winScore = 0;
let loseScore = 0;
let drawScore = 0;

rockPaperScissors.forEach((button) => {
    button.addEventListener('click', () => {
        
        let output = playRound(button.className, getComputerChoice());
        console.log(output);

        let messageDisplay = document.querySelector('div');
        messageDisplay.textContent = output;

        if (output.search("Won!") > -1) {
            winScore++;
        } else  if (output.search("Lose!") > -1) {
            loseScore++;
        } else {
            drawScore++;
        }

        

        
        let yourScoreDisplay = document.querySelector('.yourRealtimeResult');
        yourScoreDisplay.textContent = `Your score is: ${winScore} `;

        let computerScoreDisplay = document.querySelector('.computerRealtimeResult');
        computerScoreDisplay.textContent = `Computer score is: ${loseScore} `;
        

        
        // console.log(`Your score is ${winScore} `);
        // console.log(`Computer score is ${loseScore} `);
        let lastMessage;
        if (winScore === 5 || loseScore === 5) {
            if (winScore > loseScore) {
                lastMessage = `Hurray!! You WON the game!`;
            } else  {
                lastMessage = `You LOSE the game! Try again next time.`;
            }
        };

        let finalResult = document.querySelector('.finalResult');
        finalResult.textContent = lastMessage;



    });
});












// let resultDom = btnRock.addEventListener('click', () => {
//     let output = playRound('rock', computerSelection);
//     console.log(output);


//     let message = document.querySelector('div');
//     message.textContent = output;
// });





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

// let computerSelection = getComputerChoice(); // computer choice call



// function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    /*return a string that declares the winner of the round like so:
    "You Lose! Paper beats Rock"*/
    console.log('Computer choice:', computerSelection);

    let draw = "Draw! both are same";
    let win = `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    let lose = `You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`;

    if (playerSelection.toUpperCase() === computerSelection) { //first check whether both are same.
        return draw; //when both are same the output is "DRAW".
    } else {
        if (playerSelection.toUpperCase() === "ROCK") { //when user is ROCK.
            console.log("You choose Rock");

            if (computerSelection === "SCISSORS") {
                return win;
            } else {
                return lose;
            }   
        } else if (playerSelection.toUpperCase() === "PAPER") { //when user is PAPER.
            console.log("You choose Paper");

            if (computerSelection === "ROCK") {
                return win;
            } else {
                return lose;
            }
        } else { //when user is SCISSORS.
            console.log("You choose Scissors");
            
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


        // let playerSelection = prompt("Enter any one -> Rock, Paper or Scissors?"); //USER input

        // console.log("Game " + (i + 1) + ". You choose: " + playerSelection);
       

        let result = playRound(playerSelection, computerSelection);
        // console.log(result);    
            if (result.search("Won!") > -1) {
                winScore++;
            } else  if (result.search("Lose!") > -1) {
                loseScore++;
            } else {
                drawScore++;
            }




    console.log(`Your score is ${winScore} `);
    console.log(`Computer score is ${loseScore} `);
    // console.log(`No of draws ${drawScore}`);
    
    // if (winScore > loseScore) {
    //     console.log("Hurray!! You Won the MATCH!!!!");
    // } else if (winScore < loseScore) {
    //     console.log("You Lose this match! Try again next time.");
    // } else {
    //     console.log("It's a tie match")
    // }
}



