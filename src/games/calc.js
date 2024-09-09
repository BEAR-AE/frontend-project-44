import startGame from "../index.js";
import getRandomInt from "../getRandomInt.js";
import getRandomNumber from "../getRandomNumber.js";

const startCalc = () => {
  const noteToCalc = "What is the result of the expression?";

  const taskCalc = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const signs = ["+", "-", "*"];
    const sign = signs[getRandomInt(signs.length)];

    const question = `${number1} ${sign} ${number2}`;

    let result = 0;
    switch (sign) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      default:
        result = null;
    }

    result = result.toString();

    return [question, result];
  };

  startGame(noteToCalc, taskCalc);
};

export default startCalc;
