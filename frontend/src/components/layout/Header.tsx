import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

const styles = `
  @keyframes moveRight {
    0% {
      transform: translateX(-200%);
    }
    50% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();
  // const [authDebugInfo, setAuthDebugInfo] = useState({
  //   isAuthenticated: false,
  //   userEmail: '',
  //   timestamp: new Date().toISOString()
  // });

  // useEffect(() => {
  //   setAuthDebugInfo({
  //     isAuthenticated,
  //     userEmail: user?.email || '',
  //     timestamp: new Date().toISOString()
  //   });
  // }, [isAuthenticated, user]);

  useEffect(() => {
    // Log authentication state changes
    console.log('Auth State:', {
      isAuthenticated,
      user: user ? { email: user.email } : null,
      timestamp: new Date().toISOString()
    });
  }, [isAuthenticated, user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <style>{styles}</style>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 flex items-center">
            <svg
              className="w-8 h-8 mr-2 animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            Hitchhikers
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 relative">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/schedules" className="text-gray-600 hover:text-gray-900">
              Schedules
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              Profile
            </Link>
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Welcome, {user?.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/schedules"
              className="block text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Schedules
            </Link>
            <Link
              to="/profile"
              className="block text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Profile
            </Link>
            {isAuthenticated ? (
              <>
                <div className="block text-gray-600">
                  Welcome, {user?.email}
                </div>
                <button
                  onClick={handleSignOut}
                  className="block text-gray-600 hover:text-gray-900"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                Login
              </Link>
            )}
          </div>
        )}

        {/* Debug Information */}
        {/* {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-2 bg-gray-100 rounded text-xs">
            <div className="font-semibold">Auth Debug Info:</div>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(authDebugInfo, null, 2)}
            </pre>
          </div>
        )} */}
      </nav>
    </header>
  );
};

export default Header;