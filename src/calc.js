const calc = {
  generateExpression: () => {
    const symbolArr = ['+', '-', '*'];
    const sumb = symbolArr[Math.floor(Math.random() * symbolArr.length)];
    const numFirst = parseInt(Math.random() * 10, 10);
    const numSecond = parseInt(Math.random() * 10, 10);
    const expression = [numFirst, sumb, numSecond];
    return expression;
  },

  checkAnswer: (expression, answer) => {
    // eslint-disable-next-line no-eval
    const result = eval(expression.join(' '));
    const correct = Number(answer) === Number(result);
    return correct;
  },

  correctAnswer: (expression) => {
    // eslint-disable-next-line no-eval
    const result = eval(expression.join(' '));
    return result;
  },
};

export default calc;
