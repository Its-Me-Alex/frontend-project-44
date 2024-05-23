import { playGame, displayQuestion, getRandomInt } from '../index.js';

const generateProblem = () => {
  const maxNumber = 100;
  const problem = getRandomInt(maxNumber);
  return problem;
};

const isEven = (number) => number % 2 === 0;

const gameLogic = () => {
  const number = generateProblem();
  const problem = number;
  displayQuestion(problem);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return correctAnswer;
};

const gameData = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  logic: gameLogic,
};

export default () => playGame(gameData);
