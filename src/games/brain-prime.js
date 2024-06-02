import getRandomInt from '../helper.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getQuestionAndAnswer = () => {
  const question = generateGameQuestion();
  const number = question;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => playGame(description, getQuestionAndAnswer);
