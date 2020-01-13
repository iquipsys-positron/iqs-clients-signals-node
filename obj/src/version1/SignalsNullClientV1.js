"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class SignalsNullClientV1 {
    getSignals(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    sendSignal(correlationId, signal, callback) {
        callback(null, signal);
    }
    lockSignal(correlationId, signal_id, callback) {
        callback(null, true);
    }
    markSignalSent(correlationId, signal_id, callback) {
        callback(null, true);
    }
    deleteSignalById(correlationId, signalId, callback) {
        callback(null, null);
    }
}
exports.SignalsNullClientV1 = SignalsNullClientV1;
//# sourceMappingURL=SignalsNullClientV1.js.map