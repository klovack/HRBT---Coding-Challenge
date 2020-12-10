"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlDurations = exports.EGraphqlDurationsMethod = void 0;
var EGraphqlDurationsMethod;
(function (EGraphqlDurationsMethod) {
    EGraphqlDurationsMethod["AVG"] = "AVG";
    EGraphqlDurationsMethod["MIN"] = "MIN";
    EGraphqlDurationsMethod["MAX"] = "MAX";
})(EGraphqlDurationsMethod = exports.EGraphqlDurationsMethod || (exports.EGraphqlDurationsMethod = {}));
class GraphqlDurations {
    constructor(operation, operationType, duration, method) {
        this.operation = operation;
        this.operationType = operationType;
        this.duration = duration;
        this.method = method;
    }
    toSQLInsert() {
        return `INSERT INTO \`${GraphqlDurations.TABLE_NAME}\` (operation, \`operationType\`, duration, method) VALUES ('${this.operation}', '${this.operationType.toUpperCase()}', ${this.duration}, '${this.method.toUpperCase()}');`;
    }
    static fromOperation(name, operation) {
        if (!operation) {
            return [];
        }
        return [
            new GraphqlDurations(name, operation.operationType, operation.durations.average, EGraphqlDurationsMethod.AVG),
            new GraphqlDurations(name, operation.operationType, operation.durations.min, EGraphqlDurationsMethod.MIN),
            new GraphqlDurations(name, operation.operationType, operation.durations.max, EGraphqlDurationsMethod.MAX),
        ];
    }
}
exports.GraphqlDurations = GraphqlDurations;
GraphqlDurations.TABLE_NAME = 'GraphqlDurations';
