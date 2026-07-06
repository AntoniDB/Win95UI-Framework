"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cx = cx;
exports.uid = uid;
function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
let idCounter = 0;
function uid(prefix) {
    idCounter += 1;
    return `${prefix}-${idCounter}`;
}
