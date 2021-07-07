import readlineSync from 'readline-sync';

class Games {
  constructor() {
    this.name = '';
    this.answer = '';
    this.number = null;
  }

  setName(name) {
    this.name = name;
    return this.name;
  }

  getName() {
    return this.name;
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

export default new Games();
