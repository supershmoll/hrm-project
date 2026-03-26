import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('hrm-token');
    dispatch(logout());
    navigate('/');
  };

  return (
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
  );
};

export default Navbar;
