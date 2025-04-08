# AWS Amplify Setup Guide

## Prerequisites
- Node.js and npm installed
- AWS Account
- AWS CLI configured (optional)

## Installation Steps

### 1. Install Amplify CLI
```bash
npm install -g @aws-amplify/cli
```

### 2. Configure Amplify CLI
```bash
amplify configure
```
Follow the prompts:
1. Open browser and sign in to AWS Console
2. Enter AWS Access Key ID
3. Enter AWS Secret Access Key
4. Enter profile name (default: default)

![Screenshot 2025-04-08 at 10 51 50 AM](https://github.com/user-attachments/assets/5c5e6341-f97e-4cbc-9ff8-f2f26133af92)

![Screenshot 2025-04-08 at 10 55 50 AM](https://github.com/user-attachments/assets/176b45b2-3225-4bb6-a10a-109aac5a9d45)

### 3. Initialize Amplify Project
```bash
amplify init
```
Follow the prompts:
1. Enter project name: `carpooling`
2. Enter environment name: `dev`
3. Choose default editor: `code` (VS Code)
4. Choose app type: `javascript`
5. Choose framework: `react`
6. Enter source directory: `frontend/src`
7. Enter distribution directory: `frontend/dist`
8. Enter build command: `npm run build`
9. Enter start command: `npm run dev`
10. Use AWS profile: `Yes`
11. Choose profile: `default` (or your configured profile)

```
? Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
✔ Choose the type of app that you're building · javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  frontend/src
? Distribution Directory Path: frontend/dist
? Build Command:  npm run build
? Start Command: npm run dev
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use default
Adding backend environment dev to AWS Amplify app: d12sphuiya26sq

Deploying resources into dev environment. This will take a few minutes. ⠏
Deploying root stack HitchHikers [ ---------------------------------------
        amplify-hitchhikers-dev-5fe1b  AWS::CloudFormation::Stack     CREATE_IN_P
        AuthRole                       AWS::IAM::Role                 CREATE_IN_P
        DeploymentBucket               AWS::S3::Bucket                CREATE_IN_P
        UnauthRole                     AWS::IAM::Role                 CREATE_IN_P
```

### 4. Add Authentication
```bash
amplify add auth
```
Follow the prompts:
1. Choose "Walkthrough all the auth configurations"
2. Choose "Username" for sign in
3. Configure advanced settings: `No`
4. Add User Pool Groups: `Yes`
   - Add groups: admin, driver, user
5. Configure OAuth flow: `No`
6. Configure Lambda Triggers: `No`

### 5. Deploy Auth Configuration
```bash
amplify push
```
This will:
1. Create Cognito User Pool
2. Create User Pool Groups
3. Set up authentication

### 6. Add GraphQL API
```bash
amplify add api
```
Follow the prompts:
1. Choose service: `GraphQL`
2. Enter API name: `carpooling`
3. Choose authorization type: `Amazon Cognito User Pool`
4. Enter API description: `Carpooling Service API`
5. Configure advanced settings: `Yes`
6. Configure additional auth types: `No`
7. Configure conflict detection: `No`
8. Use annotated schema: `Yes`
9. Enter schema file path: `amplify/backend/api/carpooling/schema.graphql`

### 7. Deploy API Changes
```bash
amplify push
```
This will:
1. Validate GraphQL schema
2. Create DynamoDB tables
3. Create Lambda functions
4. Deploy API

```
....
Deployed auth userPoolGroups [ ======================================== ] 3/3
        adminGroup                     AWS::Cognito::UserPoolGroup    CREATE_COMPLETE  
        driversGroup                   AWS::Cognito::UserPoolGroup    CREATE_COMPLETE  
        usersGroup                     AWS::Cognito::UserPoolGroup    CREATE_COMPLETE  

✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/API.ts
Deployment state saved successfully.

GraphQL endpoint: https://lsla3m3ujna2xc34aqdry2xtpm.appsync-api.us-east-1.amazonaws.com/graphql

GraphQL transformer version: 2
```

![Screenshot 2025-04-08 at 12 01 22 PM](https://github.com/user-attachments/assets/bf0577fe-89ec-4b3c-991f-82d4e01dc339)


## Verification
After deployment, verify the setup:
1. Check AWS Console for created resources
2. Verify GraphQL API endpoint
3. Test API with sample queries

## Troubleshooting
If you encounter issues:
1. Check AWS credentials
2. Verify Amplify CLI version
3. Check project configuration
4. Review error messages in AWS Console

## Additional Resources
- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [GraphQL API Guide](https://docs.aws.amazon.com/appsync/latest/devguide/welcome.html)
- [AWS Amplify CLI Reference](https://docs.aws.amazon.com/cli/latest/reference/amplify/) 