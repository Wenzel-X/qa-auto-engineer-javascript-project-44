import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
