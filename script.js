"use strict";

const bodyEl = document.querySelector("body");
const container = document.createElement("div");
container.style.cssText = `
  max-width: 65%;
  height: 75vh; 
  margin: 70px auto;
  background: #000;
  color: #fff;
  font-family: "Roboto", san-serif;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 1px 10px 4px #000;
`;
bodyEl.appendChild(container);

const scoreBox = document.createElement("div");
const scoreBoxEls = `
  <p>Player: <span class='player-score'>0</span></p>
  <p>Computer: <span class='computer-score'>0</span></p>
`;
scoreBox.innerHTML = scoreBoxEls;
scoreBox.style.cssText = `
  padding: 30px 50px;
  margin-bottom: 20px;
`;

const buttons = document.createElement("div");
const btns = `
  <button class='btn'>ROCK</button>
  <button class='btn'>PAPER</button>
  <button class='btn'>SCISSORS</button>
`;
buttons.innerHTML = btns;
buttons.style.cssText = `
  max-width: 40%;
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const choiceBox = document.createElement("div");
const choiceText = `
  <p>You choose <span class='player-choice'>ROCK</span></p>
  <p>Computer choose <span class='computer-choice'>ROCK</span></p>
  <p class='result'>It's a tie!<p>
`;
choiceBox.innerHTML = choiceText;
choiceBox.style.cssText = `
  font-size: 22px;
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

container.append(scoreBox, buttons, choiceBox);

const buttonEls = document.querySelectorAll(".btn");
buttonEls.forEach((btn) => {
  btn.style.cssText = `
    font-family: inherit;
    font-size: 20px;
    border: none;
    padding: 10px 20px;
    border-radius: 7px;
    cursor: pointer;
`;
});

const resultEl = document.querySelector(".result");
resultEl.style.cssText = `
  padding: 10px 25px;
`;

const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");

let playerScore = 0;
let computerScore = 0;
const WIN_SCORE = 5;

const getPlayerChoice = function (btn) {
  playerChoice.textContent = btn.textContent;
  return playerChoice.textContent;
};

const getComputerChoice = function () {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) computerChoice.textContent = "ROCK";
  else if (choice === 1) computerChoice.textContent = "PAPER";
  else computerChoice.textContent = "SCISSORS";

  return computerChoice.textContent;
};

const playRound = function (playerChoice, computerChoice) {
  const win =
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER");

  if (win) {
    resultEl.textContent = `YOU WON`;
    resultEl.style.background = "green";
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (playerChoice === computerChoice) {
    resultEl.textContent = `DRAW`;
    resultEl.style.background = "#888";
  } else {
    resultEl.textContent = `YOU LOSE`;
    resultEl.style.background = "red";
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }

  choiceBox.style.display = "flex";
};

buttonEls.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (playerScore < WIN_SCORE && computerScore < WIN_SCORE) {
      const playerChoice = getPlayerChoice(btn);
      const computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
    }
  });
});
