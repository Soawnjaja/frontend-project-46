import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import getReport from './formatter/index.js';
import compareData from './buildDiffs.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8');
const getFormat = (filename) => filename.split('.')[1];

const genDiff = (file1, file2, formatName = 'stylish') => {
  const value1 = readFile(file1);
  const value2 = readFile(file2);
  const formatFile1 = getFormat(file1);
  const formatFile2 = getFormat(file2);
  const data1 = parse(value1, formatFile1);
  const data2 = parse(value2, formatFile2);
  const tree = compareData(data1, data2);

  return getReport(tree, formatName);
};
export default genDiff;
