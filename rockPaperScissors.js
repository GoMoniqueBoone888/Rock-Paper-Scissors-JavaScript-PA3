var playerSelection;
var computerSelection;

playerSelection = window.prompt("Welcome to the Game! Please choose Rock, Paper or Scissors");
console.log(playerSelection);

function getComputerSelection() {
  // your code here to determine whether playerSelection or computerSelection wins!
  const computerSelection= () => {
    const randomNumber = (Math.floor(Math.random() * 3))
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
  console.log(computerSelection());
  
}



function playRound(playerSelection, computerSelection) {
   console.log("Game On!");

  if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
     console.log("It's a draw! You both win"); 
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
     console.log("Rock beats scissors! You lose ");
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
     console.log("Rock beats scissors! You win");
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
     console.log("Scissors beats paper! You lose ");
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
     console.log("Scissors beats paper! You win");
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
     console.log("Paper beats rock! You lose");
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
     console.log("Paper beats rock! You win");
     return(`Your Choice: ${playerSelection}Computer: ${computerSelection}`);
  } else {
     console.log("I'm not sure what happened, but something went wrong. Please try again");
  }
}



function game() {
  //Play game 3 times
  for (let i = 0; i < 3; i++) {
    // from the playerPlay and computerPlay functions and log to console
    console.log(playRound(playerPlay(), computerPlay()));
  }
}