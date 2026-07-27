import defaultFunc from '../../../index.js';
import assert from 'assert';

const parseRegex2 = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;
const parseRegex3 = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/;

console.log("--- Starting V6 Mismatch Tests ---");

// 1. Mismatch with 2-parts regex
const resNoMatch2 = defaultFunc({
    matchLine: "some random string",
    parseRegex: parseRegex2,
    showLog: true
});
console.log("No match 2-parts result: ", resNoMatch2);
assert.deepStrictEqual(resNoMatch2, { KReason: "No match found for pattern: " + parseRegex2.toString() });

// 2. Mismatch with 3-parts regex
const resNoMatch3 = defaultFunc({
    matchLine: "some random string",
    parseRegex: parseRegex3,
    showLog: true
});
console.log("No match 3-parts result: ", resNoMatch3);
assert.deepStrictEqual(resNoMatch3, { KReason: "No match found for pattern: " + parseRegex3.toString() });

console.log("V6 Mismatch Tests passed successfully!");
