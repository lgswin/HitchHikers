/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../frontend/src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateDriver = /* GraphQL */ `subscription OnCreateDriver(
  $filter: ModelSubscriptionDriverFilterInput
  $owner: String
) {
  onCreateDriver(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDriverSubscriptionVariables,
  APITypes.OnCreateDriverSubscription
>;
export const onUpdateDriver = /* GraphQL */ `subscription OnUpdateDriver(
  $filter: ModelSubscriptionDriverFilterInput
  $owner: String
) {
  onUpdateDriver(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDriverSubscriptionVariables,
  APITypes.OnUpdateDriverSubscription
>;
export const onDeleteDriver = /* GraphQL */ `subscription OnDeleteDriver(
  $filter: ModelSubscriptionDriverFilterInput
  $owner: String
) {
  onDeleteDriver(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDriverSubscriptionVariables,
  APITypes.OnDeleteDriverSubscription
>;
export const onCreateSchedule = /* GraphQL */ `subscription OnCreateSchedule(
  $filter: ModelSubscriptionScheduleFilterInput
  $owner: String
) {
  onCreateSchedule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScheduleSubscriptionVariables,
  APITypes.OnCreateScheduleSubscription
>;
export const onUpdateSchedule = /* GraphQL */ `subscription OnUpdateSchedule(
  $filter: ModelSubscriptionScheduleFilterInput
  $owner: String
) {
  onUpdateSchedule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScheduleSubscriptionVariables,
  APITypes.OnUpdateScheduleSubscription
>;
export const onDeleteSchedule = /* GraphQL */ `subscription OnDeleteSchedule(
  $filter: ModelSubscriptionScheduleFilterInput
  $owner: String
) {
  onDeleteSchedule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScheduleSubscriptionVariables,
  APITypes.OnDeleteScheduleSubscription
>;
export const onCreateBooking = /* GraphQL */ `subscription OnCreateBooking(
  $filter: ModelSubscriptionBookingFilterInput
  $owner: String
) {
  onCreateBooking(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookingSubscriptionVariables,
  APITypes.OnCreateBookingSubscription
>;
export const onUpdateBooking = /* GraphQL */ `subscription OnUpdateBooking(
  $filter: ModelSubscriptionBookingFilterInput
  $owner: String
) {
  onUpdateBooking(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookingSubscriptionVariables,
  APITypes.OnUpdateBookingSubscription
>;
export const onDeleteBooking = /* GraphQL */ `subscription OnDeleteBooking(
  $filter: ModelSubscriptionBookingFilterInput
  $owner: String
) {
  onDeleteBooking(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookingSubscriptionVariables,
  APITypes.OnDeleteBookingSubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onCreateReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onUpdateReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview(
  $filter: ModelSubscriptionReviewFilterInput
  $owner: String
) {
  onDeleteReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
