#!/usr/bin/env node
import _ from 'lodash';

const makeDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const result = keys.map((key) => {
    if (typeof data1[key] === 'object' && typeof data2[key] === 'object') {
      return { type: 'nested', key, children: makeDiff(data1[key], data2[key]) };
    }
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (data1[key] !== data2[key]) {
      return {
        type: 'changed',
        key,
        value1: data1[key],
        value2: data2[key],
      };
    }
    return { type: 'unchanged', key, value: data1[key] };
  });
  return result;
};

export default makeDiff;
