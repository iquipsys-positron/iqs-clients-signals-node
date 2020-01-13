let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { SignalV1 } from '../../src/version1/SignalV1';
import { ISignalsClientV1 } from '../../src/version1/ISignalsClientV1';

let SIGNAL1: SignalV1 = {
    id: '1',
    org_id: '1',
    time: new Date(),
    device_id: '1',
    type: 1
};
let SIGNAL2: SignalV1 = {
    id: '2',
    org_id: '1',
    time: new Date(),
    device_id: '1',
    type: 2,
    lock_until: new Date().getTime() + 10000
};

export class SignalsClientFixtureV1 {
    private _client: ISignalsClientV1;
    
    constructor(client: ISignalsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let signal1, signal2;

        async.series([
        // Create one signal
            (callback) => {
                this._client.sendSignal(
                    null,
                    SIGNAL1,
                    (err, signal) => {
                        assert.isNull(err);

                        assert.isObject(signal);
                        assert.equal(signal.org_id, SIGNAL1.org_id);
                        assert.equal(signal.type, SIGNAL1.type);
                        assert.equal(signal.device_id, SIGNAL1.device_id);

                        signal1 = signal;

                        callback();
                    }
                );
            },
        // Create another signal
            (callback) => {
                this._client.sendSignal(
                    null,
                    SIGNAL2,
                    (err, signal) => {
                        assert.isNull(err);

                        assert.isObject(signal);
                        assert.equal(signal.org_id, SIGNAL2.org_id);
                        assert.equal(signal.type, SIGNAL2.type);
                        assert.equal(signal.device_id, SIGNAL2.device_id);

                        signal2 = signal;

                        callback();
                    }
                );
            },
        // Get all signals
            (callback) => {
                this._client.getSignals(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, signals) => {
                        assert.isNull(err);

                        assert.isObject(signals);
                        assert.isTrue(signals.data.length >= 2);

                        callback();
                    }
                );
            },
        // Delete signal
            (callback) => {
                this._client.deleteSignalById(
                    null,
                    signal1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    }
}
