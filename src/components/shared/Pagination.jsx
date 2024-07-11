import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ totalPages, paginate, currentPage }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-4 overflow-x-auto">
      <nav className="relative z-0 inline-flex shadow-sm rounded-md">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-blue-900 text-sm font-medium text-white ${
            currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-800"
          }`}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.707 4.293a1 1 0 010 1.414L7.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-2 flex-wrap justify-center overflow-x-auto py-2">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                currentPage === number
                  ? "bg-blue-600 text-black"
                  : "hover:bg-gray-800"
              } ${isDark ? "text-white" : "text-black"}`}
            >
              {number}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-blue-900 text-sm font-medium text-white ${
            currentPage === totalPages
              ? "cursor-not-allowed"
              : "hover:bg-gray-800"
          }`}
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.293 15.707a1 1 0 010-1.414L12.586 10 9.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
