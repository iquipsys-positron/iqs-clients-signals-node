"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const SignalsNullClientV1_1 = require("../version1/SignalsNullClientV1");
const SignalsDirectClientV1_1 = require("../version1/SignalsDirectClientV1");
const SignalsHttpClientV1_1 = require("../version1/SignalsHttpClientV1");
const SignalsLambdaClientV1_1 = require("../version1/SignalsLambdaClientV1");
class SignalsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(SignalsClientFactory.NullClientV1Descriptor, SignalsNullClientV1_1.SignalsNullClientV1);
        this.registerAsType(SignalsClientFactory.DirectClientV1Descriptor, SignalsDirectClientV1_1.SignalsDirectClientV1);
        this.registerAsType(SignalsClientFactory.HttpClientV1Descriptor, SignalsHttpClientV1_1.SignalsHttpClientV1);
        this.registerAsType(SignalsClientFactory.LambdaClientV1Descriptor, SignalsLambdaClientV1_1.SignalsLambdaClientV1);
    }
}
exports.SignalsClientFactory = SignalsClientFactory;
SignalsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-signals', 'factory', 'default', 'default', '1.0');
SignalsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-signals', 'client', 'null', 'default', '1.0');
SignalsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-signals', 'client', 'direct', 'default', '1.0');
SignalsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-signals', 'client', 'http', 'default', '1.0');
SignalsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-signals', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=SignalsClientFactory.js.map