import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number !== 1;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
