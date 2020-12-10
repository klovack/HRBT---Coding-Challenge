"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGraphqlDurationSQL = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const graphqlDurations_1 = require("../types/graphqlDurations");
function createGraphqlDurationSQL(opGroup) {
    const sqlFilePath = path_1.default.join(__dirname, '../result.sql');
    if (fs_1.default.existsSync(sqlFilePath)) {
        fs_1.default.unlinkSync(sqlFilePath);
    }
    var stream = fs_1.default.createWriteStream(sqlFilePath, { flags: 'a' });
    for (const opString of Object.keys(opGroup)) {
        const gqlDurs = graphqlDurations_1.GraphqlDurations.fromOperation(opString, opGroup[opString]);
        gqlDurs.forEach(gqlDur => {
            stream.write(gqlDur.toSQLInsert() + '\n');
        });
    }
    stream.end();
}
exports.createGraphqlDurationSQL = createGraphqlDurationSQL;
