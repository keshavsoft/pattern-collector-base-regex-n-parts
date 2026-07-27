export default function guards({ matchLine, parseRegex, nParts }) {
    if (typeof matchLine !== 'string') {
        return { KReason: "matchLine is not a string" };
    }

    if (!(parseRegex instanceof RegExp)) {
        return { KReason: "parseRegex must be a RegExp" };
    }

    if (nParts !== undefined && nParts !== 2 && nParts !== 3) {
        return { KReason: "nParts must be 2 or 3" };
    }

    return null;
}
