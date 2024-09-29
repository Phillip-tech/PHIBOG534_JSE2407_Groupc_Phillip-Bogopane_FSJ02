"use client";

import { useState, useEffect } from 'react';

/**
 * The SortDropdown component displays a dropdown menu for selecting a sorting option.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onSortChange - A callback function that is called when the user selects a sorting option.
 * @param {string} [props.initialValue] - The initial selected sorting option.
 * @returns {JSX.Element} - The SortDropdown component.
 */
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