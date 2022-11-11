
var playerSelection;                                                                
var getComputerSelection;


//playerSelection = window.prompt("Welcome to the Game! Please choose Rock, Paper or Scissors");
//console.log(playerSelection);

function getComputerNumber(numOptions){
   var number;
   number = Math.random();
   //console.log(number);
   number = number*numOptions;
   //console.log(number);
   number = Math.floor(number);
   //console.log(number);
   return number;
};


function getComputerSelection() {
   var randomNumber;
   randomNumber = getComputerNumber(3);
   if (randomNumber === 0){
      return 'Rock';
    }
    else if (randomNumber === 1){
      return 'Paper';
    }
    else if (randomNumber === 2){
    return 'Scissors';
    }  
}



function playRound(playerSelection, getComputerSelection) {
   console.log("Game On!");

  if (getComputerSelection.toLowerCase() === playerSelection.toLowerCase()) {
     console.log("It's a draw! You both win"); 
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else if (getComputerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
     console.log("Rock beats scissors! You lose ");
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else if (getComputerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
     console.log("Rock beats scissors! You win");
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else if (getComputerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
     console.log("Scissors beats paper! You lose ");
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else if (getComputerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
     console.log("Scissors beats paper! You win");
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else if (getComputerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
     console.log("Paper beats rock! You lose");
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else if (getComputerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
     console.log("Paper beats rock! You win");
     return(`Your Choice: ${playerSelection}Computer: ${getComputerSelection}`);
  } else {
     console.log("I'm not sure what happened, but something went wrong. Please try again");
  }
}


getComputerSelection();
let computer = getComputerSelection();

function game() {
  //Play game 3 times
  for (let i = 0; i < 3; i++) {
    // from the playerSelection and getComputerSelection functions and log to console
    console.log(playRound(playerSelection(), getComputerSelection()));
  }
}