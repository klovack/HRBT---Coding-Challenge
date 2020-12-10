import fs from "fs";
import path from "path";
import { OperationGroups } from "../types/operationType";
import { GraphqlDurations } from "../types/graphqlDurations";

export function createGraphqlDurationSQL(opGroup: OperationGroups) {
  // Check the file and delete it if it already exists
  const sqlFilePath = path.join(__dirname, '../result.sql');
  if (fs.existsSync(sqlFilePath)) {
    fs.unlinkSync(sqlFilePath);
  }

  // Create stream to make sure we're appending the file instead of rewriting it.
  var stream = fs.createWriteStream(sqlFilePath, { flags: 'a' });
  for (const opString of Object.keys(opGroup)) {
    const gqlDurs = GraphqlDurations.fromOperation(opString, opGroup[opString]);
    gqlDurs.forEach(gqlDur => {
      stream.write(gqlDur.toSQLInsert() + '\n');
    });
  }

  // Close the stream
  stream.end();
}
