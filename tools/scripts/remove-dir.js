const fs = require('fs');

const args = process.argv.slice(2);

if (!args.length) {
  throw new Error('No path specified. Please specify a path to remove.');
} else if (args.length > 1) {
  throw new Error(
    'Too many arguments. Please specify only one path to remove.'
  );
}

fs.rmSync(args[0], { recursive: true, force: true });
