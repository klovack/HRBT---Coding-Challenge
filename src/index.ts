import fs from "fs";
import path from "path";
import readline from 'readline';
import { OperationTypeGroups, OperationGroups } from "./types/operationType";
import { printAnswer1, printAnswer2, printAnswer345 } from './util/answers';
import { EGraphqlDurationsMethod } from "./types/graphqlDurations";
import { parseRawOperation } from "./util/parseRawOperation";
import { appendOperationTypeGroup, appendOperation } from "./util/appendOperations";

async function main() {
  const fileStream = fs.createReadStream(path.join(__dirname, "../logs.log"));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let opTypeGroup: OperationTypeGroups = {};
  let opGroup: OperationGroups = {};

  for await (const line of rl) {
    const rawOperation = parseRawOperation(line);
    if (!rawOperation) {
      continue;
    }

    opTypeGroup[rawOperation.operationType] = appendOperationTypeGroup(opTypeGroup[rawOperation.operationType], rawOperation);
    opGroup[rawOperation.operation] = appendOperation(opGroup[rawOperation.operation], rawOperation);
  }

  printAnswer1(opTypeGroup);
  printAnswer2(opGroup);
  printAnswer345(opTypeGroup, opGroup, EGraphqlDurationsMethod.AVG);
  printAnswer345(opTypeGroup, opGroup, EGraphqlDurationsMethod.MAX);
  printAnswer345(opTypeGroup, opGroup, EGraphqlDurationsMethod.MIN);
}

main();