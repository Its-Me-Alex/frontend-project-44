import getRandomInt from '../helper.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateGameProblem = () => {
  const maxStartNumber = 100;
  const startNumber = getRandomInt(maxStartNumber);
  const maxCommonDifference = 10;
  const minLength = 5;
  const optionalVariableLength = getRandomInt(5);
  const progressionLength = minLength + optionalVariableLength;
  const commonDifference = getRandomInt(maxCommonDifference);
  const progression = [];
  let nextNumber = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    nextNumber = startNumber + commonDifference * i;
    progression.push(nextNumber);
  }

  return progression;
};

const generateQuestionString = (problemArray) => {
  const elements = problemArray;
  let string = '';
  let question = '';
  for (let i = 0; i < elements.length; i += 1) {
    string += `${elements[i]} `;
  }
  question = string.slice(0, -1);

  return question;
};

const getQuestionAnswerPair = (progressionArray) => {
  const output = [];
  const elements = progressionArray;
  const emptyElement = '..';
  let solution = 0;
  const pickRandomIndex = getRandomInt(elements.length - 1);

  solution = elements[pickRandomIndex].toString();
  elements[pickRandomIndex] = emptyElement;
  const question = generateQuestionString(elements);
  output.push(question, solution);

  return output;
};

const getQuestionAndAnswer = () => {
  const problem = generateGameProblem();
  const [question, correctAnswer] = getQuestionAnswerPair(problem);

  return [question, correctAnswer];
};

export default () => playGame(description, getQuestionAndAnswer);
