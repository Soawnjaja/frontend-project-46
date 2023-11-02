#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import getParsedFile from './parser.js'
import { cwd } from 'process';
const getPath = (filepath) => path.resolve(cwd(),'__fixtures__', filepath);
 const transformPathToFileObject = (filepath) => {
 const fullPath = getPath(filepath);
 const read = fs.readFileSync(`${fullPath}`, 'utf8');
 const readJson = getParsedFile(read, fullPath);
    return readJson;
  };

export default function genDiff(filepath1, filepath2) {
const file1 = transformPathToFileObject(filepath1);
const file2 = transformPathToFileObject(filepath2);
const keys1 = Object.keys(file1);
const keys2 = Object.keys(file2);
const allKeys = new Set([...keys1, ...keys2]);
const sortedKeys = Array.from(allKeys).sort();
const result = sortedKeys.reduce((acc, item) => {
    if (!keys2.includes(item)) {
      return acc + `- ${item}: ${file1[item]}\n`;
    } 
    if (!keys1.includes(item)) {
      return acc + `+ ${item}: ${file2[item]}\n`;
    }
    if (file1[item] === file2[item]) {
      return acc + `  ${item}: ${file1[item]}\n`;
    } 
    if (file1[item] !== file2[item]) {
      return acc + `- ${item}: ${file1[item]}\n` + `+ ${item}: ${file2[item]}\n`;
    }
    return acc;
  }, "{\n") + "}";
  return result;
}