import readlineSync from 'readline-sync';

const startGame = (gameDescription, generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  const numberOfRounds = 3;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfRounds; i++) {
    const [question, correctAnswer] = generateQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
