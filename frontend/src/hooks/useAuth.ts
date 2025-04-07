import { useState, useEffect } from 'react';
import { signIn, signOut, getCurrentUser, signUp } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Hub } from 'aws-amplify/utils';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthState();
  }, []);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      const { event, data } = payload;
      console.log('Auth event:', event);
      
      switch (event) {
        case 'signIn':
          console.log('🔐 Login detected via Auth Hub:', data);
          console.log('User signed in:', data);
          checkAuthState();
          break;
        case 'signOut':
          console.log('User signed out');
          checkAuthState();
          break;
        case 'signIn_failure':
          console.error('Sign in failed:', data);
          break;
        default:
          console.error('else??', data);
          break;
      }
    });

    return () => unsubscribe();
  }, []);

  const checkAuthState = async () => {
    try {
      const user = await getCurrentUser();
      setAuthState({
        isAuthenticated: true,
        user,
        loading: false,
      });
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
    }
  };

  const signUpUser = async (username: string, password: string, email: string) => {
    try {
      const { isSignUpComplete } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      navigate('/login');
      return isSignUpComplete;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const signInOutput = await signIn({ username, password });
      console.log("Sign in output:", signInOutput);
      
      // Get current user details after successful sign in
      const currentUser = await getCurrentUser();
      console.log("Current user details:", currentUser);
      
      setAuthState({
        isAuthenticated: true,
        user: currentUser,
        loading: false,
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setAuthState({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  return {
    ...authState,
    signIn: login,
    signOut: logout,
    signUp: signUpUser,
  };
};