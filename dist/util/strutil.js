"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
function capitalize([first, ...rest]) {
    return [first.toLocaleUpperCase(), ...rest].join('');
}
exports.capitalize = capitalize;
