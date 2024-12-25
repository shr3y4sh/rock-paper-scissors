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
