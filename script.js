/*
PSUEDOCODE:

1. user clicks on one button rock paper scissors
2. computer makes one random option on click
3. check the options and score user or computer
4. make outcome option, append it on html
5. if win => user++; loss => computer++ draw nothing;
*/

let user = {
  choice: "none",
  score: 0,
};

let computer = {
  choice: "none",
  score: 0,
};

let gameSection = document.querySelector("#choice");
let choiceButtons = document.querySelector("#option");
let scoreList = document.querySelector("#score-list");

const gameChoice = ["Rock", "Paper", "Scissors"];

choiceButtons.addEventListener("click", function (e) {
  user.choice = e.target.textContent;
  computer.choice = compChoice();

  document.querySelector("#user-choice").textContent =
    "YOU: " + user.choice.toUpperCase();
  document.querySelector("#computer-choice").textContent =
    "ME: " + computer.choice.toUpperCase();

  playRound(user, computer);
  displayScore(user, computer);

  if (user.score === 5 || computer.score === 5) {
    finalVerdict(user, computer);
  }
});

function compChoice() {
  const comp = Math.floor(Math.random() * 3);
  return gameChoice[comp];
}

function playRound(user, computer) {
  if (user.choice === computer.choice) {
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (user.choice === gameChoice[i]) {
      if (computer.choice === gameChoice[(i + 1) % 3]) {
        computer.score++;
      } else if (computer.choice === gameChoice[(i + 2) % 3]) {
        user.score++;
      }
    }
  }
}

function displayScore(user, computer) {
  const list = document.createElement("li");

  list.textContent = `YOUR SCORE: ${user.score}  MY SCORE: ${computer.score}`;
  scoreList.insertBefore(list, scoreList.childNodes[0]);
}

function finalVerdict(user, computer) {
  let victory;
  if (user.score > computer.score) {
    victory = "You Won! Congrats";
  } else {
    victory = "Alas, you lost this game";
  }
  const gameOver = document.createElement("h2");
  gameOver.textContent = "Game Over";

  const verdict = document.createElement("h3");
  verdict.textContent = victory;

  const playAgain = document.createElement("button");
  playAgain.setAttribute("type", "button");
  playAgain.textContent = "Play Again?";

  choiceButtons.remove();
  gameSection.appendChild(gameOver);
  gameSection.appendChild(verdict);
  gameSection.appendChild(playAgain);

  playAgain.addEventListener("click", () => {
    location.reload();
  });
}
