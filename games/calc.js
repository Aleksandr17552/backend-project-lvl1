import Calc from '../constructor/calc.js';

export default () => {
  const showMessage = (message) => console.log(message);

  showMessage('Welcome to the Brain Games!');
  Calc.setName(Calc.askQuestion('May I have your name?'));
  showMessage(`Hello, ${Calc.getName()}!`);

  showMessage('What is the result of the expression?');

  const question = () => {
    const expression = Calc.generateExpression();
    showMessage(`Question: ${expression}`);
    Calc.askQuestion('Your answer:');
  };

  while (Calc.getCount() < 3) {
    question();
    if (Calc.checkExpression()) {
      showMessage('Correct!');
      Calc.incrementCount();
    } else {
      showMessage(`'${Calc.getAnswer()}' is wrong answer ;(. Correct answer was '${Calc.correctExpression()}'.`);
      break;
    }
  }

  if (Calc.getCount() === 3) {
    showMessage(`Congratulations, ${Calc.getName()}!`);
  } else {
    showMessage(`Let's try again, ${Calc.getName()}!`);
  }
};
