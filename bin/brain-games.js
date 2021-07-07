#!/usr/bin/env node
import Games from '../src/cli.js';

const showMessage = (message) => {
  console.log(message);
};

showMessage('Welcome to the Brain Games!');
Games.setName(Games.askQuestion('May I have your name?'));
showMessage(`Hello, ${Games.getName()}!`);
