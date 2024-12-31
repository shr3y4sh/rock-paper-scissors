/*
PSUEDOCODE:

1. user clicks on one button rock paper scissors
2. computer makes one random choice on click
3. check the choices and score user or computer
4. make outcome choice, append it on html
5. if win => user++; loss => computer++ draw nothing;
*/

let user = {
  name: "YOU",
  score: 0,
};

let computer = {
  name: "I",
  score: 0,
};

let choice = document.querySelector("#option");
let scoreList = document.querySelector("#score-list");
let final = document.querySelector("#final");

const gameChoices = ["Rock", "Paper", "Scissors"];

choice.addEventListener("click", function (e) {
  user.choice = e.target.textContent;
  computer.choice = computerChoice();

  document.querySelector("#user-choice").textContent =
    "YOU: " + user.choice.toUpperCase();
  document.querySelector("#computer-choice").textContent =
    "ME: " + computer.choice.toUpperCase();

  playRound(user, computer);
  displayScore(user, computer);

  if (user.score === 5 || computer.score === 5) {
    const winner = scoreEval(user, computer);
    const verdict = document.createElement("h1");
    verdict.textContent = "GAME OVER";
    final.insertBefore(verdict, scoreList);
    verdict = document.createElement("h2");
    verdict.textContent = `${winner.name} WON`;
    final.insertBefore(verdict, scoreList);
    choice.remove();
  }
});

function scoreEval(user, computer) {
  if (user.score > computer.score) {
    return user;
  } else if (user.score < computer.score) {
    return computer.textContent;
  }
}

function computerChoice() {
  const comp = Math.floor(Math.random() * 3);
  return gameChoices[comp];
}

function playRound(user, computer) {
  console.log("round played");
  console.log(user.choice);
  console.log(computer.choice);

  if (user.choice === computer.choice) {
    return;
  }

  for (let i = 0; i < 3; i++) {
    if (user.choice === gameChoices[i]) {
      if (computer.choice === gameChoices[(i + 1) % 3]) {
        computer.score++;
      } else if (computer.choice === gameChoices[(i + 2) % 3]) {
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
