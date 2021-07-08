import welcome from './welcome.js';
import question from './question.js';
import finale from './finale.js';
import main from '../src/main.js';

export default (type, task) => {
  let numberQuestions = 0;
  const numberGames = 3;
  const name = welcome();

  main.showMessage(task);

  while (numberQuestions < numberGames) {
    const expression = type.generateExpression();
    const answer = question(expression.join(' '));

    if (type.checkAnswer(expression, answer)) {
      main.showMessage('Correct!');
      numberQuestions += 1;
    } else {
      main.showMessage(`'${answer}' is wrong answer ;(. Correct answer was '${type.correctAnswer(expression)}'.`);
      break;
    }
  }

  const victory = numberQuestions === numberGames;
  finale(name, victory);
};
