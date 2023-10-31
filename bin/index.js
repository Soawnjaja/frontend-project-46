#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const readFile = fs.readFileSync;
const getPathFile = (pathF) =>  path.isAbsolute(pathF) ? pathF : path.resolve(process.cwd(), 'frontend-project-46', pathF);
export default function genDiff(filepath1, filepath2) {
    const filePath1 = getPathFile(filepath1);
    const filePath2 = getPathFile(filepath2);
    const file1 = readFile(filePath1);
    const file2 = readFile(filePath2);

    return [JSON.parse(file1), JSON.parse(file2)];
}