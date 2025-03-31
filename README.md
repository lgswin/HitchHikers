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
- **AWS Lambda** – API functions (create, request, approve schedule, etc.)
- **AWS API Gateway** – REST API exposure
- **DynamoDB** – NoSQL database to store schedules and requests

### ✅ CI/CD & Hosting
- **GitHub Actions** – CI/CD automation (on push to `main`)
- **AWS S3** – Static web hosting (React build output)
- **AWS CloudFront** – CDN and HTTPS support

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

## 🗂 Flow Diagram

![hitchhykers](https://github.com/user-attachments/assets/5ca099fd-d401-4a75-8c6d-78d9e2327d00)

---

## 📄 License

MIT License