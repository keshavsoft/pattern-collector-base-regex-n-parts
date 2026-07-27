import defaultFunc from '../../../index.js';
import assert from 'assert';

const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

console.log("--- Starting V6 Guards Tests ---");

// 1. matchLine must be a string
const resMatchLine = defaultFunc({
    matchLine: 12345,
    parseRegex,
    showLog: true
});
console.log("matchLine guard result: ", resMatchLine);
assert.deepStrictEqual(resMatchLine, { KReason: "matchLine is not a string" });

// 2. parseRegex must be a RegExp
const resParseRegex = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex: "not-a-regex",
    showLog: true
});
console.log("parseRegex guard result: ", resParseRegex);
assert.deepStrictEqual(resParseRegex, { KReason: "parseRegex must be a RegExp" });

// 3. nParts must be 2 or 3 (if defined)
const resNParts1 = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex,
    nParts: 1,
    showLog: true
});
console.log("nParts 1 guard result: ", resNParts1);
assert.deepStrictEqual(resNParts1, { KReason: "nParts must be 2 or 3" });

const resNParts4 = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex,
    nParts: 4,
    showLog: true
});
console.log("nParts 4 guard result: ", resNParts4);
assert.deepStrictEqual(resNParts4, { KReason: "nParts must be 2 or 3" });

console.log("V6 Guards Tests passed successfully!");
