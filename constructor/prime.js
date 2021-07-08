import readlineSync from 'readline-sync';

class Prime {
  constructor() {
    this.name = '';
    this.answer = '';
    this.expression = null;
    this.count = 0;
    this.correct = '';
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
    const number = parseInt(Math.random() * 1000, 10);
    this.expression = number;
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
    const prime = [7, 19, 37, 61, 127, 271, 331, 397, 547, 631, 919];
    const exists = prime.includes(this.expression) ? 'yes' : 'no';
    const correct = this.answer === exists;
    return correct;
  }
}

export default new Prime();
