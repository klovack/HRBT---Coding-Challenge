export enum EOperationType {
  QUERY = 'query',
  MUTATION = 'mutation',
  SUBSCRIPTION = "subscription"
}

export type durations = {
  average?: number,
  min?: number,
  max?: number,
  total: number,
}

export type OperationType = {
  numberPerformed: number;
  durations: durations;
  operations?: OperationGroups,
};

export type OperationTypeGroups = {
  [key in EOperationType]?: OperationType
};

export type Operation = {
  numberPerform: number,
  durations: durations;
  operationType: EOperationType
};

export type OperationGroups = {
  [key: string]: Operation
};

export type RawOperation = {
  operation: string,
  duration: number,
  operationType: EOperationType,
}