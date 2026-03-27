import { Routes, Route } from 'react-router-dom';
import Courses from '../pages/Courses/Courses';
import Employees from '../pages/Employees/Employees';
import Login from '../pages/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Layout from '../components/Layout/Layout';
import { PATHS } from './paths';

const AppRoutes = () => (
  <Routes>
    <Route path={PATHS.HOME} element={<Login />} />

    <Route
      element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }
    >
      <Route path={PATHS.EMPLOYEES} element={<Employees />} />
      <Route path={PATHS.COURSES} element={<Courses />} />
    </Route>
  </Routes>
);

export default AppRoutes;
