
let btnRock = document.querySelector('.rock'); // rock select
let btnPaper = document.querySelector('.paper'); // paper select
let btnScissors = document.querySelector('.scissors'); // scissors select

let rockPaperScissors = document.querySelectorAll('button');

let computerChoice = getComputerChoice();

let playerEmoji = document.querySelector('.playerResult > h2');

let computerEmoji = document.querySelector('.computerResult > h2');



let winScore = 0;
let loseScore = 0;
let drawScore = 0;





rockPaperScissors.forEach((button) => {
    button.addEventListener('click', () => {
        




        if (button.className === 'rock') {
            playerEmoji.textContent = '👊';
        }   else if (button.className === 'paper') {
            playerEmoji.textContent = '✋';
        }   else {
            playerEmoji.textContent = '✌️';
        }



        if (computerChoice === 'ROCK') {
            computerEmoji.textContent = '👊';
        }   else if (computerChoice === 'PAPER') {
            computerEmoji.textContent = '✋';
        }   else {
            computerEmoji.textContent = '✌️';
        }
        




        let fullMessage = playRound(button.className, computerChoice);
        console.log(fullMessage);

        let messageDisplayTop = document.querySelector('#resultMessage > h2');
        messageDisplayTop.textContent = fullMessage.substring(0, fullMessage.indexOf('!') + 1);

        let messageDisplayBottom = document.querySelector('#resultMessage > p');
        messageDisplayBottom.textContent = fullMessage.substring(fullMessage.indexOf('!') + 1);


        if (fullMessage.search("Won!") > -1) {
            winScore++;
        } else  if (fullMessage.search("Lose!") > -1) {
            loseScore++;
        } else {
            drawScore++;
        }

        


        // Display number update
        let playerNumberDisplay = document.querySelector('.playerResult > p > span');
        let computerNumberDisplay = document.querySelector('.computerResult > p > span');

        playerNumberDisplay.textContent = winScore;
        computerNumberDisplay.textContent = loseScore;

        
        // let yourScoreDisplay = document.querySelector('.yourRealtimeResult');
        // yourScoreDisplay.textContent = `Your score is: ${winScore} `;

        // let computerScoreDisplay = document.querySelector('.computerRealtimeResult');
        // computerScoreDisplay.textContent = `Computer score is: ${loseScore} `;
        

        
        // console.log(`Your score is ${winScore} `);
        // console.log(`Computer score is ${loseScore} `);
        let modalMessage;
        if (winScore === 5 || loseScore === 5) {
            if (winScore > loseScore) {
                modalMessage = `You WON!👏`;
            } else  {
                modalMessage = `You LOSE!`;
            }

            let popUpMessage = document.querySelector('.popUpMessage');
            popUpMessage.textContent = modalMessage;

            let modal = document.querySelector('#modal');
            modal.showModal();

            
        };

        



        // let finalResult = document.querySelector('.popUpMessage');
        // finalResult.textContent = modalMessage;

        // let modal = document.querySelector('#modal');




    });
});



// modal close
    let closePopUp = document.querySelector('.closePopUp');
    closePopUp.addEventListener('click', () => {
        modal.close();
        location.reload();

    });
    










// let resultDom = btnRock.addEventListener('click', () => {
//     let output = playRound('rock', computerSelection);
//     console.log(output);


//     let message = document.querySelector('div');
//     message.textContent = output;
// });





// function for computer to return randomly 'rock', 'paper', or 'scissors'.
function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3);

    if (computerRandom === 0) {
        return "ROCK";
    } else if (computerRandom === 1) {
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

    let tie = `It's a tie! ${playerSelection.toUpperCase()} ties with ${computerSelection}`;
    let win = `You Won! ${playerSelection.toUpperCase()} beats ${computerSelection}`;
    let lose = `You Lose! ${computerSelection} beats ${playerSelection.toUpperCase()}`;

    if (playerSelection.toUpperCase() === computerSelection) { //first check whether both are same.
        return tie; //when both are same the output is "DRAW".
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



