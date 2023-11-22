import genStylish from './stylish.js';
import genPlain from './plain.js';
import genJSON from './JSON.js';

const getReport = (data, format) => {
  switch (format) {
    case 'stylish':
      return genStylish(data);
    case 'plain':
      return genPlain(data);
    case 'json':
      return genJSON(data);
    default:
      throw new Error('Undefined format, please choose format of "json","plain", "stylish" ');
  }
};

export default getReport;
