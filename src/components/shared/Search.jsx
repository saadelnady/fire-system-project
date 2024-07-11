// Search.js
import React from "react";
import { useSelector } from "react-redux";

const Search = ({ handler, searchTerm ,onClickSearchIcon}) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div className="my-5 flex items-center content-center ">
      <label htmlFor="search" className="me-3">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handler}
        className={`p-2  rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${isDark ? "bg-gray-900 text-white" : "border"
          }`}
      />
      <button onClick={onClickSearchIcon} class="me-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

    </div>
  );
};

export default Search;
