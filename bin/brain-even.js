#!/usr/bin/env node
import games from '../games/games.js';
import even from '../src/even.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
games(even, task);
