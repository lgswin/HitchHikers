import { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { signIn, signOut, getCurrentUser, signUp } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

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
      const user = await signIn({ username, password });
      setAuthState({
        isAuthenticated: true,
        user,
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