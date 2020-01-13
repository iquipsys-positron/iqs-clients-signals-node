import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ISignalsClientV1 } from './ISignalsClientV1';
//import { ISignalsController } from 'iqs-services-signals-node';
import { SignalV1 } from './SignalV1';

export class SignalsDirectClientV1 extends DirectClient<any> implements ISignalsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-signals", "controller", "*", "*", "*"))
    }

    public getSignals(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<SignalV1>) => void): void {
        let timing = this.instrument(correlationId, 'signals.get_signals');
        this._controller.getSignals(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public sendSignal(correlationId: string, signal: SignalV1, 
        callback: (err: any, signal: SignalV1) => void): void {
        let timing = this.instrument(correlationId, 'signals.send_signal');
        this._controller.sendSignal(correlationId, signal, (err, signal) => {
            timing.endTiming();
            callback(err, signal);
        });
    }

    public lockSignal(correlationId: string, signal_id: string, 
        callback: (err: any, result: boolean) => void): void {
        let timing = this.instrument(correlationId, 'signals.lock_signal');
        this._controller.lockSignal(correlationId, signal_id, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    public markSignalSent(correlationId: string, signal_id: string, 
        callback: (err: any, result: boolean) => void): void {
        let timing = this.instrument(correlationId, 'signals.mark_signal_sent');
        this._controller.markSignalSent(correlationId, signal_id, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    
    public deleteSignalById(correlationId: string, signalId: string,
        callback: (err: any, signal: SignalV1) => void): void {
        let timing = this.instrument(correlationId, 'signals.delete_signal_by_id');
        this._controller.deleteSignalById(correlationId, signalId, (err, signal) => {
            timing.endTiming();
            callback(err, signal);
        });
    }
}