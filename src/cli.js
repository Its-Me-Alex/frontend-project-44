import readlineSync from 'readline-sync';

const displayWelcomeMessage = () => {
  const message = 'Welcome to the Brain Games!';
  console.log(message);
};

const getUserName = () => {
  const promt = 'May I have your name? ';
  const userName = readlineSync.question(promt);
  return userName;
};

const greetByUserName = (name) => {
  const userName = name;
  const greeting = `Hello, ${userName}!`;
  console.log(greeting);
};

const greetUser = () => {
  displayWelcomeMessage();
  const userName = getUserName();
  greetByUserName(userName);
  return userName;
};

export default greetUser;
