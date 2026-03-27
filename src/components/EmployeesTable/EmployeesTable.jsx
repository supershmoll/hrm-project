import EmployeeRow from '../EmployeesRow/EmployeeRow';
import styles from './EmployeesTable.module.css';

const COLUMNS = [
  'User',
  'Job title',
  'Educational material',
  'Time taken',
  'Attempts',
  'Grade',
];

const EmployeesTable = ({ employees }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            {COLUMNS.map((col) => (
              <th key={col} className={styles.headerCell}>
                {col}
              </th>
            ))}
            <th className={styles.headerCell} />
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesTable;
