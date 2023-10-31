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

    return [file1, file2 ];
}