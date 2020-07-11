import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
//import * as iam from '@aws-cdk/aws-iam';
import * as cloudfront from '@aws-cdk/aws-cloudfront';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const bucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: 'wellcall-app-cdk',
      websiteIndexDocument: 'index.html'
    });

    // USE WHEN SERVING FROM BUCKET
    // const bucketPolicy = new iam.PolicyStatement({
    //   actions: ['s3:GetObject'],
    //   resources: [
    //     `${bucket.bucketArn}/*`
    //   ],
    //   principals: [new iam.Anyone()],
    // })
    // bucket.addToResourcePolicy(bucketPolicy);

    // USE WHEN SERVING FROM OAI
    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'OAI');

    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'MyDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: cloudFrontOAI,
          },
          behaviors: [{ isDefaultBehavior: true }]
        }
      ]
    })
    
    bucket.grantRead(cloudFrontOAI.grantPrincipal);
  }
}
