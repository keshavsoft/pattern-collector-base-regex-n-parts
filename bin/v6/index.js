import threeParts from "./threeParts.js";
import twoParts from "./twoParts.js";
import defaultParts from "./defaultParts.js";
import checkGuards from "./guards.js";

const startFunc = ({ matchLine = "", parseRegex, nParts, showLog }) => {
    if (showLog) console.log("matchLine : ", matchLine);

    const guardError = checkGuards({ matchLine, parseRegex, nParts });
    if (guardError) {
        return guardError;
    }

    const clean = matchLine.replace(/[\r\n]/g, '');
    const parts = clean.match(parseRegex);

    if (!parts) {
        return { KReason: `No match found for pattern: ${parseRegex}` };
    }

    switch (nParts) {
        case 3:
            return threeParts(parts);
        case 2:
            return twoParts(parts);
        default:
            return defaultParts(parts);
    };
};

export default startFunc;