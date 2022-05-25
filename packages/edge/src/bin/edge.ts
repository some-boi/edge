#!/usr/bin/env node
import arg from 'arg';

// ensure discord.js is installed
try {
  require.resolve('discord.js');
} catch (err) {
  console.warn(
    'Discord.js is not installed. Please run `npm install discord.js`'
  );
}

const args = arg(
  {
    '--version': Boolean,
    '-v': '--version'
  },
  {
    permissive: true
  }
);

if (args['--version']) {
  console.log(`Edge v${require('../package.json').version}`);
  process.exit(0);
}

const command = args._[0];

console.log(command);

// TODO: create dev command
// TODO: create build command
