import Even from '../constructor/even.js';

export default () => {
  const showMessage = (message) => console.log(message);

  showMessage('Welcome to the Brain Games!');
  Even.setName(Even.askQuestion('May I have your name?'));
  showMessage(`Hello, ${Even.getName()}!`);

  showMessage('Answer "yes" if the number is even, otherwise answer "no".');

  const question = () => {
    Even.generateNunber();
    showMessage(`Question: ${Even.getNunber()}`);
    Even.askQuestion('Your answer:');
  };

  while (Even.getCount() < 3) {
    question();
    if (Even.checkAnswer()) {
      showMessage('Correct!');
      Even.incrementCount();
    } else {
      showMessage(`'${Even.getAnswer()}' is wrong answer ;(. Correct answer was '${Even.correctAnswer()}'.`);
      break;
    }
  }

  if (Even.getCount() === 3) {
    showMessage(`Congratulations, ${Even.getName()}!`);
  } else {
    showMessage(`Let's try again, ${Even.getName()}!`);
  }
};
