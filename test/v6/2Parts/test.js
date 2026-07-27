import defaultFunc from '../../../index.js';
import assert from 'assert';

const parseRegex2 = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

console.log("--- Starting V6 2-Parts Tests ---");

// Test nParts: 2
const res2 = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex: parseRegex2,
    nParts: 2,
    showLog: true
});
console.log("nParts: 2 result: ", res2);
assert.deepStrictEqual(res2, {
    part1: 'routerFromv1',
    part2: 'v1'
});

console.log("V6 2-Parts Tests passed successfully!");
