console.log("Hello World!");

let gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  return gameChoices[computerChoice];
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice = prompt("Pick one from 'Rock' 'Paper' and 'Scissors'.");
  return humanChoice.toLowerCase();
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let winHumanOrComputer;

let gameOutcomes = ["lose", "win", "draw"];
