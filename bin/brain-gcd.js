#!/usr/bin/env node
import games from '../games/games.js';
import gcd from '../src/gcd.js';

const task = 'Find the greatest common divisor of given numbers.';
games(gcd, task);
