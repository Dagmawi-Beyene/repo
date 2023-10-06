#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { env as devEnviroment} from '../.env/.dev';
import { config as devConfig} from '../.env/.dev';

import { LambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();
new LambdaStack(app, 'LambdaStackDev', {
  env: devEnviroment,
  bucketName: devConfig.placeholder,
});