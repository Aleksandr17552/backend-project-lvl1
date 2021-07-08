const prime = {
  generateExpression: () => {
    const primeArr = [7, 19, 37, 61, 127, 271, 331, 397, 547, 631, 919];
    const primeNum = primeArr[Math.floor(Math.random() * primeArr.length)];
    const number = parseInt(Math.random() * 1000, 10);
    const expression = [];

    if (parseInt(Math.random() * 1000, 10) % 2) {
      expression.push(primeNum);
    } else {
      expression.push(number);
    }
    return expression;
  },

  checkAnswer: (expression, answer) => {
    const isPrime = (n) => {
      const k = Math.sqrt(n);
      for (let i = 2; i <= k; i += 1) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };
    const result = isPrime(...expression) ? 'yes' : 'no';
    const correct = answer === result;
    return correct;
  },

  correctAnswer: (expression) => {
    const isPrime = (n) => {
      const k = Math.sqrt(n);
      for (let i = 2; i <= k; i += 1) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };
    const exists = isPrime(...expression) ? 'yes' : 'no';
    return exists;
  },
};

export default prime;
