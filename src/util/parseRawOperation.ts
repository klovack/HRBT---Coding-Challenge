import { EOperationType, RawOperation } from "../types/operationType";

export function parseRawOperation(line: string): RawOperation | undefined {
  const splittedLine = line.split(' | ');

  if (splittedLine.length <= 0 || !splittedLine[0].includes("operation-responsetime")) {
    return;
  }

  return {
    operation: splittedLine[1].split(": ")[1],
    duration: parseFloat(splittedLine[2].split(": ")[1]),
    operationType: splittedLine[3].split(": ")[1] as EOperationType,
  };
}
