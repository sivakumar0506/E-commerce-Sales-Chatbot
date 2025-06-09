import { useState, useEffect } from 'react';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

// Simple route handling
const App = () => {
  const [route, setRoute] = useState('login'); // 'login' | 'signup' | 'chat'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth token from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      setRoute('chat');
    }
  }, []);

  // Handlers to switch routes
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setRoute('chat');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setRoute('login');
  };

  if (route === 'login')
    return (
      <LoginPage
        onSignupLink={() => setRoute('signup')}
        onLoginSuccess={handleLoginSuccess}
      />
    );

  if (route === 'signup')
    return (
      <SignupPage
        onLoginLink={() => setRoute('login')}
      />
    );

  if (route === 'chat')
    return (
      <ChatPage
        onLogout={handleLogout}
      />
    );

  return null;
};

export default App;
