import genStylish from './stylish.js';
import genPlain from './plain.js';

const getReport = (data, format) => {
  switch (format) {
    case 'stylish':
      return genStylish(data);
    case 'plain':
      return genPlain(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Error: ${format} - this format is not supported. Available formats: stylish, plain, json`);
  }
};

export default getReport;
