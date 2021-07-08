import readlineSync from 'readline-sync';

class Progression {
  constructor() {
    this.name = '';
    this.answer = '';
    this.expression = [];
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
    const progression = [];
    const numFirst = parseInt(Math.random() * 10, 10);
    const numSecond = parseInt(Math.random() * 10, 10);
    const numThree = parseInt(Math.random() * 10, 10);
    for (let i = 0; i < 10; i += 1) {
      const expression = numFirst + (numSecond * i);
      progression.push(expression);
    }

    this.correct = progression[numThree];
    progression[numThree] = '..';

    this.expression = progression;
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
    const num = this.correctExpression();
    const correct = Number(this.answer) === Number(num);
    return correct;
  }

  correctExpression() {
    return this.correct;
  }
}

export default new Progression();
