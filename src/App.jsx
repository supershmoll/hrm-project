import { Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses/Courses';
import Employees from './pages/Employees/Employees';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <div>
        <div>
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
      </div>
    </>
  );
};

export default App;
