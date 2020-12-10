"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const readline_1 = __importDefault(require("readline"));
const answers_1 = require("./util/answers");
const graphqlDurations_1 = require("./types/graphqlDurations");
const parseRawOperation_1 = require("./util/parseRawOperation");
const appendOperations_1 = require("./util/appendOperations");
const createGraphqlDurationSQL_1 = require("./util/createGraphqlDurationSQL");
function main() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function* () {
        const fileStream = fs_1.default.createReadStream(path_1.default.join(__dirname, "../logs.log"));
        const rl = readline_1.default.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        let opTypeGroup = {};
        let opGroup = {};
        try {
            for (var rl_1 = __asyncValues(rl), rl_1_1; rl_1_1 = yield rl_1.next(), !rl_1_1.done;) {
                const line = rl_1_1.value;
                const rawOperation = parseRawOperation_1.parseRawOperation(line);
                if (!rawOperation) {
                    continue;
                }
                opTypeGroup[rawOperation.operationType] = appendOperations_1.appendOperationTypeGroup(opTypeGroup[rawOperation.operationType], rawOperation);
                opGroup[rawOperation.operation] = appendOperations_1.appendOperation(opGroup[rawOperation.operation], rawOperation);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rl_1_1 && !rl_1_1.done && (_a = rl_1.return)) yield _a.call(rl_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        answers_1.printAnswer1(opTypeGroup);
        answers_1.printAnswer2(opGroup);
        answers_1.printAnswer345(opTypeGroup, opGroup, graphqlDurations_1.EGraphqlDurationsMethod.AVG);
        answers_1.printAnswer345(opTypeGroup, opGroup, graphqlDurations_1.EGraphqlDurationsMethod.MAX);
        answers_1.printAnswer345(opTypeGroup, opGroup, graphqlDurations_1.EGraphqlDurationsMethod.MIN);
        createGraphqlDurationSQL_1.createGraphqlDurationSQL(opGroup);
    });
}
main();
