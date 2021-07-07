import readlineSync from 'readline-sync';

class Calc {
  constructor() {
    this.name = '';
    this.answer = '';
    this.expression = '';
    this.count = 0;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }

  getName() {
    return this.name;
  }

  incrementCount() {
    this.count += 1;
    return this.count;
  }

  getCount() {
    return this.count;
  }

  generateExpression() {
    const symbolArr = ['+', '-', '*'];
    const sumb = symbolArr[Math.floor(Math.random() * symbolArr.length)];
    const numFirst = parseInt(Math.random() * 10, 10);
    const numSecond = parseInt(Math.random() * 10, 10);
    this.expression = `${numFirst} ${sumb} ${numSecond}`;
    return this.expression;
  }

  getExpression() {
    return this.expression;
  }

  askQuestion(message) {
    const answerText = readlineSync.question(message);
    this.answer = answerText;
    return answerText;
  }

  getAnswer() {
    return this.answer;
  }

  checkExpression() {
    const even = this.correctExpression();
    const correct = Number(this.answer) === Number(even);
    return correct;
  }

  correctExpression() {
    // eslint-disable-next-line no-eval
    const even = eval(this.expression);
    return even;
  }
}

export default new Calc();
