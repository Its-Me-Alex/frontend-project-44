import { playGame, displayQuestion, getRandomInt } from '../index.js';

const generateGameQuestion = () => {
  const maxNumber = 20;
  const problem = getRandomInt(maxNumber);
  return problem;
};

const isPrime = (number) => {
  const primeNums0to20 = [2, 3, 5, 7, 11, 13, 17, 19];
  if (primeNums0to20.includes(number)) {
    return true;
  }
  return false;
};

const playBrainPrimeRound = () => {
  const question = generateGameQuestion();
  const number = question;
  displayQuestion(question);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return correctAnswer;
};

const gameData = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  playRound: playBrainPrimeRound,
};

export default () => playGame(gameData);
