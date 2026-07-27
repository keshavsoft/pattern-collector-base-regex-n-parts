import threeParts from "./threeParts.js";
import twoParts from "./twoParts.js";
import defaultParts from "./defaultParts.js";

const startFunc = ({ matchLine = "", parseRegex, nParts, showLog }) => {
    if (showLog) console.log("matchLine : ", matchLine);

    if (typeof matchLine !== 'string') {
        return { KReason: "matchLine is not a string" };
    }

    if (nParts !== undefined && nParts !== 2 && nParts !== 3) {
        return { KReason: "nParts must be 2 or 3" };
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