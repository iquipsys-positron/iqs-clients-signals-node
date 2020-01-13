let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { SignalsMemoryPersistence } from 'iqs-services-signals-node';
import { SignalsController } from 'iqs-services-signals-node';
import { ISignalsClientV1 } from '../../src/version1/ISignalsClientV1';
import { SignalsDirectClientV1 } from '../../src/version1/SignalsDirectClientV1';
import { SignalsClientFixtureV1 } from './SignalsClientFixtureV1';

suite('SignalsDirectClientV1', ()=> {
    let client: SignalsDirectClientV1;
    let fixture: SignalsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new SignalsMemoryPersistence();
        let controller = new SignalsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-signals', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-signals', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new SignalsDirectClientV1();
        client.setReferences(references);

        fixture = new SignalsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
