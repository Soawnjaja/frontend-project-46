#!/usr/bin/env node

const indention = (depth, replacer = ' ', spacesCount = 4) => {
  const indentSize = depth * spacesCount - 2;
  return replacer.repeat(indentSize);
};

const stringify = (data, depth) => {
  if (typeof data !== 'object' || data === null) {
    return String(data);
  }
  const arr = Object.entries(data);
  const lines = arr.map(([key, val]) => `${indention(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);
  const result = ['{', ...lines, `${indention(depth)}  }`].join('\n');
  return result;
};

function genResult(data) {
  const iter = (node, depth) => node.map(
    (item) => {
      switch (item.type) {
        case 'nested':
          return `${indention(depth)}  ${item.name}: {\n${iter(
            item.children,
            depth + 1,
          ).join('\n')}\n${indention(depth)}  }`;
        case 'unchanged':
          return `${indention(depth)}  ${item.name}: ${stringify(
            item.value,
            depth,
          )}`;
        case 'changed':
          return `${indention(depth)}- ${item.name}: ${stringify(
            item.value1,
            depth,
          )}\n${indention(depth)}+ ${item.name}: ${stringify(
            item.value2,
            depth,
          )}`;
        case 'deleted':
          return `${indention(depth)}- ${item.name}: ${stringify(
            item.value,
            depth,
          )}`;
        case 'added':
          return `${indention(depth)}+ ${item.name}: ${stringify(
            item.value,
            depth,
          )}`;
        default:
          throw new Error('Undefined type');
      }
    },
  );
  return `{\n${iter(data, 1).join('\n')}\n}`;
}

export default genResult;
