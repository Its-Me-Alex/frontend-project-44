import getRandomInt from '../helper.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateGameProblem = () => {
  const problem = [];
  const maxNumber = 100;
  const number1 = getRandomInt(maxNumber);
  const number2 = getRandomInt(maxNumber);
  problem.push(number1, number2);

  return problem;
};

const generateGameQuestion = (problem) => {
  const [number1, number2] = problem;
  const question = `${number1} ${number2}`;

  return question;
};

const isZero = (number) => {
  if (number === 0) {
    return true;
  }

  return false;
};

const determineStartNumber = (number1, number2) => {
  if (!isZero(number1) && number1 < number2) {
    return number1;
  }

  return number2;
};

const solveProblem = (problem) => {
  const [number1, number2] = problem;
  let solution = 0;
  const startNumber = determineStartNumber(number1, number2);
  let denominator = startNumber;

  for (let i = 0; i < startNumber; i += 1) {
    if (number1 % denominator === 0 && number2 % denominator === 0) {
      solution = denominator;
      return solution.toString();
    }
    denominator -= 1;
  }

  return solution.toString();
};

const getQuestionAndAnswer = () => {
  const problem = generateGameProblem();
  const question = generateGameQuestion(problem);
  const correctAnswer = solveProblem(problem);

  return [question, correctAnswer];
};

export default () => playGame(description, getQuestionAndAnswer);
