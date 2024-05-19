let humanScore = 0,
  computerScore = 0;
function getComputerChoice() {
  let computerChoice = " ";
  let random = Math.floor(Math.random() * 3) + 1;

  switch (random) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissor";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = "";
  let humanInput = prompt(
    "Enter your choice: 1 for Rock, 2 for Paper, 3 for Scissor"
  );
  if (humanInput == null || humanInput < 1 || humanInput > 3) {
    alert("Invalid Choice, Enter number between 1 to 3");
  } else {
    switch (parseInt(humanInput)) {
      case 1:
        humanChoice = "rock";
        break;
      case 2:
        humanChoice = "paper";
        break;
      case 3:
        humanChoice = "scissor";
    }
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice, currentRound) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == "rock" && computerChoice == "scissor") {
    console.log(`Round ${currentRound} You win!!! Rock beats Scissor`);
    humanScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log(`Round ${currentRound} You win!!! Paper beats Rock`);
    humanScore += 1;
  } else if (humanChoice == "scissor" && computerChoice == "paper") {
    console.log(`Round ${currentRound} You win!!! Scissor beats Paper`);
    humanScore += 1;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log(`Round ${currentRound} You lose! Paper beats Rock`);
    computerScore += 1;
  } else if (humanChoice == "paper" && computerChoice == "scissor") {
    console.log(`Round ${currentRound} You lose! Scissor beats Paper`);
    computerScore += 1;
  } else if (humanChoice == "scissor" && computerChoice == "rock") {
    console.log(`Round ${currentRound} You lose! Rock beats Scissor`);
    computerScore += 1;
  } else console.log(`Round ${currentRound} It's a tie!`);
}

function playGame() {
  let currentRound = 1;
  while (currentRound <= 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if (humanChoice != "") {
      playRound(humanChoice, computerChoice, currentRound);
      currentRound += 1;
    }
  }
  console.log("Game Over!!!!");
  if (humanScore > computerScore) {
    alert("You Win!!!!!");
  } else alert("Computer wins!");
}

playGame();
