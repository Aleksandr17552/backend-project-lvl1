#!/usr/bin/env node
import games from '../games/games.js';
import progression from '../src/progression.js';

const task = 'What number is missing in the progression?';
games(progression, task);
