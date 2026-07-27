import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const v = getLatestVersion();
const latestModule = require(`./bin/${v}/index.js`);

/**
 * Runs a single line against a custom parser regular expression and extracts captured groups.
 * 
 * @param {Object} options
 * @param {string} options.matchLine - The raw line of code or text to parse.
 * @param {RegExp} options.parseRegex - The regular expression with capture groups.
 * @param {number} [options.nParts] - The number of captured groups/parts to extract. 
 *                                    If set to 3, returns part1, part2, and part3.
 *                                    If set to 2, returns part1 and part2.
 *                                    Otherwise, defaults to returning variable/folderName mapping.
 * @param {boolean} [options.showLog] - Whether to log the matchLine to the console.
 * @returns {Object|null} The extracted parts object, or null if no match is found.
 */
const load = ({ matchLine, parseRegex, nParts, showLog }) => {

    return latestModule.default({ matchLine, parseRegex, nParts, showLog });
};

export default load;