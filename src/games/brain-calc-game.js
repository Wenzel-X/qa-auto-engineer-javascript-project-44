import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'What is the result of the expression?';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandomInt(0, signs.length - 1)];
  return randomSign;
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Error!');
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
