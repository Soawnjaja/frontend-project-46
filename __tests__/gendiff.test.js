import path from 'path';
import fs from 'fs';
import url from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../bin/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const result = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8')

const expectedResult = result('result_expected.txt');
// прочитали файлы
test('gendiff',() => {
    expect(genDiff('file1.json', 'file2.json')).toEqual(expectedResult);
}
)