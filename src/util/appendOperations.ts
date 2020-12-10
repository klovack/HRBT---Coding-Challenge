import { calculateMinMaxAvg } from "./calculateMinMaxAvg";
import { OperationType, RawOperation, Operation } from "../types/operationType";

/**
 * Return the new `operationType` instance based on the `operationType` that is passed to the argument. 
 * 
 * @param operationType original operation type. This will not be modified
 * @param rawOperation
 */
export function appendOperationTypeGroup(operationType: OperationType | undefined, rawOperation: RawOperation): OperationType {
  let operationTypeGroup = operationType;
  if (!operationTypeGroup) {
    operationTypeGroup = {
      numberPerformed: 0,
      durations: {
        total: 0,
      },
      operations: {},
    };

    operationTypeGroup.operations![rawOperation.operation] = {
      numberPerform: 0,
      operationType: rawOperation.operationType,
      durations: {
        total: 0,
      },
    };
  }

  operationTypeGroup.numberPerformed += 1;
  operationTypeGroup.durations.total += rawOperation.duration;

  // Calculate average, min, and max 
  operationTypeGroup.durations = calculateMinMaxAvg(operationTypeGroup.durations, operationTypeGroup.numberPerformed, rawOperation);

  if (!operationTypeGroup.operations) {
    operationTypeGroup.operations = {};
  }
  operationTypeGroup.operations![rawOperation.operation] = appendOperation(operationTypeGroup.operations![rawOperation.operation], rawOperation);

  return operationTypeGroup;
}

/**
 * Return the new `operation` instance based on the `operation` that is passed to the argument. 
 * 
 * @param operation original operation. This will not be modified
 * @param rawOperation 
 */
export function appendOperation(operation: Operation | undefined, rawOperation: RawOperation): Operation {
  let result = operation;

  if (!result) {
    result = {
      numberPerform: 0,
      operationType: rawOperation.operationType,
      durations: {
        total: 0,
      }
    };
  }

  result.numberPerform += 1;
  result.durations.total += rawOperation.duration;
  result.durations = calculateMinMaxAvg(result.durations, result.numberPerform, rawOperation);

  return result;
}
