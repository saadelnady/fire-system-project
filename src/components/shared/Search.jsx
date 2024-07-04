// Search.js
import React from "react";
import { useSelector } from "react-redux";

const Search = ({ handler, searchTerm }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div>
      <label htmlFor="search" className="me-3">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={handler}
        className={`p-2  rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
          isDark ? "bg-gray-900 text-white" : "border"
        }`}
      />
    </div>
  );
};

export default Search;
