import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ isSidebarOpen, onBurgerClick }) => {
  const { isDark } = useSelector((state) => state.mode);
  const location = useLocation();

  const getIconColor = () => (isDark ? "#eee" : "#000000");

  return (
    <div
      className={`transform top-0 left-0 w-64  ${
        isDark ? "bg-gray-700  text-white" : "bg-purple-50  text-black"
      } fixed h-full overflow-auto z-50 lg:static lg:transform-none transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={onBurgerClick}
          className={` ${isDark ? " text-white" : " text-black"}`}
        >
          X
        </button>
      </div>
      <Link className={`font-bold text-2xl mb-4 p-4 block `} to="/">
        Dashboard
      </Link>
      <ul className="space-y-4 p-4">
        <li>
          <Link
            className={`font-bold text-xl flex items-center px-3 py-2 rounded ${
              location.pathname === "/" ? "bg-blue-300 text-white" : ""
            }`}
            to="/"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill={getIconColor()}
              height="30px"
              width="30px"
              className="me-3 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
              />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`font-bold text-xl flex items-center px-3 py-2 rounded ${
              location.pathname === "/owners" ? "bg-blue-300 text-white" : ""
            }`}
            to="/owners"
          >
            <svg
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              fill={getIconColor()}
              height="30px"
              width="30px"
              className="me-3 "
            >
              <path d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z" />
              <path d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z" />
              <path d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z" />
              <path d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z" />
              <circle cx="17.87" cy="13.45" r="4.47" />
              <path d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z" />
            </svg>
            Owners
          </Link>
        </li>
        <li>
          <Link
            className={`font-bold text-xl flex items-center px-3 py-2 rounded ${
              location.pathname === "/projects" ? "bg-blue-300 text-white" : ""
            }`}
            to="/projects"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill={getIconColor()}
              height="30px"
              width="30px"
              className="me-3 "
            >
              <path
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"
              />
            </svg>
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`font-bold text-xl flex items-center px-3 py-2 rounded ${
              location.pathname === "/types" ? "bg-blue-300 text-white" : ""
            }`}
            to="/types"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill={getIconColor()}
              height="30px"
              width="30px"
              className="me-3 "
            >
              <path d="M24,7.7,29.3,16H18.6L24,7.7M24,2a2.1,2.1,0,0,0-1.7,1L13.2,17a2.3,2.3,0,0,0,0,2,1.9,1.9,0,0,0,1.7,1H33a2.1,2.1,0,0,0,1.7-1,1.8,1.8,0,0,0,0-2l-9-14A1.9,1.9,0,0,0,24,2Z" />
              <path d="M43,43H29a2,2,0,0,1-2-2V27a2,2,0,0,1,2-2H43a2,2,0,0,1,2,2V41A2,2,0,0,1,43,43ZM31,39H41V29H31Z" />
              <path d="M13,28a6,6,0,1,1-6,6,6,6,0,0,1,6-6m0-4A10,10,0,1,0,23,34,10,10,0,0,0,13,24Z" />
            </svg>
            Types
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
