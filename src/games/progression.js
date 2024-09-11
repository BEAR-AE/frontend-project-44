import startGame from '../index.js';
import getRandomInt from '../getRandomInt.js';
import getRandomNumber from '../getRandomNumber.js';

const getLength = (startNumber, step, sequence) => {
  for (
    let i = 0, nextNumber = startNumber;
    i < 10;
    i += 1, nextNumber += step
  ) {
    sequence.push(nextNumber);
  }
};
const startProgression = () => {
  const noteToProgression = 'What number is missing in the progression?';

  const taskProgression = () => {
    const sequence = [];
    const lastIndex = 9;
    const getStep = () => {
      const necessaryStep = getRandomInt(lastIndex);
      return necessaryStep === 0 ? getStep() : necessaryStep;
    };
    const step = getStep();
    const getStartNumber = () => {
      const number = getRandomNumber();
      const limitNumber = number + step * lastIndex;

      if (limitNumber < getRandomNumber()) {
        return getStartNumber();
      }
      return number;
    };
    const startNumber = getStartNumber();
    getLength(startNumber, step, sequence);
    const randomIndex = getRandomInt(lastIndex);
    const replacedNumber = sequence[randomIndex];
    let result = replacedNumber;
    sequence[randomIndex] = '..';
    const question = sequence.join(' ');
    result = result.toString();
    return [question, result];
  };
  startGame(noteToProgression, taskProgression);
};
export default startProgression;
