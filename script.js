let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess,computerGuess,targetNumber) => {

  let humanDiff = Math.abs(targetNumber- humanGuess);
  let computerDiff = Math.abs( targetNumber- computerGuess);
  if (humanDiff< computerDiff){
    return true;
  } else if (humanDiff>computerDiff){
    return false;
  } else if (humanDiff===computerDiff){
    return true;
  }
}


//score updater
const updateScore=()=>{
  if (compareGuesses===true){
    return humanScore += 1;   
  } else if (compareGuesses===false){
    return computerScore += 1; 
  }
}

function advanceRound() {
  return currentRoundNumber += 1
}



