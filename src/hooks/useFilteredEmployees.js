import { useState, useMemo } from 'react';

export const useFilteredEmployees = (items) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [appliedPosition, setAppliedPosition] = useState('');

  const positions = useMemo(() => {
    const unique = [...new Set(items.map((e) => e.jobTitle).filter(Boolean))];
    return unique.sort();
  }, [items]);

  const handleApply = () => {
    setAppliedSearch(searchTerm);
    setAppliedPosition(selectedPosition);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedPosition('');
    setAppliedSearch('');
    setAppliedPosition('');
  };

  const filteredEmployees = useMemo(() => {
    return items.filter((employee) => {
      const matchesSearch = employee.name
        .toLowerCase()
        .includes(appliedSearch.toLowerCase());
      const matchesPosition = appliedPosition
        ? employee.jobTitle === appliedPosition
        : true;
      return matchesSearch && matchesPosition;
    });
  }, [items, appliedSearch, appliedPosition]);

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
