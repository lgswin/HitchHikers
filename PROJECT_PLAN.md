# Carpooling Service Project Plan

## 1. Project Overview

### 1.1 Purpose
- Provide carpooling service between users
- Safe and convenient carpooling experience

### 1.2 Key Features
- User Authentication (Regular Users/Drivers)
- Schedule Registration and Management
- Booking and Payment System
- Review and Rating System

## 2. Technology Stack

### 2.1 Frontend
- React + TypeScript
- Tailwind CSS
- AWS Amplify UI Components
- React Router
- React Query

### 2.2 Backend
- AWS Amplify
- GraphQL API (AppSync)
- DynamoDB
- Lambda Functions
- Cognito Authentication

### 2.3 Infrastructure
- AWS Cloud
- CI/CD Pipeline
- Monitoring & Logging

## 3. Data Models

### 3.1 User (Regular User)
```graphql
type User @model @auth(rules: [{allow: owner}]) {
  id: ID!
  username: String!
  email: String!
  phone: String
  profileImage: String
  rating: Float
  totalRides: Int
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
```

### 3.2 Driver
```graphql
type Driver @model @auth(rules: [{allow: owner}]) {
  id: ID!
  username: String!
  email: String!
  phone: String
  profileImage: String
  rating: Float
  totalTrips: Int
  licenseNumber: String!
  vehicleInfo: VehicleInfo!
  isAvailable: Boolean!
  documents: [Document!]
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
```

### 3.3 Schedule
```graphql
type Schedule @model @auth(rules: [{allow: owner}]) {
  id: ID!
  driverId: ID!
  departure: String!
  destination: String!
  date: String!
  time: String!
  status: String! # PENDING, CONFIRMED, COMPLETED, CANCELLED
  availableSeats: Int!
  luggageCount: Int!
  details: String
  price: Float!
  vehicleInfo: VehicleInfo!
  bookings: [Booking!] @hasMany
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
```

### 3.4 Booking
```graphql
type Booking @model @auth(rules: [{allow: owner}]) {
  id: ID!
  scheduleId: ID!
  userId: ID!
  driverId: ID!
  status: String! # PENDING, APPROVED, REJECTED, COMPLETED, CANCELLED
  numberOfSeats: Int!
  luggageCount: Int!
  price: Float!
  paymentStatus: String!
  paymentMethod: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
```

### 3.5 Review
```graphql
type Review @model @auth(rules: [{allow: owner}]) {
  id: ID!
  scheduleId: ID!
  userId: ID!
  driverId: ID!
  rating: Int!
  comment: String
  type: String!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
```

## 4. API Endpoints

### 4.1 Authentication API
- Sign Up
- Login
- Social Login
- Password Reset

### 4.2 Schedule API
- Create Schedule
- Get Schedule
- Update Schedule Status
- Delete Schedule
- Get Driver's Schedules
- Get Schedule Bookings
- Update Schedule Status based on Booking

### 4.3 Booking API
- Create Booking Request
- Get Booking
- Update Booking Status (Approve/Reject)
- Get Driver's Bookings
- Get User's Bookings
- Cancel Booking

### 4.4 Review API
- Create Review
- Get Review
- Update Review
- Delete Review

## 5. Real-time Features

### 5.1 Subscriptions
- Schedule Status Changes
- Booking Status Changes

### 5.2 Notifications
- New Booking Requests
- Booking Status Updates (Approved/Rejected)
- Schedule Status Updates
- Payment Completion

## 6. Security

### 6.1 Authentication
- Cognito User Pool
- JWT Tokens
- Social Login

### 6.2 Authorization
- Role-based Access Control
- API Request Limiting
- Data Access Control

## 7. Deployment Plan

### 7.1 Development Environment
- Local Development
- Test Environment
- Staging Environment

### 7.2 Production Environment
- AWS Cloud Deployment
- CI/CD Pipeline
- Monitoring Setup

## 8. Testing Plan

### 8.1 Unit Testing
- Component Testing
- API Testing
- Utility Function Testing

### 8.2 Integration Testing
- API Integration Testing
- Authentication Testing
- Real-time Feature Testing

### 8.3 User Testing
- UI/UX Testing
- Performance Testing
- Security Testing

## 9. Maintenance Plan

### 9.1 Monitoring
- Performance Monitoring
- Error Tracking
- User Behavior Analytics

### 9.2 Updates
- Regular Security Updates
- Feature Improvements
- Bug Fixes

## 10. Timeline

### 10.1 Phase 1 
- Project Setup
- Basic Authentication Implementation
- Basic UI Implementation

### 10.2 Phase 2 
- Schedule Feature Implementation
- Booking Request System Implementation
- Schedule-Booking Integration

### 10.3 Phase 3 
- Deployment Preparation
- Testing and Debugging

### 10.4 Phase 4 
- Review System Implementation

### 10.5 Phase 5
- Payment System Integration
- Performance Optimization
- Security Enhancement


## 11. Risk Management

### 11.1 Technical Risks
- API Performance Issues
- Security Vulnerabilities

### 11.2 Business Risks
- User Acquisition
- Payment System Stability
- Competitor Response 