#!/usr/bin/env node
import Games from '../src/cli.js';

const showMessage = (message) => {
  console.log(message);
};

showMessage('Welcome to the Brain Games!');
Games.setName(Games.askQuestion('May I have your name?'));
showMessage(`Hello, ${Games.getName()}!`);
showMessage('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0;

const question = () => {
  Games.generateNunber();
  showMessage(`Question: ${Games.getNunber()}`);
  Games.askQuestion('Your answer:');
};

while (count < 3) {
  question();
  if (Games.checkAnswer()) {
    showMessage('Correct!');
  } else {
    showMessage(`'${Games.getAnswer()}' is wrong answer ;(. Correct answer was '${Games.correctAnswer()}'.`);
    break;
  }
  count += 1;
}

if (count === 3) {
  showMessage(`Congratulations, ${Games.getName()}!`);
} else {
  showMessage(`Let's try again, ${Games.getName()}!`);
}
