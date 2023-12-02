import _ from 'lodash';

const setIndention = (depth, replacer = ' ', spacesCount = 4) => {
  const indentSize = depth * spacesCount - 2;
  return replacer.repeat(indentSize);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const arr = Object.entries(data);
  const lines = arr.map(([key, val]) => {
    const value = typeof val === 'object' ? stringify(val, depth + 1) : val;
    return `${setIndention(depth + 1)} ${key}: ${value}`;
  });
  const result = `{
 ${lines.join('\n')}
 ${setIndention(depth)} }`;
  return result;
};

const genStylish = (data) => {
  const iter = (node, depth) => node.map(
    (item) => {
      switch (item.type) {
        case 'nested':
          return `${setIndention(depth)}  ${item.key}: {\n${iter(
            item.children,
            depth + 1,
          ).join('\n')}\n${setIndention(depth)}  }`;
        case 'unchanged':
          return `${setIndention(depth)}  ${item.key}: ${stringify(
            item.value,
            depth,
          )}`;
        case 'changed': {
          const line1 = `${setIndention(depth)}- ${item.key}: ${stringify(
            item.value1,
            depth,
          )}`;
          const line2 = `${setIndention(depth)}+ ${item.key}: ${stringify(
            item.value2,
            depth,
          )}`;
          return `${line1}\n${line2}`; }
        case 'deleted':
          return `${setIndention(depth)}- ${item.key}: ${stringify(
            item.value,
            depth,
          )}`;
        case 'added':
          return `${setIndention(depth)}+ ${item.key}: ${stringify(
            item.value,
            depth,
          )}`;
        default:
          throw new Error(`Undefined type ${item.type}`);
      }
    },
  );
  return `{\n${iter(data, 1).join('\n')}\n}`;
};

export default genStylish;
