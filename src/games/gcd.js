import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const calculateGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return calculateGcd(number2, number1 % number2);
};

const startGCD = () => {
  const noteToGcd = 'Find the greatest common divisor of given numbers.';
  const taskGcd = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const getGcd = calculateGcd;
    const question = `${number1} ${number2}`;
    const result = getGcd(number1, number2).toString();
    return [question, result];
  };
  startGame(noteToGcd, taskGcd);
};

export default startGCD;
