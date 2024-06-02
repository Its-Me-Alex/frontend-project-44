import getRandomInt from '../helper.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const maxNumber = 100;
  const number = getRandomInt(maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();

  return [question, correctAnswer];
};

export default () => playGame(description, getQuestionAndAnswer);
