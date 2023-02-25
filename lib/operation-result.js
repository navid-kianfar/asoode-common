"use strict";
exports.__esModule = true;
exports.OperationResult = exports.OperationResultStatus = void 0;
var OperationResultStatus;
(function (OperationResultStatus) {
    OperationResultStatus[OperationResultStatus["pending"] = 0] = "pending";
    OperationResultStatus[OperationResultStatus["progress"] = 1] = "progress";
    OperationResultStatus[OperationResultStatus["failed"] = 2] = "failed";
    OperationResultStatus[OperationResultStatus["success"] = 3] = "success";
    OperationResultStatus[OperationResultStatus["notFound"] = 5] = "notFound";
    OperationResultStatus[OperationResultStatus["unauthorized"] = 5] = "unauthorized";
})(OperationResultStatus = exports.OperationResultStatus || (exports.OperationResultStatus = {}));
var OperationResult = /** @class */ (function () {
    function OperationResult() {
        this.status = OperationResultStatus.pending;
    }
    OperationResult.success = function (data) {
        var result = new OperationResult();
        result.data = data;
        result.status = OperationResultStatus.success;
        return result;
    };
    OperationResult.failed = function (err) {
        var result = new OperationResult();
        result.message = err === null || err === void 0 ? void 0 : err.message;
        result.status = OperationResultStatus.failed;
        return result;
    };
    return OperationResult;
}());
exports.OperationResult = OperationResult;
