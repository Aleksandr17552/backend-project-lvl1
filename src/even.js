const even = {
  generateExpression: () => {
    const number = parseInt(Math.random() * 100, 10);
    const result = [number];
    return result;
  },

  checkAnswer: (number, answer) => {
    const correct = number[0] % 2 === 0 ? 'yes' : 'no';
    const difference = answer === correct;
    return difference;
  },

  correctAnswer: (number) => {
    const correct = number[0] % 2 === 0 ? 'yes' : 'no';
    return correct;
  },
};

export default even;
