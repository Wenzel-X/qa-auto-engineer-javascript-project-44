import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'What is the result of the expression?';

const getRandomSign = () => {
  const randomNumForSign = getRandomInt(0, 3);
  switch (randomNumForSign) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 20);
  const operator = getRandomSign();
  const num2 = getRandomInt(1, 20);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, operator, num2));
  return [question, correctAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
