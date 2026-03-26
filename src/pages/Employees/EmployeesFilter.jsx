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

        <button className={styles.exportBtn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Export
        </button>
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

        <button className={styles.moreBtn}>More +</button>

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
