import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from '../../features/courses/coursesSlice';

const Courses = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.courses);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses('https://dummyjson.com/c/011a-bf3a-4314-b8b8'));
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading courses... (Imagine a cool spinner here!)</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  const filteredCourses = items.filter((course) => {
    return course.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="courses-container">
      <h2>Courses</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by course name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '300px', borderRadius: '4px' }}
        />
      </div>

      <p>{filteredCourses.length} courses found</p>

      <div className="courses-list">
        {filteredCourses.map((course) => (
          <div key={course.id} style={cardStyle}>
            <div>
              <h4>{course.title}</h4>
              <small>{course.type}</small>
            </div>

            <div>
              <p>Category</p>
              <strong>{course.category}</strong>
            </div>

            <div>
              <p>Number of students</p>
              <strong>{course.studentsCount}</strong>
            </div>

            <div>
              <p>Passed education</p>
              <strong>{course.passedCount}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #ddd',
  padding: '16px',
  marginBottom: '10px',
  borderRadius: '8px',
};

export default Courses;
