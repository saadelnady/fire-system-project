import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import icUser from "../../assets/imgs/ic-user.png";
import { useSelector } from "react-redux";
const User = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isDark } = useSelector((state) => state.modeReducer);
  const getIconColor = () => (isDark ? "#eee" : "#000000");

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className={`relative ${
        isDark ? "bg-gray-900  text-white" : "bg-white  text-black"
      }`}
    >
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
        <div
          ref={dropdownRef}
          className={`absolute right-0 mt-2  w-48 rounded-lg shadow-lg ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill={getIconColor()}
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              className="me-3 "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1554 18.5659L18.087 18.4067C17.6996 17.3756 17.0535 16.6988 16.0488 16.2901C15.0618 15.8886 13.7385 15.75 12.0001 15.75C10.275 15.75 8.95912 15.8972 7.97442 16.3031C6.97373 16.7156 6.32558 17.3909 5.93304 18.4043L5.85652 18.5771C4.09876 16.9345 3 14.5956 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 14.5897 19.9062 16.9239 18.1554 18.5659ZM8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z"
                  fill="#323232"
                ></path>{" "}
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#323232"
                  stroke-width="2"
                ></path>{" "}
                <path
                  d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z"
                  stroke="#323232"
                  stroke-width="2"
                ></path>{" "}
                <path
                  d="M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            Profile
          </Link>

          <Link className="flex items-center px-4 py-2 hover:bg-gray-200">
            <svg
              viewBox="0 0 24 24"
              fill={getIconColor()}
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              width="30px"
              className="me-3 "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default User;
