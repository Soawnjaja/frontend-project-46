import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import getReport from './formatter/index.js';
import compareData from './buildDiffs.js';

const getFormat = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => {
  const pathFull = path.resolve(process.cwd(), filepath);
  return parse(fs.readFileSync(pathFull, 'utf-8'), getFormat(filepath));
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const tree = compareData(data1, data2);
  return getReport(tree, formatName);
};
export default genDiff;
