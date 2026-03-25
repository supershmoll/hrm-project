import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Courses from './pages/Courses/Courses';
import Employees from './pages/Employees/Employees';
import Login from './pages/Login/Login';
import { useDispatch } from 'react-redux';
import { logout } from './features/auth/authSlice';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('hrm-token');

    dispatch(logout());

    navigate('./');
  };

  return (
    <>
      <nav
        style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '2rem' }}
      >
        <Link to="/" style={{ marginRight: '1rem' }}>
          Login
        </Link>
        <Link to="/employees" style={{ marginRight: '1rem' }}>
          Employees
        </Link>
        <Link to="/courses">Courses</Link>
        <button onClick={handleLogout} style={{ marginLeft: 20 }}>
          Logout
        </button>
      </nav>
      <div style={{ padding: '0 2rem' }}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
