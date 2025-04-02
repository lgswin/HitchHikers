import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Schedules from './pages/Schedules';
import Requests from './pages/Requests';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import './config/cognito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/schedules"
          element={
            <MainLayout>
              <Schedules />
            </MainLayout>
          }
        />
        <Route
          path="/requests"
          element={
            <MainLayout>
              <Requests />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
