#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');

// Because we like console, and captains.log sounds cool
const captains = console;

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'single',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Charleston Campos'),
  work: chalk.white('Full Stack Developer'),
  twitter: chalk.cyan('https://twitter.com/charlestoncjc'),
  github: chalk.cyan('https://github.com/Charlinho'),
  linkedin: chalk.cyan('https://linkedin.com/in/charleston-campos-57934079'),
  npx: chalk.white('npx @charleston.j.campos/card'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading
  + newline
  + newline
  + working
  + newline
  + twittering
  + newline
  + githubing
  + newline
  + linkedining
  + newline
  + webing
  + newline
  + newline
  + carding;

const cardMessage = chalk.green(boxen(output, options));
captains.log(cardMessage);
