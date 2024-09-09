import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import getRandomInt from '../getRandomInt.js';

const takeConditions = 'What is the result of the expression?';

const toSigns = ['+', '-', '*'];

const getCalc = (a, b, sign) => {
  switch (sign) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      throw new Error('invalid expression');
  }
};

const getQuestionAndAnswer = () => {
  const firstValue = getRandomNumber();
  const secondVavue = getRandomNumber();
  const sign = toSigns[getRandomInt(0, toSigns.length - 1)];
  const question = `${firstValue} ${sign} ${secondVavue}`;
  const correctAnswer = getCalc(firstValue, secondVavue, sign).toString();
  return [question, correctAnswer];
};

export default () => startGame(getQuestionAndAnswer, takeConditions);
