import readlineSync from 'readline-sync';

class Main {
  constructor() {
    this.name = '';
    this.answer = '';
  }

  setName(name) {
    this.name = name;
    return this.name;
  }

  getName() {
    return this.name;
  }

  askQuestion(message) {
    const answerText = readlineSync.question(message);
    this.answer = answerText;
    return answerText;
  }
}

export default new Main();
