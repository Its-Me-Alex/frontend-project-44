import { playGame, displayQuestion, getRandomInt } from '../index.js';

const generateGameQuestion = () => {
  const maxNumber = 100;
  const problem = getRandomInt(maxNumber);
  return problem;
};

const isEven = (number) => number % 2 === 0;

const playBrainEvenRound = () => {
  const question = generateGameQuestion();
  const number = question;
  displayQuestion(question);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return correctAnswer;
};

const gameData = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  playRound: playBrainEvenRound,
};

export default () => playGame(gameData);
