import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Courses from './pages/Courses/Courses';
import Employees from './pages/Employees/Employees';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '2rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Login</Link>
        <Link to="/employees" style={{ marginRight: '1rem' }}>Employees</Link>
        <Link to="/courses">Courses</Link>
      </nav>
      <div style={{ padding: '0 2rem' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;