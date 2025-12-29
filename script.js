"use strict";

// Generate a random choice for the computer
const getComputerChoice = function () {
  const index = Math.floor(Math.random() * 3);
  const choice = "rps".at(index);

  if (choice === "r") return "rock";
  else if (choice === "p") return "paper";
  else return "scissors";
};

// Get human choice
const getHumanChoice = function () {
  return prompt(`Enter 'rock', 'paper', or 'scissors': `).toLowerCase();
};

// A single round of the game
const playRound = function (humanChoice, computerChoice) {
  const win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");
  const lose =
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper");

  if (win) {
    console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
    return `player`;
  } else if (lose) {
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    return `computer`;
  } else {
    console.log(`This round is a tie!`);
    return `tie`;
  }
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  while (round <= 5) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === `player`) humanScore++;
    else if (result === `computer`) computerScore++;

    round++;
  }

  if (humanScore > computerScore) {
    console.log(`You won! ${humanScore} vs ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You Lose! ${humanScore} vs ${computerScore}`);
  } else console.log(`It's a tie`);
};

playGame();
