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
    const prime = [7, 19, 37, 61, 127, 271, 331, 397, 547, 631, 919];
    const primeNum = prime[Math.floor(Math.random() * prime.length)];

    const number = parseInt(Math.random() * 1000, 10);

    if (parseInt(Math.random() * 1000, 10) % 2) {
      this.expression = primeNum;
    } else {
      this.expression = number;
    }

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
    const prime = this.correctExpression();
    const correct = this.answer === prime;
    return correct;
  }

  correctExpression() {
    const isPrime = (n) => {
      const k = Math.sqrt(n);
      for (let i = 2; i <= k; i += 1) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };
    const exists = isPrime(this.expression) ? 'yes' : 'no';
    return exists;
  }
}

export default new Prime();
