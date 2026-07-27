import defaultFunc from '../../../index.js';
import assert from 'assert';

const parseRegex2 = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

console.log("--- Starting V5 2-Parts Tests ---");

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

// Test Default Case (no nParts)
const resDefault = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex: parseRegex2,
    showLog: true
});
console.log("Default case result: ", resDefault);
assert.deepStrictEqual(resDefault, {
    variable: 'routerFromv1',
    folderName: 'v1',
    raka: 'v1',
    poka: 'routerFromv1'
});

// Test No Match
const resNoMatch = defaultFunc({
    matchLine: "some random string",
    parseRegex: parseRegex2,
    showLog: true
});
console.log("No match result: ", resNoMatch);
assert.deepStrictEqual(resNoMatch, { KReason: "No match found for pattern: " + parseRegex2.toString() });

// Test Guard: nParts is 1 (unsupported)
const resGuard1 = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex: parseRegex2,
    nParts: 1,
    showLog: true
});
console.log("nParts: 1 result (guard): ", resGuard1);
assert.deepStrictEqual(resGuard1, { KReason: "nParts must be 2 or 3" });

// Test Guard: nParts is 4 (unsupported)
const resGuard4 = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js';",
    parseRegex: parseRegex2,
    nParts: 4,
    showLog: true
});
console.log("nParts: 4 result (guard): ", resGuard4);
assert.deepStrictEqual(resGuard4, { KReason: "nParts must be 2 or 3" });

console.log("All V5 2-Parts Tests passed successfully!");
