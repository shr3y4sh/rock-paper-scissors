console.log("Hello World!");

const gameChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

let winHumanOrComputer;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  return gameChoices[computerChoice];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Pick one from 'Rock' 'Paper' and 'Scissors'.");
  return humanChoice.toLowerCase();
}

function playRound(human, computer) {
  if (human === computer) {
    console.log(`Draw! You both chose ${human}`);
    winHumanOrComputer = "none";
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (human === gameChoices[i]) {
      if (computer === gameChoices[(i + 1) % 3]) {
        console.log(`Loss! ${computer} beats ${human}`);
        winHumanOrComputer = "computer";
        return;
      } else if (computer === gameChoices[(i + 2) % 3]) {
        console.log(`Win! ${human} beats ${computer}`);
        winHumanOrComputer = "human";
        return;
      }
    }
  }
}

// console.log(getHumanChoice());

function playGame() {
  console.log(`Let's play Rock-Paper-Scissors.`);

  while (humanScore !== 5 && computerScore !== 5) {
    human = getHumanChoice();
    computer = getComputerChoice();

    if (human !== "rock" && human !== "paper" && human !== "scissors") {
      console.log("Please enter a choice between rock paper or scissors");
      continue;
    } else {
      playRound(human, computer);

      switch (winHumanOrComputer) {
        case "human":
          humanScore++;
          break;

        case "computer":
          computerScore++;
          break;
      }
    }

    console.log(`SCORES => Human: ${humanScore} | Computer: ${computerScore}`);
  }

  if (winHumanOrComputer === "human") {
    console.log("CONGRATS! You won the game!");
  } else if (winHumanOrComputer === "computer") {
    console.log("Too bad, you lose.");
  }
}
