import main from '../src/main.js';

export default () => {
  main.showMessage('Welcome to the Brain Games!');
  const name = main.askQuestion('May I have your name?');
  main.showMessage(`Hello, ${name}!`);
  return name;
};
