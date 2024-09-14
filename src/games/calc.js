import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const toCalc = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (sign, number1, number2) => {
  switch (sign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Incorrect answer');
  }
};

const startCalc = () => {
  const noteToCalc = toCalc;

  const taskCalc = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const sign = operators[getRandomNumber(operators.length)];

    const result = calculate(sign, number1, number2);
    const question = `${number1} ${sign} ${number2}`;

    return [question, result.toString()];
  };

  startGame(noteToCalc, taskCalc);
};

export default startCalc;
