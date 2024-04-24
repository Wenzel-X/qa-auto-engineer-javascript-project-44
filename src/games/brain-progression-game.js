import runGame from '../index.js';
import getRandomInt from '../randomNumber.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i +=1) {
    const result = (firstElement + (step * i));
    progression.push(result);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomInt(1, 20);
  const step = getRandomInt(2, 10);
  const length = getRandomInt(5, 10);
  const replacedElement = getRandomInt(0, length - 1);
  const progression = generateProgression(firstNum, step, length);

  const correctAnswer = `${progression[replacedElement]}`;
  progression[replacedElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runGame(description, getQuestionAndAnswer);
