import { EOperationType, Operation } from "./operationType";

export enum EGraphqlDurationsMethod {
  AVG = 'AVG',
  MIN = 'MIN',
  MAX = 'MAX',
}

export class GraphqlDurations {
  public static TABLE_NAME = 'GraphqlDurations';
  
  constructor(
    public operation: string,
    public operationType: EOperationType,
    public duration: number,
    public method: EGraphqlDurationsMethod,
  ) {}

  toSQLInsert() {
    return `INSERT INTO \`${GraphqlDurations.TABLE_NAME}\` (operation, \`operationType\`, duration, method) VALUES ('${this.operation}', '${this.operationType.toUpperCase()}', ${this.duration}, '${this.method.toUpperCase()}');`;
  }

  static fromOperation(name: string, operation: Operation): GraphqlDurations[] {
    if (!operation) {
      return [];
    }

    return [
      new GraphqlDurations(name, operation.operationType, operation.durations.average!, EGraphqlDurationsMethod.AVG),
      new GraphqlDurations(name, operation.operationType, operation.durations.min!, EGraphqlDurationsMethod.MIN),
      new GraphqlDurations(name, operation.operationType, operation.durations.max!, EGraphqlDurationsMethod.MAX),
    ];
  }
}