import Prime from '../constructor/prime.js';

export default () => {
  const numberGames = 3;
  const showMessage = (message) => console.log(message);

  showMessage('Welcome to the Brain Games!');
  Prime.setName(Prime.askQuestion('May I have your name?'));
  showMessage(`Hello, ${Prime.getName()}!`);

  showMessage('Answer "yes" if given number is prime. Otherwise answer "no".');

  const question = () => {
    const expression = Prime.generateExpression();
    showMessage(`Question: ${expression}`);
    Prime.askQuestion('Your answer:');
  };

  while (Prime.getCount() < numberGames) {
    question();
    if (Prime.checkExpression()) {
      showMessage('Correct!');
      Prime.incrementCount();
    } else {
      showMessage(`'${Prime.getAnswer()}' is wrong answer ;(.`);
      break;
    }
  }

  if (Prime.getCount() === numberGames) {
    showMessage(`Congratulations, ${Prime.getName()}!`);
  } else {
    showMessage(`Let's try again, ${Prime.getName()}!`);
  }
};
