const gcd = {
  generateExpression: () => {
    const numFirst = parseInt(Math.random() * 10, 10);
    const numSecond = parseInt(Math.random() * 10, 10);
    const expression = [numFirst, numSecond];
    return expression;
  },

  checkAnswer: (expression, answer) => {
    const calculation = (a, b) => (!b ? a : calculation(b, a % b));
    const result = calculation(...expression);
    const correct = Number(answer) === Number(result);
    return correct;
  },

  correctAnswer: (expression) => {
    const calculation = (a, b) => (!b ? a : calculation(b, a % b));
    const result = calculation(...expression);
    return result;
  },
};

export default gcd;
