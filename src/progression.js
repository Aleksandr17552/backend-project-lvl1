const progression = {
  generateExpression: () => {
    const expression = [];
    const numFirst = parseInt(Math.random() * 10, 10);
    const numSecond = parseInt(Math.random() * 10, 10);
    const numThree = parseInt(Math.random() * 10, 10);

    for (let i = 0; i < 10; i += 1) {
      const calculation = numFirst + (numSecond * i);
      expression.push(calculation);
    }
    expression[numThree] = '..';
    return expression;
  },

  checkAnswer: (expression, answer) => {
    const index = expression.indexOf('..');
    let numFirst = null;
    let numSecond = null;
    let numThree = null;
    if (index < 6) {
      numFirst = expression[index + 1];
      numSecond = expression[index + 2] - numFirst;
      numThree = numFirst - numSecond;
    } else if (index > 4) {
      numFirst = expression[index - 1];
      numSecond = numFirst - expression[index - 2];
      numThree = numFirst + numSecond;
    }
    const correct = Number(answer) === Number(numThree);
    return correct;
  },

  correctAnswer: (expression) => {
    const index = expression.indexOf('..');
    let numFirst = null;
    let numSecond = null;
    let numThree = null;
    if (index < 6) {
      numFirst = expression[index + 1];
      numSecond = expression[index + 2] - numFirst;
      numThree = numFirst - numSecond;
    } else if (index > 4) {
      numFirst = expression[index - 1];
      numSecond = numFirst - expression[index - 2];
      numThree = numFirst + numSecond;
    }
    const correct = numThree;
    return correct;
  },
};

export default progression;
