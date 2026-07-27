import defaultFunc from '../../index.js';

const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

const k1 = defaultFunc({
    matchLine: "import { router as routerFromv1 } from './v1/routes.js'",
    parseRegex,
    showLog: true
});

console.log("ssssssssss : ", k1);

