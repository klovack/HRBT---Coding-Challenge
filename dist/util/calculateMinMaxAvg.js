"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMinMaxAvg = void 0;
function calculateMinMaxAvg(oldDuration, totalPerformed, rawOperation) {
    return {
        total: oldDuration.total,
        average: oldDuration.total / totalPerformed,
        min: !oldDuration.min ? rawOperation.duration : Math.min(oldDuration.min, rawOperation.duration),
        max: !oldDuration.max ? rawOperation.duration : Math.max(oldDuration.max, rawOperation.duration),
    };
}
exports.calculateMinMaxAvg = calculateMinMaxAvg;
