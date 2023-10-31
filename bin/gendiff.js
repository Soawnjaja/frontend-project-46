#!/usr/bin/env node
import { program } from 'commander';
import genDiff from './index.js';
program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')
  .arguments('[filepath1] [filepath2]')
  .option('-f, --format <type>', 'output format' )
  .action((filepath1, filepath2) => {
    console.log(genDiff (filepath1, filepath2))
  });

  const option = program.opts();
if(option.help || (!program.filepath1 || !program.filepath2)) {
  program.outputHelp();
}
if(option.format) {
  console.log( 'You chose type `${type}`')
}

program.parse();