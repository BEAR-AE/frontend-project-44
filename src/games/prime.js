import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  let i = 2;
  while (i <= number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const startPrime = () => {
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const taskPrime = () => {
    const number = getRandomNumber();
    const isPrime = getPrimeNumber;
    const question = `${number}`;
    const result = isPrime(number) ? 'yes' : 'no';
    return [question, result];
  };
  startGame(noteToPrime, taskPrime);
};

export default startPrime;
