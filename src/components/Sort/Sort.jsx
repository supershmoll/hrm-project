import styles from './Sort.module.css';

const SORT_OPTIONS = [
  { value: '', label: 'Sort by...' },
  { value: 'title', label: 'Title' },
  { value: 'category', label: 'Category' },
  { value: 'studentsCount', label: 'Number of Students' },
  { value: 'passedCount', label: 'Passed Education' },
];

const Sort = ({
  value,
  direction,
  onChangeField,
  onChangeDirection,
  onApply,
  onReset,
}) => {
  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChangeField(e.target.value)}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <button
        className={`${styles.directionBtn} ${direction === 'asc' ? styles.active : ''}`}
        onClick={() => onChangeDirection('asc')}
      >
        ↑ Asc
      </button>

      <button
        className={`${styles.directionBtn} ${direction === 'desc' ? styles.active : ''}`}
        onClick={() => onChangeDirection('desc')}
      >
        ↓ Desc
      </button>

      <button className={styles.resetBtn} onClick={onReset}>
        Reset
      </button>

      <button className={styles.applyBtn} onClick={onApply}>
        Apply
      </button>
    </div>
  );
};

export default Sort;
