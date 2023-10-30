#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .version('0.1', '-V', '--version', 'output version number')
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')
  .parse(process.argv);

if (program.help) {
  program.outputHelp();
} else {
  console.log('usage -h or --help  output usage information');
}

export default program;
