const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search coin..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 mt-4 rounded bg-gray-800 text-white mb-4"
    />
  );
};

export default SearchBar;
