/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  phone?: string | null,
  profileImage?: string | null,
  rating?: number | null,
  totalRides?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  totalRides?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  phone?: string | null,
  profileImage?: string | null,
  rating?: number | null,
  totalRides?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  phone?: string | null,
  profileImage?: string | null,
  rating?: number | null,
  totalRides?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateDriverInput = {
  id?: string | null,
  username: string,
  email: string,
  phone?: string | null,
  profileImage?: string | null,
  rating?: number | null,
  totalTrips?: number | null,
  licenseNumber: string,
  vehicleInfo: VehicleInfoInput,
  isAvailable: boolean,
  documents?: Array< DocumentInput > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type VehicleInfoInput = {
  make: string,
  model: string,
  year: number,
  color: string,
  licensePlate: string,
  capacity: number,
};

export type DocumentInput = {
  type: string,
  url: string,
  verified: boolean,
};

export type ModelDriverConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  totalTrips?: ModelIntInput | null,
  licenseNumber?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDriverConditionInput | null > | null,
  or?: Array< ModelDriverConditionInput | null > | null,
  not?: ModelDriverConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Driver = {
  __typename: "Driver",
  id: string,
  username: string,
  email: string,
  phone?: string | null,
  profileImage?: string | null,
  rating?: number | null,
  totalTrips?: number | null,
  licenseNumber: string,
  vehicleInfo: VehicleInfo,
  isAvailable: boolean,
  documents?:  Array<Document > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type VehicleInfo = {
  __typename: "VehicleInfo",
  make: string,
  model: string,
  year: number,
  color: string,
  licensePlate: string,
  capacity: number,
};

export type Document = {
  __typename: "Document",
  type: string,
  url: string,
  verified: boolean,
};

export type UpdateDriverInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  phone?: string | null,
  profileImage?: string | null,
  rating?: number | null,
  totalTrips?: number | null,
  licenseNumber?: string | null,
  vehicleInfo?: VehicleInfoInput | null,
  isAvailable?: boolean | null,
  documents?: Array< DocumentInput > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteDriverInput = {
  id: string,
};

export type CreateScheduleInput = {
  driverId: string,
  departure: string,
  destination: string,
  date: string,
  time: string,
  availableSeats: number,
  luggageCount: number,
  details?: string | null,
  price: number,
  vehicleInfo: VehicleInfoInput,
};

export type ModelScheduleConditionInput = {
  driverId?: ModelIDInput | null,
  departure?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  status?: ModelStringInput | null,
  availableSeats?: ModelIntInput | null,
  luggageCount?: ModelIntInput | null,
  details?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScheduleConditionInput | null > | null,
  or?: Array< ModelScheduleConditionInput | null > | null,
  not?: ModelScheduleConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Schedule = {
  __typename: "Schedule",
  id: string,
  driverId: string,
  departure: string,
  destination: string,
  date: string,
  time: string,
  status: string,
  availableSeats: number,
  luggageCount: number,
  details?: string | null,
  price: number,
  vehicleInfo: VehicleInfo,
  bookings?: ModelBookingConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelBookingConnection = {
  __typename: "ModelBookingConnection",
  items:  Array<Booking | null >,
  nextToken?: string | null,
};

export type Booking = {
  __typename: "Booking",
  id: string,
  scheduleId: string,
  userId: string,
  driverId: string,
  status: string,
  numberOfSeats: number,
  luggageCount: number,
  price: number,
  paymentStatus: string,
  paymentMethod?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  scheduleBookingsId?: string | null,
  owner?: string | null,
};

export type UpdateScheduleInput = {
  id: string,
  status?: string | null,
  availableSeats?: number | null,
  details?: string | null,
  price?: number | null,
};

export type DeleteScheduleInput = {
  id: string,
};

export type CreateBookingInput = {
  scheduleId: string,
  userId: string,
  driverId: string,
  numberOfSeats: number,
  luggageCount: number,
  price: number,
  scheduleBookingsId?: string | null,
};

export type ModelBookingConditionInput = {
  scheduleId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  driverId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  numberOfSeats?: ModelIntInput | null,
  luggageCount?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  paymentStatus?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookingConditionInput | null > | null,
  or?: Array< ModelBookingConditionInput | null > | null,
  not?: ModelBookingConditionInput | null,
  scheduleBookingsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateBookingInput = {
  id: string,
  status: string,
  paymentStatus?: string | null,
  paymentMethod?: string | null,
  scheduleBookingsId?: string | null,
};

export type DeleteBookingInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  scheduleId: string,
  userId: string,
  driverId: string,
  rating: number,
  comment?: string | null,
  type: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelReviewConditionInput = {
  scheduleId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  driverId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  owner?: ModelStringInput | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  scheduleId: string,
  userId: string,
  driverId: string,
  rating: number,
  comment?: string | null,
  type: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateReviewInput = {
  id: string,
  scheduleId?: string | null,
  userId?: string | null,
  driverId?: string | null,
  rating?: number | null,
  comment?: string | null,
  type?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  totalRides?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelDriverFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  profileImage?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  totalTrips?: ModelIntInput | null,
  licenseNumber?: ModelStringInput | null,
  isAvailable?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDriverFilterInput | null > | null,
  or?: Array< ModelDriverFilterInput | null > | null,
  not?: ModelDriverFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelDriverConnection = {
  __typename: "ModelDriverConnection",
  items:  Array<Driver | null >,
  nextToken?: string | null,
};

export type ModelScheduleFilterInput = {
  id?: ModelIDInput | null,
  driverId?: ModelIDInput | null,
  departure?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  status?: ModelStringInput | null,
  availableSeats?: ModelIntInput | null,
  luggageCount?: ModelIntInput | null,
  details?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
};

export type ModelBookingFilterInput = {
  id?: ModelIDInput | null,
  scheduleId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  driverId?: ModelIDInput | null,
  status?: ModelStringInput | null,
  numberOfSeats?: ModelIntInput | null,
  luggageCount?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  paymentStatus?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookingFilterInput | null > | null,
  or?: Array< ModelBookingFilterInput | null > | null,
  not?: ModelBookingFilterInput | null,
  scheduleBookingsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  scheduleId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  driverId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  totalRides?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDriverFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  profileImage?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  totalTrips?: ModelSubscriptionIntInput | null,
  licenseNumber?: ModelSubscriptionStringInput | null,
  isAvailable?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  driverId?: ModelSubscriptionIDInput | null,
  departure?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  availableSeats?: ModelSubscriptionIntInput | null,
  luggageCount?: ModelSubscriptionIntInput | null,
  details?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
  scheduleBookingsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBookingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  scheduleId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  driverId?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  numberOfSeats?: ModelSubscriptionIntInput | null,
  luggageCount?: ModelSubscriptionIntInput | null,
  price?: ModelSubscriptionFloatInput | null,
  paymentStatus?: ModelSubscriptionStringInput | null,
  paymentMethod?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookingFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  scheduleId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  driverId?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateDriverMutationVariables = {
  input: CreateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type CreateDriverMutation = {
  createDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateDriverMutationVariables = {
  input: UpdateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type UpdateDriverMutation = {
  updateDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteDriverMutationVariables = {
  input: DeleteDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type DeleteDriverMutation = {
  deleteDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateScheduleMutationVariables = {
  input: CreateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type CreateScheduleMutation = {
  createSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateScheduleMutationVariables = {
  input: UpdateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleMutation = {
  updateSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteScheduleMutationVariables = {
  input: DeleteScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type DeleteScheduleMutation = {
  deleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateBookingMutationVariables = {
  input: CreateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type CreateBookingMutation = {
  createBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBookingMutationVariables = {
  input: UpdateBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type UpdateBookingMutation = {
  updateBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBookingMutationVariables = {
  input: DeleteBookingInput,
  condition?: ModelBookingConditionInput | null,
};

export type DeleteBookingMutation = {
  deleteBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      profileImage?: string | null,
      rating?: number | null,
      totalRides?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDriverQueryVariables = {
  id: string,
};

export type GetDriverQuery = {
  getDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriversQuery = {
  listDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      username: string,
      email: string,
      phone?: string | null,
      profileImage?: string | null,
      rating?: number | null,
      totalTrips?: number | null,
      licenseNumber: string,
      isAvailable: boolean,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetScheduleQueryVariables = {
  id: string,
};

export type GetScheduleQuery = {
  getSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesQuery = {
  listSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      driverId: string,
      departure: string,
      destination: string,
      date: string,
      time: string,
      status: string,
      availableSeats: number,
      luggageCount: number,
      details?: string | null,
      price: number,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookingQueryVariables = {
  id: string,
};

export type GetBookingQuery = {
  getBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBookingsQueryVariables = {
  filter?: ModelBookingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookingsQuery = {
  listBookings?:  {
    __typename: "ModelBookingConnection",
    items:  Array< {
      __typename: "Booking",
      id: string,
      scheduleId: string,
      userId: string,
      driverId: string,
      status: string,
      numberOfSeats: number,
      luggageCount: number,
      price: number,
      paymentStatus: string,
      paymentMethod?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      scheduleBookingsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      scheduleId: string,
      userId: string,
      driverId: string,
      rating: number,
      comment?: string | null,
      type: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalRides?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
  owner?: string | null,
};

export type OnCreateDriverSubscription = {
  onCreateDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDriverSubscription = {
  onUpdateDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDriverSubscription = {
  onDeleteDriver?:  {
    __typename: "Driver",
    id: string,
    username: string,
    email: string,
    phone?: string | null,
    profileImage?: string | null,
    rating?: number | null,
    totalTrips?: number | null,
    licenseNumber: string,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    isAvailable: boolean,
    documents?:  Array< {
      __typename: "Document",
      type: string,
      url: string,
      verified: boolean,
    } > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnCreateScheduleSubscription = {
  onCreateSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateScheduleSubscription = {
  onUpdateSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteScheduleSubscription = {
  onDeleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    driverId: string,
    departure: string,
    destination: string,
    date: string,
    time: string,
    status: string,
    availableSeats: number,
    luggageCount: number,
    details?: string | null,
    price: number,
    vehicleInfo:  {
      __typename: "VehicleInfo",
      make: string,
      model: string,
      year: number,
      color: string,
      licensePlate: string,
      capacity: number,
    },
    bookings?:  {
      __typename: "ModelBookingConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
  owner?: string | null,
};

export type OnCreateBookingSubscription = {
  onCreateBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBookingSubscription = {
  onUpdateBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBookingSubscriptionVariables = {
  filter?: ModelSubscriptionBookingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBookingSubscription = {
  onDeleteBooking?:  {
    __typename: "Booking",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    status: string,
    numberOfSeats: number,
    luggageCount: number,
    price: number,
    paymentStatus: string,
    paymentMethod?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    scheduleBookingsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
  owner?: string | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
  owner?: string | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
  owner?: string | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    scheduleId: string,
    userId: string,
    driverId: string,
    rating: number,
    comment?: string | null,
    type: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};
