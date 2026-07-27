# pattern-collector-base-regex 🔍

> **A high-performance utility to run a single line against a custom parser regular expression and extract captured groups.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-base-regex.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-base-regex)
[![license](https://img.shields.io/npm/l/pattern-collector-base-regex.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-base-regex](https://www.npmjs.com/package/pattern-collector-base-regex)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-base-regex](https://github.com/keshavsoft/pattern-collector-base-regex)
*   📄 **Interactive Docs**: [keshavsoft.github.io/pattern-collector-base-regex](https://keshavsoft.github.io/pattern-collector-base-regex/)
*   ⚙️ **Publish Workflow**: [.github/workflows/npm-publish.yml](file:///d:/KeshavSoftRepos/ks27/pattern-collector-base-regex-n-parts/.github/workflows/npm-publish.yml)

---

## 📖 Overview

`pattern-collector-base-regex` is a lightweight helper designed to parse a specific text line against a capturing Regular Expression.

Depending on the configured `nParts` parameter, the utility extracts captured groups into structured formats:
*   **3-Parts mode (`nParts: 3`)**: Extracts three captured groups as `part1`, `part2`, and `part3`.
*   **2-Parts mode (`nParts: 2`)**: Extracts two captured groups as `part1` and `part2`.
*   **Default mode**: Extracts two captured groups mapping the first group to `variable` and the second group to `folderName`.

---

## ✨ Features

*   **⚡ Zero Dependencies**: Light, fast, and secure.
*   **📂 Configurable Group Extraction**: Easily switch between extracting 2 or 3 capture groups using the `nParts` option.
*   **🛡️ Robust Parameter Guards**: Validates input parameter types and configurations, returning descriptive `{ KReason }` objects on failure.
*   **📦 ESM Native**: Built for modern ES module environments.

---

## 🚀 Installation

```bash
npm install pattern-collector-base-regex
```

---

## 🛠️ API Reference

### `default(options)`

#### Parameters

An options object containing:

*   **`matchLine`** `(string)`: The raw text line to match (e.g., an import or route usage line).
*   **`parseRegex`** `(RegExp)`: A regular expression with capture groups.
*   **`nParts`** `(number)` *(optional)*: The number of captured parts to extract. If set to `3`, it returns three capture groups. If set to `2`, it returns two capture groups. Otherwise, defaults to returning variable/folderName mapping (2 parts).
*   **`showLog`** `(boolean)` *(optional)*: Whether to print debug logs.

#### Returns

*   `Object`: 
    *   If `nParts` is `3` and a match is found:
        ```javascript
        {
          part1: string, // First capture group
          part2: string, // Second capture group
          part3: string  // Third capture group
        }
        ```
    *   If `nParts` is `2` and a match is found:
        ```javascript
        {
          part1: string, // First capture group
          part2: string  // Second capture group
        }
        ```
    *   If `nParts` is not `2` or `3` (default) and a match is found:
        ```javascript
        {
          variable: string,   // First capture group
          folderName: string  // Second capture group
        }
        ```
    *   If there is no match or input is invalid, it returns `{ KReason: string }`.

---

## 💻 Usage Examples

### Example 1: 3-Parts Extraction (e.g., API Route handler)

```javascript
import extractVariable from 'pattern-collector-base-regex';

const line = "router.get('/showAll', (req, res) => funcFromshowAll({ req, res }));";
const parseRegex = /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/;

const result = extractVariable({
  matchLine: line,
  parseRegex,
  nParts: 3
});

console.log(result);
/*
Output:
{
  part1: 'get',
  part2: 'showAll',
  part3: 'funcFromshowAll'
}
*/
```

### Example 2: Traditional 2-Parts Extraction (e.g., Imports)

```javascript
import extractVariable from 'pattern-collector-base-regex';

const line = 'import { router as routerFromv1 } from "./v1/routes.js";';
const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

const result = extractVariable({
  matchLine: line,
  parseRegex
});

console.log(result);
/*
Output:
{
  variable: 'routerFromv1',
  folderName: 'v1'
}
*/
```

---

### Example 3: Handling Validation / Matching Failures (Returning KReason)

```javascript
import extractVariable from 'pattern-collector-base-regex';

// 1. Invalid matchLine type
const badMatchLine = extractVariable({
  matchLine: 12345,
  parseRegex: /regex/
});
console.log(badMatchLine);
/* Output: { KReason: "matchLine is not a string" } */

// 2. Pattern mismatch
const mismatch = extractVariable({
  matchLine: "some random string",
  parseRegex: /router\.(get|post)/
});
console.log(mismatch);
/* Output: { KReason: "No match found for pattern: /router\\.(get|post)/" } */
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
