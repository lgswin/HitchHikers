import { Amplify } from 'aws-amplify';

// TODO: Replace with your AWS Cognito configuration
const awsConfig = {
  Auth: {
    Cognito: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_u1CddePLY',
      userPoolClientId: '4kf72c4odivb85hs0e17mno2oh'
    }
  }
};

Amplify.configure(awsConfig);

export default awsConfig; 