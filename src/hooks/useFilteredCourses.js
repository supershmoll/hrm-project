import { useState } from 'react';
import { useDebounce } from './useDebounce';

export const useFilteredCourses = (items) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);

  const filteredCourses = items.filter((course) => {
    if (!course.title) return false;
    return course.title.toLowerCase().includes(debouncedTerm.toLowerCase());
  });

  return { searchTerm, setSearchTerm, filteredCourses };
};
