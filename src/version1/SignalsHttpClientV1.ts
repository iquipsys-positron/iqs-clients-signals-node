import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { SignalV1 } from './SignalV1';
import { ISignalsClientV1 } from './ISignalsClientV1';

export class SignalsHttpClientV1 extends CommandableHttpClient implements ISignalsClientV1 {       
    
    constructor(config?: any) {
        super('v1/signals');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getSignals(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<SignalV1>) => void): void {
        this.callCommand( 
            'get_signals', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public sendSignal(correlationId: string, signal: SignalV1,
        callback: (err: any, signal: SignalV1) => void): void {
        this.callCommand(
            'send_signal',
            correlationId,
            {
                signal: signal
            }, 
            callback
        );
    }

    public lockSignal(correlationId: string, signal_id: string, 
        callback: (err: any, result: boolean) => void): void {
        this.callCommand(
            'lock_signal',
            correlationId,
            {
                signal_id: signal_id
            }, 
            (err, result) => {
                callback(err, result ? result.result : null);
            }
        );
    }

    public markSignalSent(correlationId: string, signal_id: string, 
        callback: (err: any, result: boolean) => void): void {
        this.callCommand(
            'mark_signal_sent',
            correlationId,
            {
                signal_id: signal_id
            }, 
            (err, result) => {
                callback(err, result ? result.result : null);
            }
        );
    }
    
    public deleteSignalById(correlationId: string, signalId: string,
        callback: (err: any, signal: SignalV1) => void): void {
        this.callCommand(
            'delete_signal_by_id', 
            correlationId,
            {
                signal_id: signalId
            }, 
            callback
        );
    }
    
}
