import Progression from '../constructor/progression.js';

export default () => {
  const numberGames = 3;
  const showMessage = (message) => console.log(message);

  showMessage('Welcome to the Brain Games!');
  Progression.setName(Progression.askQuestion('May I have your name?'));
  showMessage(`Hello, ${Progression.getName()}!`);

  showMessage('What number is missing in the progression?');

  const question = () => {
    const expression = Progression.generateExpression();
    showMessage(`Question: ${expression.join(' ')}`);
    Progression.askQuestion('Your answer:');
  };

  while (Progression.getCount() < numberGames) {
    question();
    if (Progression.checkExpression()) {
      showMessage('Correct!');
      Progression.incrementCount();
    } else {
      showMessage(`'${Progression.getAnswer()}' is wrong answer ;(. Correct answer was '${Progression.correctExpression()}'.`);
      break;
    }
  }

  if (Progression.getCount() === numberGames) {
    showMessage(`Congratulations, ${Progression.getName()}!`);
  } else {
    showMessage(`Let's try again, ${Progression.getName()}!`);
  }
};
