import { useState, useEffect } from 'react';
import { signIn, signOut, getCurrentUser } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Hub } from 'aws-amplify/utils';

interface AuthState {
  isAuthenticated: boolean;
  user: Record<string, unknown> | null;
  isInitialized: boolean;
}

interface CognitoError {
  code: string;
  message: string;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isInitialized: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthState();
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          setAuthState(prev => ({ ...prev, isAuthenticated: true, user: payload.data }));
          navigate('/');
          break;
        case 'signedOut':
          setAuthState(prev => ({ ...prev, isAuthenticated: false, user: null }));
          navigate('/login');
          break;
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const checkAuthState = async () => {
    try {
      const user = await getCurrentUser();
      setAuthState({
        isAuthenticated: true,
        user,
        isInitialized: true,
      });
    } catch (error) {
      console.error('Error checking auth state:', error);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isInitialized: true,
      });
    }
  };

  const login = async (username: string, password: string) => {
    try {
      console.log('Attempting sign in with username:', username);
      const user = await signIn({ username, password });
      console.log('Sign in successful:', user);
      setAuthState(prev => ({ ...prev, isAuthenticated: true, user }));
      return user;
    } catch (error) {
      console.error('Error signing in:', error);
      const cognitoError = error as CognitoError;
      throw new Error(cognitoError.message || 'Failed to sign in');
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setAuthState(prev => ({ ...prev, isAuthenticated: false, user: null }));
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return {
    ...authState,
    login,
    logout,
  };
};