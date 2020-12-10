import { EGraphqlDurationsMethod } from "../types/graphqlDurations";
import { OperationTypeGroups, EOperationType, OperationGroups } from "../types/operationType";
import { capitalize } from "./strutil";

/**
 * print the number of operations that have been performed based on each operation name
 * 
 * @param opTypeGroup 
 */
export function printAnswer1(opTypeGroup: OperationTypeGroups) {
  console.log("Number of operations performed grouped by operation type: ");
  for (const opTypeString of Object.keys(opTypeGroup)) {
    const opType = opTypeString as EOperationType;
    console.log(`${capitalize(opType)}: ${opTypeGroup[opType]!.numberPerformed}`);
  }
  console.log('');
}

/**
 * Print the number of queries, mutations, and subscriptions that have been performed
 * 
 * @param opGroup 
 */
export function printAnswer2(opGroup: OperationGroups) {
  console.log("Number of operations performed grouped by operation: ");
  for (const opString of Object.keys(opGroup)) {
    console.log(`${opString}: ${opGroup[opString].numberPerform}`);
  }
  console.log('');
}

/**
 * print the average, min, or max of the duration times grouped by
 *  - operation type
 *  - operation
 * 
 * based on the `durationMethod` passed to the argument
 * 
 * @param opTypeGroup 
 * @param opGroup 
 * @param durationMethod 
 */
export function printAnswer345(opTypeGroup: OperationTypeGroups, opGroup: OperationGroups, durationMethod: EGraphqlDurationsMethod) {
  switch (durationMethod) {
    case EGraphqlDurationsMethod.AVG:
      console.log('Average duration times grouped by operation type');
      for (const opTypeString of Object.keys(opTypeGroup)) {
        const opType = opTypeString as EOperationType;
        console.log(`${capitalize(opType)}: ${opTypeGroup[opType]!.durations.average!}`);
      }

      console.log('\nAverage duration times grouped by operation');
      for (const opString of Object.keys(opGroup)) {
        console.log(`${opString}: ${opGroup[opString].durations.average!}`);
      }

      break;
    case EGraphqlDurationsMethod.MAX:
      console.log('Max duration times grouped by operation type');
      for (const opTypeString of Object.keys(opTypeGroup)) {
        const opType = opTypeString as EOperationType;
        console.log(`${capitalize(opType)}: ${opTypeGroup[opType]!.durations.max!}`);
      }

      console.log('\nMax duration times grouped by operation');
      for (const opString of Object.keys(opGroup)) {
        console.log(`${opString}: ${opGroup[opString].durations.max!}`);
      }

      break;
    case EGraphqlDurationsMethod.MIN:
      console.log('Min duration times grouped by operation type');
      for (const opTypeString of Object.keys(opTypeGroup)) {
        const opType = opTypeString as EOperationType;
        console.log(`${capitalize(opType)}: ${opTypeGroup[opType]!.durations.min!}`);
      }

      console.log('\nMin duration times grouped by operation');
      for (const opString of Object.keys(opGroup)) {
        console.log(`${opString}: ${opGroup[opString].durations.min!}`);
      }
      break;
  }

  console.log('');

}