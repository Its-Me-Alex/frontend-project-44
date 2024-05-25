import { playGame, displayQuestion, getRandomInt } from '../index.js';

const generateGameProblem = () => {
  const operators = ['+', '-', '*'];
  const operatorMaxIndex = 2;
  const maxNumber = 10;
  const problem = [];
  const operator = operators[getRandomInt(operatorMaxIndex)];
  const number1 = getRandomInt(maxNumber);
  const number2 = getRandomInt(maxNumber);
  problem.push(number1, operator, number2);
  return problem;
};

const generateGameQuestion = (problem) => {
  const [number1, operator, number2] = problem;
  const question = `${number1} ${operator} ${number2}`;

  return question;
};

const sovleProblem = (problem) => {
  const [number1, operator, number2] = problem;
  let solution = '';
  switch (operator) {
    case '+':
      solution = number1 + number2;
      break;
    case '-':
      solution = number1 - number2;
      break;
    case '*':
      solution = number1 * number2;
      break;
    default:
      console.log('swtich statement error: operator is not operator or not allowed');
  }

  return solution;
};

const playBrainCalcRound = () => {
  const problem = generateGameProblem();
  const question = generateGameQuestion(problem);
  displayQuestion(question);
  const correctAnswer = sovleProblem(problem).toString();
  return correctAnswer;
};

const gameData = {
  rules: 'What is the result of the expression?',
  playRound: playBrainCalcRound,
};

export default () => playGame(gameData);
