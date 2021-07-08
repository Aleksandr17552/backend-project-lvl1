import Gcd from '../constructor/gcd.js';

export default () => {
  const numberGames = 3;
  const showMessage = (message) => console.log(message);

  showMessage('Welcome to the Brain Games!');
  Gcd.setName(Gcd.askQuestion('May I have your name?'));
  showMessage(`Hello, ${Gcd.getName()}!`);

  showMessage('Find the greatest common divisor of given numbers.');

  const question = () => {
    const expression = Gcd.generateExpression();
    showMessage(`Question: ${expression[0]} ${expression[1]}`);
    Gcd.askQuestion('Your answer:');
  };

  while (Gcd.getCount() < numberGames) {
    question();
    if (Gcd.checkExpression()) {
      showMessage('Correct!');
      Gcd.incrementCount();
    } else {
      showMessage(`'${Gcd.getAnswer()}' is wrong answer ;(. Correct answer was '${Gcd.correctExpression()}'.`);
      break;
    }
  }

  if (Gcd.getCount() === numberGames) {
    showMessage(`Congratulations, ${Gcd.getName()}!`);
  } else {
    showMessage(`Let's try again, ${Gcd.getName()}!`);
  }
};
