import readlineSync from 'readline-sync';

class Even {
  constructor() {
    this.name = '';
    this.answer = '';
    this.number = null;
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

  generateNunber() {
    this.number = parseInt(Math.random() * 100, 10);
    return this.number;
  }

  getNunber() {
    return this.number;
  }

  askQuestion(message) {
    const answerText = readlineSync.question(message);
    this.answer = answerText;
    return answerText;
  }

  getAnswer() {
    return this.answer;
  }

  checkAnswer() {
    const even = this.correctAnswer();
    const correct = this.answer === even;
    return correct;
  }

  correctAnswer() {
    const even = this.number % 2 === 0 ? 'yes' : 'no';
    return even;
  }
}

export default new Even();
