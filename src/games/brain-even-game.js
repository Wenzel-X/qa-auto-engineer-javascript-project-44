import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
