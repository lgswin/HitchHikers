/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../frontend/src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createDriver = /* GraphQL */ `mutation CreateDriver(
  $input: CreateDriverInput!
  $condition: ModelDriverConditionInput
) {
  createDriver(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDriverMutationVariables,
  APITypes.CreateDriverMutation
>;
export const updateDriver = /* GraphQL */ `mutation UpdateDriver(
  $input: UpdateDriverInput!
  $condition: ModelDriverConditionInput
) {
  updateDriver(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDriverMutationVariables,
  APITypes.UpdateDriverMutation
>;
export const deleteDriver = /* GraphQL */ `mutation DeleteDriver(
  $input: DeleteDriverInput!
  $condition: ModelDriverConditionInput
) {
  deleteDriver(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDriverMutationVariables,
  APITypes.DeleteDriverMutation
>;
export const createSchedule = /* GraphQL */ `mutation CreateSchedule(
  $input: CreateScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  createSchedule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateScheduleMutationVariables,
  APITypes.CreateScheduleMutation
>;
export const updateSchedule = /* GraphQL */ `mutation UpdateSchedule(
  $input: UpdateScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  updateSchedule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateScheduleMutationVariables,
  APITypes.UpdateScheduleMutation
>;
export const deleteSchedule = /* GraphQL */ `mutation DeleteSchedule(
  $input: DeleteScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  deleteSchedule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteScheduleMutationVariables,
  APITypes.DeleteScheduleMutation
>;
export const createBooking = /* GraphQL */ `mutation CreateBooking(
  $input: CreateBookingInput!
  $condition: ModelBookingConditionInput
) {
  createBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookingMutationVariables,
  APITypes.CreateBookingMutation
>;
export const updateBooking = /* GraphQL */ `mutation UpdateBooking(
  $input: UpdateBookingInput!
  $condition: ModelBookingConditionInput
) {
  updateBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookingMutationVariables,
  APITypes.UpdateBookingMutation
>;
export const deleteBooking = /* GraphQL */ `mutation DeleteBooking(
  $input: DeleteBookingInput!
  $condition: ModelBookingConditionInput
) {
  deleteBooking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookingMutationVariables,
  APITypes.DeleteBookingMutation
>;
export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
