import readlineSync from 'readline-sync';

const askNameAndGreet = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default askNameAndGreet;
