import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchEmployees } from '../../features/employees/employeesSlice';
import { useFilteredEmployees } from '../../hooks/useFilteredEmployees';
import EmployeesFilter from '../../components/EmployeesFilter/EmployeesFilter';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';

const EMPLOYEES_API_URL = 'https://dummyjson.com/c/4890-50ca-45a8-88e7';

const Employees = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.employees);

  const {
    searchTerm,
    setSearchTerm,
    selectedPosition,
    setSelectedPosition,
    positions,
    filteredEmployees,
    handleApply,
    handleReset,
  } = useFilteredEmployees(items);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees(EMPLOYEES_API_URL));
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>Loading employees...</div>;
  if (status === 'failed')
    return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '24px', maxWidth: '1400px', margin: '0 auto' }}>
      <EmployeesFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedPosition={selectedPosition}
        onPositionChange={setSelectedPosition}
        positions={positions}
        onApply={handleApply}
        onReset={handleReset}
        count={filteredEmployees.length}
      />
      <EmployeesTable employees={filteredEmployees} />
    </div>
  );
};

export default Employees;
