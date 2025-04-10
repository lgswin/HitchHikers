import { useState, useCallback } from 'react';
import { 
  createBooking, 
  updateBooking, 
  deleteBooking, 
  getBooking, 
  listBookings 
} from '../services/api';
import type { 
  CreateBookingInput, 
  UpdateBookingInput, 
  BookingFilter 
} from '../services/api';

export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const create = useCallback(async (input: CreateBookingInput) => {
    try {
      setLoading(true);
      setError(null);
      const result = await createBooking(input);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create booking'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const update = useCallback(async (input: UpdateBookingInput) => {
    try {
      setLoading(true);
      setError(null);
      const result = await updateBooking(input);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update booking'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const remove = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await deleteBooking({ id });
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete booking'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback(async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getBooking(id);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to get booking'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const list = useCallback(async (filter?: BookingFilter) => {
    try {
      setLoading(true);
      setError(null);
      const result = await listBookings(filter);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to list bookings'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    create,
    update,
    remove,
    get,
    list
  };
}; 