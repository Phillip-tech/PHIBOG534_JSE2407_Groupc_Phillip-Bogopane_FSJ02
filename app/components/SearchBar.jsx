"use client";

import { useState, useEffect } from 'react';

const SortDropdown = ({ onSortChange, initialValue }) => {
  const [sortOption, setSortOption] = useState(initialValue || '');

  useEffect(() => {
    setSortOption(initialValue || '');
  }, [initialValue]);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    onSortChange(option);
  };
  return (
    <select 
      value={sortOption} 
      onChange={handleSortChange} 
      className="p-2 border rounded"
    >
      <option value="">Default Sorting</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;