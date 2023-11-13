#!/usr/bin/env node
// главный модуль

import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import getParsedFile from './parser.js';
import genResult from './formatter.js';
import makeDiff from './buildDiffs.js';

const getPath = (filepath) => path.resolve(cwd(), '__fixtures__', filepath);
const transformPathToFileData = (filepath) => {
  const fullPath = getPath(filepath);
  const read = fs.readFileSync(`${fullPath}`, 'utf8');
  const data = getParsedFile(read, fullPath);
  return data;
};

const genDiff = (file1, file2, format = 'stylish') => {
  if (format === 'stylish') {
    const readData1 = transformPathToFileData(file1);
    const readData2 = transformPathToFileData(file2);
    const dataDiff = makeDiff(readData1, readData2);
    return genResult(dataDiff);
  }
  const readData1 = transformPathToFileData(file1);
  const readData2 = transformPathToFileData(file2);
  const dataDiff = makeDiff(readData1, readData2);
  return genResult(dataDiff);
};
export default genDiff;
