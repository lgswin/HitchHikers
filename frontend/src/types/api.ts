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
  totalPrice: number;
}

export interface UpdateBookingInput {
  id: string;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  seats?: number;
  totalPrice?: number;
}

export interface ScheduleFilter {
  driverId?: string;
  status?: 'ACTIVE' | 'CANCELLED' | 'COMPLETED';
  departureTime?: {
    between?: [string, string];
    gt?: string;
    lt?: string;
  };
}

export interface BookingFilter {
  scheduleId?: string;
  passengerId?: string;
  status?: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
} 