import Main from '../constructor/main.js';

export default () => {
  const showMessage = (message) => console.log(message);
  showMessage('Welcome to the Brain Games!');
  Main.setName(
    Main.askQuestion('May I have your name?'),
  );
  showMessage(`Hello, ${Main.getName()}!`);
};
