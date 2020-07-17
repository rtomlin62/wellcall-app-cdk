import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as iam from '@aws-cdk/aws-iam';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
// import * as route53 from '@aws-cdk/aws-route53';
// import * as certificateManager from '@aws-cdk/aws-certificatemanager';
// import * as targets from '@aws-cdk/aws-route53-targets';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: 'wellcall-app-cdk',
      websiteIndexDocument: 'index.html'
    });
    // USE WHEN SERVING FROM BUCKET
    const bucketPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [
        `${bucket.bucketArn}/*`
      ],
      principals: [new iam.Anyone()],
    })
    bucket.addToResourcePolicy(bucketPolicy);

    // USE WHEN SERVING FROM OAI
    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'OAI');

    bucket.grantRead(cloudFrontOAI.grantPrincipal);
  }
}
