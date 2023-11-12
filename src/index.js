#!/usr/bin/env node
  //главный модуль

import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import getParsedFile from './parser.js';
import stylish from './formatter.js';
import buildDiffs from './buildDiffs.js';

const getPath = (filepath) => path.resolve(cwd(), '__fixtures__', filepath);
const transformPathToFileData = (filepath) => {
  const fullPath = getPath(filepath);
  const read = fs.readFileSync(`${fullPath}`, 'utf8');
  const data = getParsedFile(read, fullPath);
  return data;
};

const genDiff = (file1, file2, format = 'stylish') => {
 const readData1 = transformPathToFileData(file1);
 const readData2 = transformPathToFileData(file2);
 const dataDiffs = buildDiffs(readData1,readData2);
 return stylish(dataDiffs,format);
};
export default genDiff;