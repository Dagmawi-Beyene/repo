import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda function
    const lambda = new cdk.aws_lambda.Function(this, 'lambda', {
      runtime: cdk.aws_lambda.Runtime.PYTHON_3_11,
      memorySize: 160,
      architecture: cdk.aws_lambda.Architecture.ARM_64,
      handler: 'index.handler',
      timeout: cdk.Duration.seconds(60),
      code: cdk.aws_lambda.Code.fromAsset(path.join('app', 'src')),
      logRetention: cdk.aws_logs.RetentionDays.ONE_MONTH,
      environment: {
        PLACEHOLDER: 'Placeholder',
      },
    });
  }
}
