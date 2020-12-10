import { OperationType } from "./operationType";

export enum EGraphqlDurationsMethod {
  AVG = 'AVG',
  MIN = 'MIN',
  MAX = 'MAX',
}

export class GraphqlDurations {
  operation: string;
  operationType: OperationType;
  duration: number;
  method: EGraphqlDurationsMethod;
}