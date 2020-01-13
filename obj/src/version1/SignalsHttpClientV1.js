"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class SignalsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/signals');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getSignals(correlationId, filter, paging, callback) {
        this.callCommand('get_signals', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    sendSignal(correlationId, signal, callback) {
        this.callCommand('send_signal', correlationId, {
            signal: signal
        }, callback);
    }
    lockSignal(correlationId, signal_id, callback) {
        this.callCommand('lock_signal', correlationId, {
            signal_id: signal_id
        }, (err, result) => {
            callback(err, result ? result.result : null);
        });
    }
    markSignalSent(correlationId, signal_id, callback) {
        this.callCommand('mark_signal_sent', correlationId, {
            signal_id: signal_id
        }, (err, result) => {
            callback(err, result ? result.result : null);
        });
    }
    deleteSignalById(correlationId, signalId, callback) {
        this.callCommand('delete_signal_by_id', correlationId, {
            signal_id: signalId
        }, callback);
    }
}
exports.SignalsHttpClientV1 = SignalsHttpClientV1;
//# sourceMappingURL=SignalsHttpClientV1.js.map