import startGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const evenGame = () => {
  const noteToEven =
    'Answer "yes" if the number is even, otherwise answer "no".';

  const taskEven = () => {
    const number = getRandomNumber();

    const isEven = (number) => number % 2 === 0;

    const question = `${number}`;
    const result = isEven(number) ? "yes" : "no";

    return [question, result];
  };

  startGame(noteToEven, taskEven);
};

export default evenGame;
