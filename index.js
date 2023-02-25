"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.NumberDictionary = exports.StringDictionary = exports.OperationResultStatus = exports.OperationResult = void 0;
var operation_result_1 = require("./lib/operation-result");
__createBinding(exports, operation_result_1, "OperationResult");
__createBinding(exports, operation_result_1, "OperationResultStatus");
var dictionary_1 = require("./lib/dictionary");
__createBinding(exports, dictionary_1, "StringDictionary");
__createBinding(exports, dictionary_1, "NumberDictionary");
