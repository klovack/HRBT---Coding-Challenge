import { RawOperation, durations } from "../types/operationType";

export function calculateMinMaxAvg(oldDuration: durations, totalPerformed: number, rawOperation: RawOperation): durations {
  return {
    total: oldDuration.total,
    average: oldDuration.total / totalPerformed,
    min: !oldDuration.min ? rawOperation.duration : Math.min(oldDuration.min!, rawOperation.duration),
    max: !oldDuration.max ? rawOperation.duration : Math.max(oldDuration.max!, rawOperation.duration),
  };
}
