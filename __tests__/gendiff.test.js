import path from 'path';
import fs from 'fs';
import url from 'url';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const result = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedResult = result('result_expected.txt');
const expectedTreeResult = result('result_tree_expected.txt');

test('gendiff flat', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedResult);
  expect(genDiff('file1-yaml.yaml', 'file2-yaml.yaml')).toEqual(expectedResult);
});
test('gendiff tree', () => {
  expect(genDiff('tree1.json', 'tree2.json')).toEqual(expectedTreeResult);
  expect(genDiff('treeYAML1.yaml', 'treeYAML2.yaml')).toEqual(expectedTreeResult);
});
