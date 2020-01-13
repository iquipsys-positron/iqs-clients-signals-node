import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { ISignalsClientV1 } from './ISignalsClientV1';
import { SignalV1 } from './SignalV1';

export class SignalsNullClientV1 implements ISignalsClientV1 {
            
    public getSignals(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<SignalV1>) => void): void {
        callback(null, new DataPage<SignalV1>([], 0));
    }

    public sendSignal(correlationId: string, signal: SignalV1, 
        callback: (err: any, signal: SignalV1) => void): void {
        callback(null, signal);
    }

    public lockSignal(correlationId: string, signal_id: string, 
        callback: (err: any, result: boolean) => void): void {
        callback(null, true);
    }

    public markSignalSent(correlationId: string, signal_id: string, 
        callback: (err: any, result: boolean) => void): void {
        callback(null, true);
    }
    
    public deleteSignalById(correlationId: string, signalId: string,
        callback: (err: any, signal: SignalV1) => void): void {
        callback(null, null);
    }
}