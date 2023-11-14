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
  expect(genDiff('tree1.json', 'tree2.json', 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff('tree1.json', 'tree2.json', 'plain')).toEqual(expectedResultPlain);
  expect(genDiff('tree1.json', 'tree2.json', 'json')).toEqual(expectedResultJSON);
  expect(genDiff('tree1.json', 'tree2.json')).toEqual(expectedResultStylish);
});
test('gendiff YAML files', () => {
  expect(genDiff('treeYAML1.yaml', 'treeYAML2.yaml', 'stylish')).toEqual(expectedResultStylish);
  expect(genDiff('treeYAML1.yaml', 'treeYAML2.yaml', 'plain')).toEqual(expectedResultPlain);
  expect(genDiff('treeYAML1.yaml', 'treeYAML2.yaml', 'json')).toEqual(expectedResultJSON);
  expect(genDiff('treeYAML1.yaml', 'treeYAML2.yaml')).toEqual(expectedResultStylish);
});
