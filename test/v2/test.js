import defaultFunc from '../../index.js';

// const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;
// const parseRegex = /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/

const parseRegex = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/

const k1 = defaultFunc({
    matchLine: "router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));",
    parseRegex, nParts: 3,
    showLog: true
});

console.log("ssssssssss : ", k1);

