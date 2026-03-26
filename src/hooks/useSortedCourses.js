import { useState } from 'react';

export const useSortedCourses = (courses) => {
  const [pendingField, setPendingField] = useState('');
  const [pendingDirection, setPendingDirection] = useState('asc');
  const [appliedField, setAppliedField] = useState('');
  const [appliedDirection, setAppliedDirection] = useState('asc');

  const handleApply = () => {
    setAppliedField(pendingField);
    setAppliedDirection(pendingDirection);
  };

  const handleReset = () => {
    setPendingField('');
    setPendingDirection('asc');
    setAppliedField('');
    setAppliedDirection('asc');
  };

  const sortedCourses = [...courses].sort((a, b) => {
    if (!appliedField) return 0;

    const modifier = appliedDirection === 'asc' ? 1 : -1;

    if (appliedField === 'title' || appliedField === 'category') {
      return (
        (a[appliedField] ?? '').localeCompare(b[appliedField] ?? '') * modifier
      );
    }

    return ((a[appliedField] ?? 0) - (b[appliedField] ?? 0)) * modifier;
  });

  return {
    pendingField,
    pendingDirection,
    setPendingField,
    setPendingDirection,
    sortedCourses,
    handleApply,
    handleReset,
  };
};
