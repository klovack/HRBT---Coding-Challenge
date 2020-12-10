"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendOperation = exports.appendOperationTypeGroup = void 0;
const calculateMinMaxAvg_1 = require("./calculateMinMaxAvg");
function appendOperationTypeGroup(operationType, rawOperation) {
    let operationTypeGroup = operationType;
    if (!operationTypeGroup) {
        operationTypeGroup = {
            numberPerformed: 0,
            durations: {
                total: 0,
            },
            operations: {},
        };
        operationTypeGroup.operations[rawOperation.operation] = {
            numberPerform: 0,
            operationType: rawOperation.operationType,
            durations: {
                total: 0,
            },
        };
    }
    operationTypeGroup.numberPerformed += 1;
    operationTypeGroup.durations.total += rawOperation.duration;
    operationTypeGroup.durations = calculateMinMaxAvg_1.calculateMinMaxAvg(operationTypeGroup.durations, operationTypeGroup.numberPerformed, rawOperation);
    if (!operationTypeGroup.operations) {
        operationTypeGroup.operations = {};
    }
    operationTypeGroup.operations[rawOperation.operation] = appendOperation(operationTypeGroup.operations[rawOperation.operation], rawOperation);
    return operationTypeGroup;
}
exports.appendOperationTypeGroup = appendOperationTypeGroup;
function appendOperation(operation, rawOperation) {
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
    result.durations = calculateMinMaxAvg_1.calculateMinMaxAvg(result.durations, result.numberPerform, rawOperation);
    return result;
}
exports.appendOperation = appendOperation;
