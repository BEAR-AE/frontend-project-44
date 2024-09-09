import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const takeConditions = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => startGame(takeConditions, getQuestionAndAnswer);
