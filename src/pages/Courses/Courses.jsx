import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from '../../features/courses/coursesSlice';
import { useFilteredCourses } from '../../hooks/useFilteredCourses';
import CoursesList from './CoursesList';
import Search from '../../components/Search/Search';

const COURSES_API_URL = 'https://dummyjson.com/c/011a-bf3a-4314-b8b8';

const Courses = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.courses);
  const { searchTerm, setSearchTerm, filteredCourses } =
    useFilteredCourses(items);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses(COURSES_API_URL));
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading courses...</div>;
  if (status === 'failed')
    return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <Search
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search course name..."
      />
      <CoursesList courses={filteredCourses} />
    </div>
  );
};

export default Courses;
