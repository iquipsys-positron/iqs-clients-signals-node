import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { SignalsNullClientV1 } from '../version1/SignalsNullClientV1';
import { SignalsDirectClientV1 } from '../version1/SignalsDirectClientV1';
import { SignalsHttpClientV1 } from '../version1/SignalsHttpClientV1';
import { SignalsLambdaClientV1 } from '../version1/SignalsLambdaClientV1';

export class SignalsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-signals', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-signals', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-signals', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-signals', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-signals', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SignalsClientFactory.NullClientV1Descriptor, SignalsNullClientV1);
		this.registerAsType(SignalsClientFactory.DirectClientV1Descriptor, SignalsDirectClientV1);
		this.registerAsType(SignalsClientFactory.HttpClientV1Descriptor, SignalsHttpClientV1);
		this.registerAsType(SignalsClientFactory.LambdaClientV1Descriptor, SignalsLambdaClientV1);
	}
	
}
