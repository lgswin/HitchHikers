/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    email
    phone
    profileImage
    rating
    totalRides
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      phone
      profileImage
      rating
      totalRides
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getDriver = /* GraphQL */ `query GetDriver($id: ID!) {
  getDriver(id: $id) {
    id
    username
    email
    phone
    profileImage
    rating
    totalTrips
    licenseNumber
    vehicleInfo {
      make
      model
      year
      color
      licensePlate
      capacity
      __typename
    }
    isAvailable
    documents {
      type
      url
      verified
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetDriverQueryVariables, APITypes.GetDriverQuery>;
export const listDrivers = /* GraphQL */ `query ListDrivers(
  $filter: ModelDriverFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      phone
      profileImage
      rating
      totalTrips
      licenseNumber
      isAvailable
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDriversQueryVariables,
  APITypes.ListDriversQuery
>;
export const getSchedule = /* GraphQL */ `query GetSchedule($id: ID!) {
  getSchedule(id: $id) {
    id
    driverId
    departure
    destination
    date
    time
    status
    availableSeats
    luggageCount
    details
    price
    vehicleInfo {
      make
      model
      year
      color
      licensePlate
      capacity
      __typename
    }
    bookings {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScheduleQueryVariables,
  APITypes.GetScheduleQuery
>;
export const listSchedules = /* GraphQL */ `query ListSchedules(
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      driverId
      departure
      destination
      date
      time
      status
      availableSeats
      luggageCount
      details
      price
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchedulesQueryVariables,
  APITypes.ListSchedulesQuery
>;
export const getBooking = /* GraphQL */ `query GetBooking($id: ID!) {
  getBooking(id: $id) {
    id
    scheduleId
    userId
    driverId
    status
    numberOfSeats
    luggageCount
    price
    paymentStatus
    paymentMethod
    createdAt
    updatedAt
    scheduleBookingsId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBookingQueryVariables,
  APITypes.GetBookingQuery
>;
export const listBookings = /* GraphQL */ `query ListBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      scheduleId
      userId
      driverId
      status
      numberOfSeats
      luggageCount
      price
      paymentStatus
      paymentMethod
      createdAt
      updatedAt
      scheduleBookingsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBookingsQueryVariables,
  APITypes.ListBookingsQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    scheduleId
    userId
    driverId
    rating
    comment
    type
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      scheduleId
      userId
      driverId
      rating
      comment
      type
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
