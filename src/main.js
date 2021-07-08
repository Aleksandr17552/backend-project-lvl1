import readlineSync from 'readline-sync';

const main = {
  askQuestion: (message) => {
    const answerText = readlineSync.question(message);
    return answerText;
  },

  showMessage: (message) => console.log(message),
};

export default main;
