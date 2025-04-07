import { useState, useEffect } from 'react';
import { signIn as amplifySignIn, signOut as amplifySignOut, getCurrentUser, signUp as amplifySignUp, SignInOutput } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { Hub } from 'aws-amplify/utils';

// Define proper user type that matches Cognito's user structure
interface UserType {
  username?: string;
  userId?: string;
  attributes?: Record<string, string>;
  signInDetails?: {
    loginId?: string;
  };
  [key: string]: unknown; // Index signature for other properties
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserType | null;
  isInitialized: boolean;
}

interface CognitoError {
  code: string;
  message: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  isInitialized: boolean;
  login: (username: string, password: string) => Promise<SignInOutput>;
  logout: () => Promise<void>;
  signUp: (username: string, password: string, email: string) => Promise<boolean>;
  signIn: (username: string, password: string) => Promise<SignInOutput>;
  signOut: () => Promise<void>;
}

export const useAuth = (): AuthContextType => {
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
          setAuthState(prev => ({ 
            ...prev, 
            isAuthenticated: true, 
            user: payload.data as unknown as UserType 
          }));
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
        user: user as unknown as UserType,
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
      const user = await amplifySignIn({ username, password });
      console.log('Sign in successful:', user);
      setAuthState(prev => ({ 
        ...prev, 
        isAuthenticated: true, 
        user: user as unknown as UserType 
      }));
      return user;
    } catch (error) {
      console.error('Error signing in:', error);
      const cognitoError = error as CognitoError;
      throw new Error(cognitoError.message || 'Failed to sign in');
    }
  };

  const logout = async () => {
    try {
      await amplifySignOut();
      setAuthState(prev => ({ ...prev, isAuthenticated: false, user: null }));
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const signUp = async (username: string, password: string, email: string) => {
    try {
      const { isSignUpComplete, userId } = await amplifySignUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      console.log('Sign up successful:', { isSignUpComplete, userId });
      return isSignUpComplete;
    } catch (error) {
      console.error('Error signing up:', error);
      const cognitoError = error as CognitoError;
      throw new Error(cognitoError.message || 'Failed to sign up');
    }
  };

  return {
    ...authState,
    login,
    logout,
    signIn: login,
    signOut: logout,
    signUp,
  };
};