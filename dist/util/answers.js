"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAnswer345 = exports.printAnswer2 = exports.printAnswer1 = void 0;
const graphqlDurations_1 = require("../types/graphqlDurations");
const strutil_1 = require("./strutil");
function printAnswer1(opTypeGroup) {
    console.log("Number of operations performed grouped by operation type: ");
    for (const opTypeString of Object.keys(opTypeGroup)) {
        const opType = opTypeString;
        console.log(`${strutil_1.capitalize(opType)}: ${opTypeGroup[opType].numberPerformed}`);
    }
    console.log('');
}
exports.printAnswer1 = printAnswer1;
function printAnswer2(opGroup) {
    console.log("Number of operations performed grouped by operation: ");
    for (const opString of Object.keys(opGroup)) {
        console.log(`${opString}: ${opGroup[opString].numberPerform}`);
    }
    console.log('');
}
exports.printAnswer2 = printAnswer2;
function printAnswer345(opTypeGroup, opGroup, durationMethod) {
    switch (durationMethod) {
        case graphqlDurations_1.EGraphqlDurationsMethod.AVG:
            console.log('Average duration times grouped by operation type');
            for (const opTypeString of Object.keys(opTypeGroup)) {
                const opType = opTypeString;
                console.log(`${strutil_1.capitalize(opType)}: ${opTypeGroup[opType].durations.average}`);
            }
            console.log('\nAverage duration times grouped by operation');
            for (const opString of Object.keys(opGroup)) {
                console.log(`${opString}: ${opGroup[opString].durations.average}`);
            }
            break;
        case graphqlDurations_1.EGraphqlDurationsMethod.MAX:
            console.log('Max duration times grouped by operation type');
            for (const opTypeString of Object.keys(opTypeGroup)) {
                const opType = opTypeString;
                console.log(`${strutil_1.capitalize(opType)}: ${opTypeGroup[opType].durations.max}`);
            }
            console.log('\nMax duration times grouped by operation');
            for (const opString of Object.keys(opGroup)) {
                console.log(`${opString}: ${opGroup[opString].durations.max}`);
            }
            break;
        case graphqlDurations_1.EGraphqlDurationsMethod.MIN:
            console.log('Min duration times grouped by operation type');
            for (const opTypeString of Object.keys(opTypeGroup)) {
                const opType = opTypeString;
                console.log(`${strutil_1.capitalize(opType)}: ${opTypeGroup[opType].durations.min}`);
            }
            console.log('\nMin duration times grouped by operation');
            for (const opString of Object.keys(opGroup)) {
                console.log(`${opString}: ${opGroup[opString].durations.min}`);
            }
            break;
    }
    console.log('');
}
exports.printAnswer345 = printAnswer345;
