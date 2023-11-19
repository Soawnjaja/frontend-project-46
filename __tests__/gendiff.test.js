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

const fileJSON1 = getFixturePath('file1.json');
const fileJSON2 = getFixturePath('file2.json');

const fileYAML1 = getFixturePath('file1.yaml');
const fileYAML2 = getFixturePath('file2.yaml');

const fileYML1 = getFixturePath('file1.yml');
const fileYML2 = getFixturePath('file2.yml');

test('gendiff JSON files', () => {
  expect(genDiff(fileJSON1, fileJSON2, 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff(fileJSON1, fileJSON2, 'plain')).toEqual(expectedResultPlain);
  expect(genDiff(fileJSON1, fileJSON2, 'json')).toEqual(expectedResultJSON);
  expect(genDiff(fileJSON1, fileJSON2)).toEqual(expectedResultStylish);
});

test('gendiff YAML files', () => {
  expect(genDiff(fileYAML1, fileYAML2, 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff(fileYAML1, fileYAML2, 'plain')).toEqual(expectedResultPlain);
  expect(genDiff(fileYAML1, fileYAML2, 'json')).toEqual(expectedResultJSON);
  expect(genDiff(fileYAML1, fileYAML2)).toEqual(expectedResultStylish);
});

test('gendiff YML files', () => {
  expect(genDiff(fileYML1, fileYML2, 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff(fileYML1, fileYML2, 'plain')).toEqual(expectedResultPlain);
  expect(genDiff(fileYML1, fileYML2, 'json')).toEqual(expectedResultJSON);
  expect(genDiff(fileYML1, fileYML2)).toEqual(expectedResultStylish);
});
