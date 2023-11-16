#!/usr/bin/env node
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

function getPlainFormat(value, parent = '') {
  return value.map((element) => {
    switch (element.type) {
      case 'added':
        return `Property '${parent}${element.name}' was added with value: ${stringify(element.value)}`;
      case 'deleted':
        return `Property '${parent}${element.name}' was removed`;
      case 'unchanged':
        return null;
      case 'changed':
        return `Property '${parent}${element.name}' was updated. From ${stringify(element.value1)} to ${stringify(element.value2)}`;
      case 'nested':
        return element.children
          .map((val) => getPlainFormat([val], `${parent + element.name}.`)).join('\n');
      default:
        throw new Error(`Unknown typesadsa : ${element.type}`);
    }
  }).join('\n');
}
const getValidPlain = (data) => getPlainFormat(data).replace(/^\s*[\r\n]/gm, '');
export default getValidPlain;
