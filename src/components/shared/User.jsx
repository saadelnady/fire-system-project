import React, { useState } from "react";
import { Link } from "react-router-dom";
import icUser from "../../assets/imgs/ic-user.png";
const User = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="focus:outline-none border rounded-full w-12"
      >
        <img
          src={icUser}
          alt="User Icon"
          className="w-full h-full rounded-full"
        />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
            Profile
          </Link>

          <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
