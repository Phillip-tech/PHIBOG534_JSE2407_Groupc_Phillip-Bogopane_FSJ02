// app/components/ResetButton.jsx
"use client";

const ResetButton = ({ onReset }) => {
  return (
    <button 
      onClick={onReset}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
    >
      Reset Filters
    </button>
  );
};

export default ResetButton;