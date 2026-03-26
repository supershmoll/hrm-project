const Search = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '8px',
        width: '250px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default Search;
