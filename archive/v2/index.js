/**
 * Runs a single line against a custom parser regular expression and extracts captured groups.
 * 
 * @param {Object} options
 * @param {string} options.matchLine - The raw line of code or text to parse.
 * @param {RegExp} options.parseRegex - The regular expression with capture groups.
 * @param {number} [options.nParts] - The number of captured groups/parts to extract. 
 *                                    If set to 3, returns parts 1, 2, and 3.
 *                                    Otherwise, defaults to returning variable/folderName mapping (2 parts).
 * @param {boolean} [options.showLog] - Whether to log the matchLine to the console.
 * @returns {Object|null} The extracted parts object, or null if no match is found.
 */
const startFunc = ({ matchLine = "", parseRegex, nParts, showLog }) => {
    if (showLog) console.log("matchLine : ", matchLine);

    if (typeof matchLine !== 'string') {
        return null;
    }

    const clean = matchLine.replace(/[\r\n]/g, '');
    let parts;

    switch (nParts) {
        case 3:
            parts = clean.match(parseRegex);

            if (parts) {
                return {
                    part3: parts[3],
                    part2: parts[2],
                    part1: parts[1]
                };
            }
            break;

        default:
            parts = clean.match(parseRegex);

            if (parts) {
                return {
                    variable: parts[1],
                    folderName: parts[2],
                    raka: parts[2],
                    poka: parts[1]
                };
            }
            break;
    }

    return null;
};

export default startFunc;