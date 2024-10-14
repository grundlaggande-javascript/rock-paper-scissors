// Note this can be done via array that was covered later in the course.s
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1 or 2

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Please enter your choice (rock, paper, or scissors):");

  // Not required for your solution. But this is nice so it doesnt crash with a wrong input.
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid input. Please enter rock, paper, or scissors:");
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}

// Play 5 rounds
for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
}

// Declare the overall winner
console.log("Game Over!");
if (humanScore > computerScore) {
  console.log(
    `You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`
  );
} else if (computerScore > humanScore) {
  console.log(
    `You lose the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`
  );
} else {
  console.log(
    `It's a tie game! Final Score - You: ${humanScore}, Computer: ${computerScore}`
  );
}
