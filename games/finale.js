import main from '../src/main.js';

export default (name, victory) => {
  if (victory) {
    main.showMessage(`Congratulations, ${name}!`);
  } else {
    main.showMessage(`Let's try again, ${name}!`);
  }
};
