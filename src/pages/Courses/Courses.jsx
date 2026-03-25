import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from '../../features/courses/coursesSlice';
import Search from '../../components/Search/Search';
import CourseCard from '../../components/CourseCard/CourseCard';
import { useDebounce } from '../../hooks/useDebounce';

const Courses = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.courses);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);

  const filteredCourses = items.filter((course) => {
    if (!course.title) return false;
    return course.title.toLowerCase().includes(debouncedTerm.toLowerCase());
  });

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

  return (
    <div className="courses-container">
      <h2>Courses</h2>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Search
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search course name..."
        />
      </div>

      <p>{filteredCourses.length} courses found</p>

      <div className="courses-list">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
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
