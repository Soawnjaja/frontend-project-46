import path from 'path';
import fs from 'fs';
import url from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const getFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedResultStylish = getFixture('result_stylish.txt');
const expectedResultPlain = getFixture('result_plain.txt');
const expectedResultJSON = getFixture('result_json.txt');

test('gendiff JSON files', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(expectedResultPlain);
  expect(genDiff('file1.json', 'file2.json', 'json')).toEqual(expectedResultJSON);
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedResultStylish);
});
test('gendiff YAML files', () => {
  expect(genDiff('file1.yaml', 'file2.yaml', 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff('file1.yaml', 'file2.yaml', 'plain')).toEqual(expectedResultPlain);
  expect(genDiff('file1.yaml', 'file2.yaml', 'json')).toEqual(expectedResultJSON);
  expect(genDiff('file1.yaml', 'file2.yaml')).toEqual(expectedResultStylish);
});
test('gendiff YML files', () => {
  expect(genDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff('file1.yml', 'file2.yml', 'plain')).toEqual(expectedResultPlain);
  expect(genDiff('file1.yml', 'file2.yml', 'json')).toEqual(expectedResultJSON);
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedResultStylish);
});