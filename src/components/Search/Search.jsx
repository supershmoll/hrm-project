import styles from './Search.module.css';
import search from '../../assets/logo/search.svg';
const Search = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <label className={styles.searchWrapper}>
      <img className={styles.icon} src={search} alt="Search icon" />
      <input
        className={styles.search}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};

export default Search;
