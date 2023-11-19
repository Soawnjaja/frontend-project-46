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

function genStylish(data) {
  const iter = (node, depth) => node.map(
    (item) => {
      switch (item.type) {
        case 'nested':
          return `${indention(depth)}  ${item.key}: {\n${iter(
            item.children,
            depth + 1,
          ).join('\n')}\n${indention(depth)}  }`;
        case 'unchanged':
          return `${indention(depth)}  ${item.key}: ${stringify(
            item.value,
            depth,
          )}`;
        case 'changed':
          return `${indention(depth)}- ${item.key}: ${stringify(
            item.value1,
            depth,
          )}\n${indention(depth)}+ ${item.key}: ${stringify(
            item.value2,
            depth,
          )}`;
        case 'deleted':
          return `${indention(depth)}- ${item.key}: ${stringify(
            item.value,
            depth,
          )}`;
        case 'added':
          return `${indention(depth)}+ ${item.key}: ${stringify(
            item.value,
            depth,
          )}`;
        default:
          throw new Error(`Undefined type ${item.type}`);
      }
    },
  );
  return `{\n${iter(data, 1).join('\n')}\n}`;
}

export default genStylish;
