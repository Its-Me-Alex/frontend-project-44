import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const getRandomInt = (maxNumber) => Math.floor(Math.random() * (maxNumber + 1));

const displayGameRules = (text) => {
  console.log(text);
};

const displayEndMessage = (bool, userName) => {
  const playerWon = bool;
  const winMessage = `Congratulations, ${userName}!`;
  const loseMessage = `Let's try again, ${userName}!`;
  if (playerWon === true) {
    console.log(winMessage);
  } else {
    console.log(loseMessage);
  }
};

const displayRightAnswerMessage = () => {
  const message = 'Correct!';
  console.log(message);
};

const displayWrongAnswerMessage = (correctAnswer, userAnswer) => {
  const message = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(message);
};

const isAnswerCorrect = (correctAnswer, userAnswer) => userAnswer === correctAnswer;

const displayQuestion = (problem) => {
  const question = 'Question: ';
  console.log(question + problem);
};

const askUserAnswer = () => {
  const promt = 'Your answer: ';
  const userAnswer = readlineSync.question(promt);
  return userAnswer;
};

const gameLoop = (playGameRound, roundsCount) => {
  for (let i = 0; i < roundsCount; i += 1) {
    const correctAnswer = playGameRound();
    const userAnswer = askUserAnswer();
    if (isAnswerCorrect(correctAnswer, userAnswer)) {
      displayRightAnswerMessage();
    } else {
      displayWrongAnswerMessage(correctAnswer, userAnswer);
      const playerWon = false;
      return playerWon;
    }
  }
  const playerWon = true;
  return playerWon;
};

const playGame = (gameData) => {
  const userName = greetUser();
  displayGameRules(gameData.rules);
  const roundsCount = 3;
  const gameResult = gameLoop(gameData.playRound, roundsCount);
  displayEndMessage(gameResult, userName);
};

export { playGame, displayQuestion, getRandomInt };
