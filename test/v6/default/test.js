import defaultFunc from '../../../index.js';
import assert from 'assert';

const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

console.log("--- Starting V6 Default Case Tests ---");

// Test Default Case (no nParts)
const res = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex,
    showLog: true
});
console.log("Default case result: ", res);
assert.deepStrictEqual(res, {
    variable: 'routerFromv1',
    folderName: 'v1'
});

console.log("V6 Default Case Tests passed successfully!");
