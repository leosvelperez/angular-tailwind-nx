#!/usr/bin/env node

const fs = require('fs');

// @see https://regex101.com/library/vzA46H
const pattern = new RegExp(/(?<=--path[ |=])dist\/.*(?=$)/);

const argvString = process.argv.join(' ').replace(/["']/g, '');

if(pattern.test(argvString)) {
    const matched = argvString.match(pattern).pop();
    fs.rmSync(matched, {recursive: true, force: true});
} else {
    console.error("Unable to find a 'path' argument with a value containing 'dist' folder.");
    process.exit(1);
}
