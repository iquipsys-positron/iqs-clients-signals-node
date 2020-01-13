"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class SignalsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-signals", "controller", "*", "*", "*"));
    }
    getSignals(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'signals.get_signals');
        this._controller.getSignals(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    sendSignal(correlationId, signal, callback) {
        let timing = this.instrument(correlationId, 'signals.send_signal');
        this._controller.sendSignal(correlationId, signal, (err, signal) => {
            timing.endTiming();
            callback(err, signal);
        });
    }
    lockSignal(correlationId, signal_id, callback) {
        let timing = this.instrument(correlationId, 'signals.lock_signal');
        this._controller.lockSignal(correlationId, signal_id, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    markSignalSent(correlationId, signal_id, callback) {
        let timing = this.instrument(correlationId, 'signals.mark_signal_sent');
        this._controller.markSignalSent(correlationId, signal_id, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    deleteSignalById(correlationId, signalId, callback) {
        let timing = this.instrument(correlationId, 'signals.delete_signal_by_id');
        this._controller.deleteSignalById(correlationId, signalId, (err, signal) => {
            timing.endTiming();
            callback(err, signal);
        });
    }
}
exports.SignalsDirectClientV1 = SignalsDirectClientV1;
//# sourceMappingURL=SignalsDirectClientV1.js.map