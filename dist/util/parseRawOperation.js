"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRawOperation = void 0;
function parseRawOperation(line) {
    const splittedLine = line.split(' | ');
    if (splittedLine.length <= 0 || !splittedLine[0].includes("operation-responsetime")) {
        return;
    }
    return {
        operation: splittedLine[1].split(": ")[1],
        duration: parseFloat(splittedLine[2].split(": ")[1]),
        operationType: splittedLine[3].split(": ")[1],
    };
}
exports.parseRawOperation = parseRawOperation;
