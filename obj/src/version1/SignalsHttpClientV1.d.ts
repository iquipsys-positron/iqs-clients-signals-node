import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { SignalV1 } from './SignalV1';
import { ISignalsClientV1 } from './ISignalsClientV1';
export declare class SignalsHttpClientV1 extends CommandableHttpClient implements ISignalsClientV1 {
    constructor(config?: any);
    getSignals(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<SignalV1>) => void): void;
    sendSignal(correlationId: string, signal: SignalV1, callback: (err: any, signal: SignalV1) => void): void;
    lockSignal(correlationId: string, signal_id: string, callback: (err: any, result: boolean) => void): void;
    markSignalSent(correlationId: string, signal_id: string, callback: (err: any, result: boolean) => void): void;
    deleteSignalById(correlationId: string, signalId: string, callback: (err: any, signal: SignalV1) => void): void;
}
