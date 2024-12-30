/*
PSUEDOCODE:

1. user clicks on one button rock paper scissors
2. computer makes one random choice on click
3. check the choices and score user or computer
*/

let user, computer;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let userScore, computerScore;
let choice = document.querySelector("#option");
const gameChoices = [rock, paper, scissors];

choice.addEventListener("click", function (e) {
  const option = e.target;
  const computer = computerChoice();
});

function computerChoice() {
  const comp = Math.floor(Math.random() * 3);
  return gameChoices[comp];
}

function playRound(user, computer) {
  if (user === computer) {
    return "draw";
  }

  for (let i = 0; i < 3; i++) {
    if (user === gameChoices[i]) {
      if (computer === gameChoices[(i + 1) % 3]) {
        console.log(`Loss! ${computer} beats ${user}`);
        return "computer";
      } else if (computer === gameChoices[(i + 2) % 3]) {
        console.log(`Win! ${user} beats ${computer}`);
        return "user";
      }
    }
  }
}
