import defaultFunc from '../../../index.js';
import assert from 'assert';

const parseRegex3 = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/;

console.log("--- Starting V5 3-Parts Tests ---");

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

// Test No Match
const resNoMatch = defaultFunc({
    matchLine: "some random string",
    parseRegex: parseRegex3,
    showLog: true
});
console.log("No match result: ", resNoMatch);
assert.deepStrictEqual(resNoMatch, { KReason: "No match found for pattern: " + parseRegex3.toString() });

console.log("All V5 3-Parts Tests passed successfully!");
