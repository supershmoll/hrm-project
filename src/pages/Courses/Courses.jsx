import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCourses } from '../../features/courses/coursesSlice';
import { useFilteredCourses } from '../../hooks/useFilteredCourses';
import { useSortedCourses } from '../../hooks/useSortedCourses';
import CoursesList from '../../components/CoursesList/CoursesList';
import Sort from '../../components/Sort/Sort';
import Search from '../../components/Search/Search';
import styles from './Courses.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

const COURSES_API_URL = 'https://dummyjson.com/c/011a-bf3a-4314-b8b8';

const Courses = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.courses);

  const { searchTerm, setSearchTerm, filteredCourses } =
    useFilteredCourses(items);
  const {
    pendingField,
    pendingDirection,
    setPendingField,
    setPendingDirection,
    sortedCourses,
    handleApply,
    handleReset,
  } = useSortedCourses(filteredCourses);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses(COURSES_API_URL));
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading courses...</div>;
  if (status === 'failed')
    return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <>
      <div className={styles.mainContentContainer}>
        <div className={styles.centeredContentBlock}>
          <div className={styles.filterSection}>
            <div className={styles.searchWrapper}>
              <Search
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Course name"
              />
            </div>

            <div className={styles.sortWrapper}>
              <Sort
                value={pendingField}
                direction={pendingDirection}
                onChangeField={setPendingField}
                onChangeDirection={setPendingDirection}
                onApply={handleApply}
                onReset={handleReset}
              />
            </div>
          </div>

          <p className={styles.count}>{sortedCourses.length} courses found</p>

          <CoursesList courses={sortedCourses} />
        </div>
      </div>
    </>
  );
};

export default Courses;
