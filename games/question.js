import main from '../src/main.js';

export default (Question) => {
  main.showMessage(`Question: ${Question}`);
  const answer = main.askQuestion('Your answer:');
  return answer;
};
