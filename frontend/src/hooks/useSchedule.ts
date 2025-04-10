import { useState, useCallback } from 'react';
import { 
  createSchedule, 
  updateSchedule, 
  deleteSchedule, 
  getSchedule, 
  listSchedules 
} from '../services/api';
import { 
  Schedule, 
  CreateScheduleInput, 
  UpdateScheduleInput, 
  ScheduleFilter 
} from '../types/api';

export const useSchedule = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const create = useCallback(async (input: CreateScheduleInput): Promise<Schedule | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await createSchedule(input);
      return result;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const update = useCallback(async (input: UpdateScheduleInput): Promise<Schedule | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await updateSchedule(input);
      return result;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const remove = useCallback(async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await deleteSchedule({ id });
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback(async (id: string): Promise<Schedule | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await getSchedule(id);
      return result;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const list = useCallback(async (filter?: ScheduleFilter): Promise<Schedule[]> => {
    setLoading(true);
    setError(null);
    try {
      const result = await listSchedules(filter);
      return result;
    } catch (err) {
      setError(err as Error);
      return [];
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