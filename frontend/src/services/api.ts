import { generateClient } from 'aws-amplify/api';
import { GraphQLResult } from '@aws-amplify/api-graphql';

const client = generateClient();

// Type definitions
export interface Schedule {
  id: string;
  driverId: string;
  departureLocation: string;
  destination: string;
  departureTime: string;
  availableSeats: number;
  price: number;
  status: 'ACTIVE' | 'CANCELLED' | 'COMPLETED';
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  scheduleId: string;
  passengerId: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  seats: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateScheduleInput {
  driverId: string;
  departureLocation: string;
  destination: string;
  departureTime: string;
  availableSeats: number;
  price: number;
}

export interface UpdateScheduleInput {
  id: string;
  departureLocation?: string;
  destination?: string;
  departureTime?: string;
  availableSeats?: number;
  price?: number;
  status?: 'ACTIVE' | 'CANCELLED' | 'COMPLETED';
}

export interface CreateBookingInput {
  scheduleId: string;
  passengerId: string;
  seats: number;
}

export interface UpdateBookingInput {
  id: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  seats?: number;
}

export interface ScheduleFilter {
  driverId?: string;
  departureLocation?: string;
  destination?: string;
  status?: 'ACTIVE' | 'CANCELLED' | 'COMPLETED';
}

export interface BookingFilter {
  scheduleId?: string;
  passengerId?: string;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
}

// Schedule Operations
export const createSchedule = async (input: CreateScheduleInput): Promise<Schedule> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        mutation CreateSchedule($input: CreateScheduleInput!) {
          createSchedule(input: $input) {
            id
            driverId
            departureLocation
            destination
            departureTime
            availableSeats
            price
            status
            createdAt
            updatedAt
          }
        }
      `,
      variables: { input }
    }) as GraphQLResult<{ createSchedule: Schedule }>;

    if (!result.data) {
      throw new Error('No data returned from createSchedule mutation');
    }

    return result.data.createSchedule;
  } catch (error) {
    console.error('Error creating schedule:', error);
    throw error;
  }
};

export const updateSchedule = async (input: UpdateScheduleInput): Promise<Schedule> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        mutation UpdateSchedule($input: UpdateScheduleInput!) {
          updateSchedule(input: $input) {
            id
            driverId
            departureLocation
            destination
            departureTime
            availableSeats
            price
            status
            createdAt
            updatedAt
          }
        }
      `,
      variables: { input }
    }) as GraphQLResult<{ updateSchedule: Schedule }>;

    if (!result.data) {
      throw new Error('No data returned from updateSchedule mutation');
    }

    return result.data.updateSchedule;
  } catch (error) {
    console.error('Error updating schedule:', error);
    throw error;
  }
};

export const deleteSchedule = async (input: { id: string }): Promise<{ id: string }> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        mutation DeleteSchedule($input: DeleteScheduleInput!) {
          deleteSchedule(input: $input) {
            id
          }
        }
      `,
      variables: { input }
    }) as GraphQLResult<{ deleteSchedule: { id: string } }>;

    if (!result.data) {
      throw new Error('No data returned from deleteSchedule mutation');
    }

    return result.data.deleteSchedule;
  } catch (error) {
    console.error('Error deleting schedule:', error);
    throw error;
  }
};

export const getSchedule = async (id: string): Promise<Schedule> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        query GetSchedule($id: ID!) {
          getSchedule(id: $id) {
            id
            driverId
            departureLocation
            destination
            departureTime
            availableSeats
            price
            status
            createdAt
            updatedAt
          }
        }
      `,
      variables: { id }
    }) as GraphQLResult<{ getSchedule: Schedule }>;

    if (!result.data) {
      throw new Error('No data returned from getSchedule query');
    }

    return result.data.getSchedule;
  } catch (error) {
    console.error('Error getting schedule:', error);
    throw error;
  }
};

export const listSchedules = async (filter?: ScheduleFilter): Promise<Schedule[]> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        query ListSchedules($filter: ScheduleFilterInput) {
          listSchedules(filter: $filter) {
            items {
              id
              driverId
              departureLocation
              destination
              departureTime
              availableSeats
              price
              status
              createdAt
              updatedAt
            }
          }
        }
      `,
      variables: { filter }
    }) as GraphQLResult<{ listSchedules: { items: Schedule[] } }>;

    if (!result.data) {
      throw new Error('No data returned from listSchedules query');
    }

    return result.data.listSchedules.items;
  } catch (error) {
    console.error('Error listing schedules:', error);
    throw error;
  }
};

// Booking Operations
export const createBooking = async (input: CreateBookingInput): Promise<Booking> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        mutation CreateBooking($input: CreateBookingInput!) {
          createBooking(input: $input) {
            id
            scheduleId
            passengerId
            status
            seats
            totalPrice
            createdAt
            updatedAt
          }
        }
      `,
      variables: { input }
    }) as GraphQLResult<{ createBooking: Booking }>;

    if (!result.data) {
      throw new Error('No data returned from createBooking mutation');
    }

    return result.data.createBooking;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const updateBooking = async (input: UpdateBookingInput): Promise<Booking> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        mutation UpdateBooking($input: UpdateBookingInput!) {
          updateBooking(input: $input) {
            id
            scheduleId
            passengerId
            status
            seats
            totalPrice
            createdAt
            updatedAt
          }
        }
      `,
      variables: { input }
    }) as GraphQLResult<{ updateBooking: Booking }>;

    if (!result.data) {
      throw new Error('No data returned from updateBooking mutation');
    }

    return result.data.updateBooking;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

export const deleteBooking = async (input: { id: string }): Promise<{ id: string }> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        mutation DeleteBooking($input: DeleteBookingInput!) {
          deleteBooking(input: $input) {
            id
          }
        }
      `,
      variables: { input }
    }) as GraphQLResult<{ deleteBooking: { id: string } }>;

    if (!result.data) {
      throw new Error('No data returned from deleteBooking mutation');
    }

    return result.data.deleteBooking;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

export const getBooking = async (id: string): Promise<Booking> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        query GetBooking($id: ID!) {
          getBooking(id: $id) {
            id
            scheduleId
            passengerId
            status
            seats
            totalPrice
            createdAt
            updatedAt
          }
        }
      `,
      variables: { id }
    }) as GraphQLResult<{ getBooking: Booking }>;

    if (!result.data) {
      throw new Error('No data returned from getBooking query');
    }

    return result.data.getBooking;
  } catch (error) {
    console.error('Error getting booking:', error);
    throw error;
  }
};

export const listBookings = async (filter?: BookingFilter): Promise<Booking[]> => {
  try {
    const result = await client.graphql({
      query: /* GraphQL */ `
        query ListBookings($filter: BookingFilterInput) {
          listBookings(filter: $filter) {
            items {
              id
              scheduleId
              passengerId
              status
              seats
              totalPrice
              createdAt
              updatedAt
            }
          }
        }
      `,
      variables: { filter }
    }) as GraphQLResult<{ listBookings: { items: Booking[] } }>;

    if (!result.data) {
      throw new Error('No data returned from listBookings query');
    }

    return result.data.listBookings.items;
  } catch (error) {
    console.error('Error listing bookings:', error);
    throw error;
  }
}; 