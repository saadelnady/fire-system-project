import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers
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
          className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-blue-900 text-sm font-medium text-white hover:bg-gray-50 ${
            currentPage === totalPages
              ? "cursor-not-allowed"
              : "hover:text-gray-700"
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
        <div className="-ml-px relative inline-flex space-x-2 overflow-x-auto">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium  hover:bg-gray-50 ${
                currentPage === number
                  ? "bg-blue-600 text-black hover:text-white"
                  : "hover:text-gray-500"
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
          className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-blue-900 text-sm font-medium text-white hover:bg-gray-50 ${
            currentPage === totalPages
              ? "cursor-not-allowed"
              : "hover:text-gray-700"
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
