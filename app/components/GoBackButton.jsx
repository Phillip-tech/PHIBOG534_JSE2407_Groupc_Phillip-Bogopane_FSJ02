'use client';

import { useRouter } from 'next/navigation';

/**
 * The GoBackButton component displays a button that when clicked will
 * navigate to the previous page.
 *
 * @returns {JSX.Element} A JSX Element representing the GoBackButton
 * component.
 */
const GoBackButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-start">
      <button
        onClick={() => router.back()}
        className="mb-4 bg-blue-500 text-gray-700 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;