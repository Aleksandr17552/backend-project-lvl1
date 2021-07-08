#!/usr/bin/env node
import games from '../games/games.js';
import calc from '../src/calc.js';

const task = 'What is the result of the expression?';
games(calc, task);
