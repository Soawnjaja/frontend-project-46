#!/usr/bin/env node
import * as path from 'path';
import * as yaml from 'js-yaml';
// определяем формат полученного файла
const getParsedFile = (data, formatData) => {
  const format = path.extname(formatData);
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(data);
  }
  return JSON.parse(data);
};

export default getParsedFile;
