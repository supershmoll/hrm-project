import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import styles from './EmployeesFilter.module.css';

const EmployeesFilter = ({
  searchTerm,
  onSearchChange,
  selectedPosition,
  onPositionChange,
  positions,
  onApply,
  onReset,
  count,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper}>
          <svg
            className={styles.searchIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Surname, First Name"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.filterRow}>
        <select
          className={styles.select}
          value={selectedPosition}
          onChange={(e) => onPositionChange(e.target.value)}
        >
          <option value="">Position: All</option>
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              Position: {pos}
            </option>
          ))}
        </select>

        <button className={styles.resetBtn} onClick={onReset}>
          Reset
        </button>

        <button className={styles.applyBtn} onClick={onApply}>
          Apply
        </button>
      </div>

      <p className={styles.count}>{count} employees found</p>
    </>
  );
};

export default EmployeesFilter;
