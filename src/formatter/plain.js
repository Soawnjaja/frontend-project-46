import _ from 'lodash';

const stringify = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (typeof (data) === 'string') {
    return `'${data}'`;
  }
  return String(data);
};

const getPlainFormat = (data) => {
  const iter = (node, parent) => {
    const dataToStringFormat = node.map((element) => {
      switch (element.type) {
        case 'nested':
          return iter(element.children, `${parent}${element.key}.`);
        case 'added':
          return `Property '${parent + element.key}' was added with value: ${stringify(element.value)}\n`;
        case 'deleted':
          return `Property '${parent + element.key}' was removed\n`;
        case 'changed':
          return `Property '${parent + element.key}' was updated. From ${stringify(element.value1)} to ${stringify(element.value2)}\n`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown type: ${element.type}`);
      }
    });
    return `${dataToStringFormat.join('')}`;
  };
  return iter(data, '').trim();
};
export default getPlainFormat;
