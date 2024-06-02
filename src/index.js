import readlineSync from 'readline-sync';

export const countRounds = 3;

export default (description, getQuestionAndAnswer) => {
  // приветствуем игрока и записываем имя
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // выводим описание игры
  console.log(description);

  // запускаем цикл раундов
  for (let i = 0; i < countRounds; i += 1) {
    // принимаем деструктуризацию вопроса и правильного ответа
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`); // записываем ответ пользователя
    const userAnswer = readlineSync.question('You answer: '); // проверяем совпадает ли ответ юзера и правильный ответ
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
