"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendOperation = exports.appendOperationTypeGroup = void 0;
const calculateMinMaxAvg_1 = require("./calculateMinMaxAvg");
function appendOperationTypeGroup(opTypeGroup, rawOperation) {
    let operationTypeGroup = opTypeGroup;
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
function appendOperation(opGroup, rawOperation) {
    let operation = opGroup;
    if (!operation) {
        operation = {
            numberPerform: 0,
            operationType: rawOperation.operationType,
            durations: {
                total: 0,
            }
        };
    }
    operation.numberPerform += 1;
    operation.durations.total += rawOperation.duration;
    operation.durations = calculateMinMaxAvg_1.calculateMinMaxAvg(operation.durations, operation.numberPerform, rawOperation);
    return operation;
}
exports.appendOperation = appendOperation;
