#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import getParsedFile from './parser.js'


 const transformPathToFileObject = (file) => {
    const filePath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file);
    const read = fs.readFileSync(`${filePath}`, 'utf8');
    const readJson = getParsedFile(read, filePath);
    return readJson;
  };

export default function genDiff(filepath1, filepath2) {
    const file1 = transformPathToFileObject(filepath1);
    const file2 = transformPathToFileObject(filepath2);
    const keys1 = Object.keys(file1);
    const keys2 = Object.keys(file2);
    const sortedKeys1 = keys1.sort();
    const result = sortedKeys1.map((item) => {
      if (!keys2.includes(item)) {
        console.log(`- ${item}: ${file1[item]}`);
      } 
      if(keys2.includes(item) && file1[item] === file2[item]) {
        console.log(`  ${item}: ${file1[item]}`);
      } 
      if(keys2.includes(item) && file1[item] !== file2[item]) {
        console.log(`- ${item} : ${file1[item]}`);
        console.log(`+ ${item} : ${file2[item]}`);
      }
    });
}