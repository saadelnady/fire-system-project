import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import Notifications from "./Notifications";
import User from "./User";
import { useSelector } from "react-redux";

const Header = ({ onBurgerClick }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div
      className={`flex items-center justify-between lg:justify-end px-4 py-3 shadow ${
        isDark ? "bg-gray-900  text-white" : "bg-white  text-black"
      } `}
    >
      <button className="lg:hidden" onClick={onBurgerClick}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <Notifications />
        <User />
      </div>
    </div>
  );
};

export default Header;
