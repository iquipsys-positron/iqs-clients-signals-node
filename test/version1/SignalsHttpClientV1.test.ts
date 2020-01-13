let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { SignalsMemoryPersistence } from 'iqs-services-signals-node';
import { SignalsController } from 'iqs-services-signals-node';
import { SignalsHttpServiceV1 } from 'iqs-services-signals-node';
import { ISignalsClientV1 } from '../../src/version1/ISignalsClientV1';
import { SignalsHttpClientV1 } from '../../src/version1/SignalsHttpClientV1';
import { SignalsClientFixtureV1 } from './SignalsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SignalsHttpClientV1', ()=> {
    let service: SignalsHttpServiceV1;
    let client: SignalsHttpClientV1;
    let fixture: SignalsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new SignalsMemoryPersistence();
        let controller = new SignalsController();

        service = new SignalsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-signals', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-signals', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-signals', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SignalsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new SignalsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
