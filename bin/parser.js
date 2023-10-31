import * as path from 'path';
import * as yaml from 'js-yaml';

const getParsedFile = (file, pathFile) => {
  const format = path.extname(pathFile);
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(file);
  }
  return JSON.parse(file);
};

export default getParsedFile