import defaultFunc from '../../index.js';
import assert from 'assert';

const parseRegex3 = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/;
const parseRegex2 = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

console.log("--- Starting V3 Tests ---");

// Test nParts: 3
const res3 = defaultFunc({
    matchLine: "router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));",
    parseRegex: parseRegex3,
    nParts: 3,
    showLog: true
});
console.log("nParts: 3 result: ", res3);
assert.deepStrictEqual(res3, {
    part1: 'get',
    part2: 'showAll',
    part3: 'funcFromshowAll'
});

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
assert.strictEqual(resNoMatch, null);

console.log("All V3 Tests passed successfully!");
