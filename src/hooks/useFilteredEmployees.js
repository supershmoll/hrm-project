import { useState, useMemo } from 'react';
import { useDebounce } from './useDebounce';

export const useFilteredEmployees = (items) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);

  const [selectedPosition, setSelectedPosition] = useState('');
  const [appliedPosition, setAppliedPosition] = useState('');

  const positions = useMemo(() => {
    const unique = [...new Set(items.map((e) => e.jobTitle).filter(Boolean))];
    return unique.sort();
  }, [items]);

  const handleApply = () => {
    setAppliedPosition(selectedPosition);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedPosition('');
    setAppliedPosition('');
  };

  const filteredEmployees = useMemo(() => {
    return items.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesPosition = appliedPosition
        ? employee.jobTitle === appliedPosition
        : true;

      return matchesSearch && matchesPosition;
    });
  }, [items, debouncedSearch, appliedPosition]);

  return {
    searchTerm,
    setSearchTerm,
    selectedPosition,
    setSelectedPosition,
    positions,
    filteredEmployees,
    handleApply,
    handleReset,
  };
};
