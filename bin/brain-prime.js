#!/usr/bin/env node
import games from '../games/games.js';
import prime from '../src/prime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
games(prime, task);
