import readlineSync from 'readline-sync';

class Gcd {
  constructor() {
    this.name = '';
    this.answer = '';
    this.expression = [];
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
    const numFirst = parseInt(Math.random() * 10, 10);
    const numSecond = parseInt(Math.random() * 10, 10);
    this.expression = [numFirst, numSecond];
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
    const gcd = this.correctExpression();
    const correct = Number(this.answer) === Number(gcd);
    return correct;
  }

  correctExpression() {
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    const result = gcd(this.expression[0], this.expression[1]);
    return result;
  }
}

export default new Gcd();
