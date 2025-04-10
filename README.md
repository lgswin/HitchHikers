# 🚗 Hitchhikers (Web app)

A full-stack serverless web application built using AWS services and React.js, allowing passengers and drivers to register schedules, request rides, and confirm bookings. Designed with scalability, cost-efficiency, and simplicity in mind.

---

## 📌 Project Goal

Create a cloud-native ride-sharing web application where:
- Passengers can register and view ride schedules
- Drivers can browse and request ride schedules
- Passengers can approve requests and communicate with drivers

All using a secure, scalable, and low-cost infrastructure powered by AWS.

---

## 🔧 Technology Stack

### ✅ Frontend
- **React.js** (with Vite)
- **Tailwind CSS** + **Shadcn/UI** (UI components)
- **React Router** (page navigation)
- **Redux Toolkit** or **Zustand** (state management)
- **Axios** + **React Query** (API handling and caching)

### ✅ Authentication
- **AWS Cognito**
  - Email/password login
  - Google OAuth (social login)
- **Amplify Auth SDK** for easy integration

### ✅ Backend (Serverless)
- **AWS Amplify**
  - GraphQL API auto-generation (AppSync)
  - Lambda function auto-deployment
  - DynamoDB table auto-creation
  - Real-time data synchronization
  - API request/response auto-generation
  - Backend resource auto-management
  - Local development environment support

### ✅ CI/CD & Hosting
- **AWS Amplify**
  - Automated deployment (GitHub integration)
  - Branch-based environment separation (dev, staging, prod)
  - Preview deployment (Pull Request)
  - CDN and HTTPS support
  - Build optimization and caching
  - Automatic rollback
  - Monitoring and alerts

---

## 🧭 Application Features

### 👥 Passenger Flow
- Register a ride (departure, destination, date, time)
- View your own schedules
- See incoming driver requests
- Approve a driver → see contact details

### 🚗 Driver Flow
- View open schedules from passengers
- Request to take a ride
- Wait for approval → get contact info when confirmed

### ✅ Shared Functionality
- Both roles can access "My Schedules"
- All state updates handled via API and stored in DynamoDB
- Support for real-time updates or polling (planned)

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

- Build the React app
- Upload to S3 static bucket
- Invalidate CloudFront cache
- Credentials stored in GitHub Secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION`
  - `S3_BUCKET_NAME`

---

## 🛡 Cost & Scalability

- All services fall within AWS Free Tier limits during development
- Serverless design means pay-per-use pricing
- Can scale automatically based on demand

---

## 📊 Monitoring & Logging

### ✅ CloudWatch Integration
- Application metrics monitoring
- Lambda function performance tracking
- API Gateway request monitoring
- DynamoDB table metrics
- Custom metrics for business logic

### ✅ Logging System
- Centralized log collection
- Log retention policies
- Log analysis and search
- Error tracking and debugging

### ✅ Alerting System (SNS)
- Email notifications for:
  - System errors and exceptions
  - Performance threshold breaches
  - Security incidents
  - Cost anomalies
- Configurable alert thresholds
- Multiple notification channels support

### ✅ Dashboard
- Real-time system health monitoring
- Performance metrics visualization
- Cost tracking and analysis
- User activity monitoring

---

## 🗂 Flow Diagram

![hitchhykers](https://github.com/user-attachments/assets/5ca099fd-d401-4a75-8c6d-78d9e2327d00)

---
...