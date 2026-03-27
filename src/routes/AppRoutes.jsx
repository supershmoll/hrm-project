import { Routes, Route } from 'react-router-dom';
import Courses from '../pages/Courses/Courses';
import Employees from '../pages/Employees/Employees';
import Login from '../pages/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Layout from '../components/Layout/Layout';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />

    <Route
      element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }
    >
      <Route path="/employees" element={<Employees />} />
      <Route path="/courses" element={<Courses />} />
    </Route>
  </Routes>
);

export default AppRoutes;
