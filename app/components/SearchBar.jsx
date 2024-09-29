"use client";
import { useState, useEffect } from 'react';


const SearchBar = ({ onSearch, initialValue }) => {
  const [search, setSearch] = useState(initialValue || '');

  useEffect(() => {
    setSearch(initialValue || '');
  }, [initialValue]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for products..."
        className="p-2 border rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">Search</button>
    </form>
  );
};

export default SearchBar;