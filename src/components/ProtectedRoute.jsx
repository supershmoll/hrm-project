import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  // 1. Let's grab the ENTIRE auth state, not just isAuthenticated
  const authState = useSelector((state) => state.auth);

  // 2. The Trap: Print exactly what the Bouncer sees!

  if (!authState.isAuthenticated) {
    console.log('BOUNCER SAYS: Kicking you out!');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
