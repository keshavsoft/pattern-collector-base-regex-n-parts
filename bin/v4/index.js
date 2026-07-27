import threeParts from "./threeParts.js";
import twoParts from "./twoParts.js";
import defaultParts from "./defaultParts.js";

const startFunc = ({ matchLine = "", parseRegex, nParts, showLog }) => {
    if (showLog) console.log("matchLine : ", matchLine);

    if (typeof matchLine !== 'string') {
        return null;
    }

    const clean = matchLine.replace(/[\r\n]/g, '');
    const parts = clean.match(parseRegex);

    if (!parts) {
        return null;
    }

    switch (nParts) {
        case 3:
            return threeParts(parts);
        case 2:
            return twoParts(parts);
        default:
            return defaultParts(parts);
    }
};

export default startFunc;