import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ isSidebarOpen, onBurgerClick }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const location = useLocation();
  const [toggleStates, setToggleStates] = useState({
    isOwnersActive: false,
    isProjectsActive: false,
  });
  const HandleToggle = (key) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };
  return (
    <div
      className={`transform text-white top-0 left-0 w-64 min-h-full  ${
        isDark ? "bg-gray-900" : "bg-blue-900 "
      } fixed overflow-auto z-50 lg:static lg:transform-none transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="flex justify-end p-4 lg:hidden">
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          width="20px"
          height="20px"
          onClick={onBurgerClick}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect width="16" height="16" id="icon-bound" fill="none"></rect>
            <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon>{" "}
          </g>
        </svg>
      </div>
      <Link className={`font-bold text-3xl mb-4 p-4 block text-center`} to="/">
        Dashboard
      </Link>
      <ul className="space-y-4 p-4">
        <li>
          <Link
            className={`font-bold text-l flex items-center px-3 py-2 rounded ${
              location.pathname === "/" ? "bg-blue-300 text-white" : ""
            }`}
            to="/"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
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

        <li
          className="font-bold text-l flex items-center px-3 py-2 rounded  cursor-pointer "
          onClick={() => {
            HandleToggle("isOwnersActive");
          }}
        >
          <svg
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            height="30px"
            width="30px"
            className={`me-3 `}
          >
            <path d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z" />
            <path d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z" />
            <path d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z" />
            <path d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z" />
            <circle cx="17.87" cy="13.45" r="4.47" />
            <path d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z" />
          </svg>
          Owners
          <svg
            viewBox="-4.5 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            width="20px"
            className={`ms-4 transition ${
              toggleStates.isOwnersActive && "rotate-90"
            } `}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>arrow_right [#336]</title>{" "}
              <desc>Created with Sketch.</desc> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-305.000000, -6679.000000)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                      id="arrow_right-[#336]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </li>
        {toggleStates.isOwnersActive && (
          <ul className="sub-nav">
            <li className=" ms-3">
              <Link
                className={`font-bold text-l flex items-center px-3 py-2 rounded ${
                  location.pathname === "/owners"
                    ? "bg-blue-300 text-white"
                    : ""
                }`}
                to="/owners"
              >
                All owners
              </Link>
            </li>
            <li className=" ms-3 mt-2">
              <Link
                to="/addNewOwner"
                className={`font-bold text-l flex items-center px-3 py-2 rounded ${
                  location.pathname === "/addNewOwner"
                    ? "bg-blue-300 text-white"
                    : ""
                }`}
              >
                Add new owner
              </Link>
            </li>
          </ul>
        )}
        <li
          className="font-bold text-l flex items-center px-3 py-2 rounded  cursor-pointer "
          onClick={() => {
            HandleToggle("isProjectsActive");
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            height="30px"
            width="30px"
            className="me-3 "
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.2 2H6.16146H6.16142C5.63429 1.99998 5.17954 1.99997 4.80497 2.03057C4.40963 2.06287 4.01641 2.13419 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2.13419 4.01641 2.06287 4.40963 2.03057 4.80497C1.99997 5.17954 1.99998 5.63429 2 6.16142V6.16146V6.2V6.8V6.83855V6.83859C1.99998 7.36572 1.99997 7.82047 2.03057 8.19503C2.06287 8.59037 2.13419 8.98359 2.32698 9.36197C2.6146 9.92646 3.07354 10.3854 3.63803 10.673C4.01641 10.8658 4.40963 10.9371 4.80497 10.9694C5.17954 11 5.6343 11 6.16145 11H6.16148H6.2H6.8H6.83852H6.83855C7.3657 11 7.82046 11 8.19503 10.9694C8.59037 10.9371 8.98359 10.8658 9.36197 10.673C9.92646 10.3854 10.3854 9.92646 10.673 9.36197C10.8658 8.98359 10.9371 8.59037 10.9694 8.19503C11 7.82046 11 7.3657 11 6.83855V6.83852V6.8V6.2V6.16148V6.16145C11 5.6343 11 5.17954 10.9694 4.80497C10.9371 4.40963 10.8658 4.01641 10.673 3.63803C10.3854 3.07354 9.92646 2.6146 9.36197 2.32698C8.98359 2.13419 8.59037 2.06287 8.19503 2.03057C7.82047 1.99997 7.36572 1.99998 6.83859 2H6.83855H6.8H6.2ZM4.54601 4.109C4.59546 4.0838 4.69617 4.04612 4.96784 4.02393C5.25117 4.00078 5.62345 4 6.2 4H6.8C7.37655 4 7.74883 4.00078 8.03217 4.02393C8.30383 4.04612 8.40455 4.0838 8.45399 4.109C8.64215 4.20487 8.79514 4.35785 8.89101 4.54601C8.9162 4.59546 8.95388 4.69617 8.97607 4.96784C8.99922 5.25117 9 5.62345 9 6.2V6.8C9 7.37655 8.99922 7.74883 8.97607 8.03217C8.95388 8.30383 8.9162 8.40455 8.89101 8.45399C8.79514 8.64215 8.64215 8.79514 8.45399 8.89101C8.40455 8.9162 8.30383 8.95388 8.03217 8.97607C7.74883 8.99922 7.37656 9 6.8 9H6.2C5.62345 9 5.25117 8.99922 4.96784 8.97607C4.69617 8.95388 4.59546 8.9162 4.54601 8.89101C4.35785 8.79514 4.20487 8.64215 4.109 8.45399C4.0838 8.40455 4.04612 8.30383 4.02393 8.03217C4.00078 7.74883 4 7.37656 4 6.8V6.2C4 5.62345 4.00078 5.25117 4.02393 4.96784C4.04612 4.69617 4.0838 4.59546 4.109 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.109ZM17.2 2H17.1615H17.1614C16.6343 1.99998 16.1795 1.99997 15.805 2.03057C15.4096 2.06287 15.0164 2.13419 14.638 2.32698C14.0735 2.6146 13.6146 3.07354 13.327 3.63803C13.1342 4.01641 13.0629 4.40963 13.0306 4.80497C13 5.17955 13 5.63431 13 6.16146L13 6.2V6.8L13 6.83855C13 7.36569 13 7.82046 13.0306 8.19503C13.0629 8.59037 13.1342 8.98359 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.0164 10.8658 15.4096 10.9371 15.805 10.9694C16.1795 11 16.6343 11 17.1615 11H17.1615H17.2H17.8H17.8385H17.8386C18.3657 11 18.8205 11 19.195 10.9694C19.5904 10.9371 19.9836 10.8658 20.362 10.673C20.9265 10.3854 21.3854 9.92646 21.673 9.36197C21.8658 8.98359 21.9371 8.59037 21.9694 8.19503C22 7.82049 22 7.36578 22 6.83869V6.83867V6.83864V6.83852V6.8V6.2V6.16148V6.16136V6.16134V6.16131C22 5.63422 22 5.17951 21.9694 4.80497C21.9371 4.40963 21.8658 4.01641 21.673 3.63803C21.3854 3.07354 20.9265 2.6146 20.362 2.32698C19.9836 2.13419 19.5904 2.06287 19.195 2.03057C18.8205 1.99997 18.3657 1.99998 17.8386 2H17.8385H17.8H17.2ZM15.546 4.109C15.5955 4.0838 15.6962 4.04612 15.9678 4.02393C16.2512 4.00078 16.6234 4 17.2 4H17.8C18.3766 4 18.7488 4.00078 19.0322 4.02393C19.3038 4.04612 19.4045 4.0838 19.454 4.109C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C19.9162 4.59546 19.9539 4.69617 19.9761 4.96784C19.9992 5.25117 20 5.62345 20 6.2V6.8C20 7.37655 19.9992 7.74883 19.9761 8.03217C19.9539 8.30383 19.9162 8.40455 19.891 8.45399C19.7951 8.64215 19.6422 8.79514 19.454 8.89101C19.4045 8.9162 19.3038 8.95388 19.0322 8.97607C18.7488 8.99922 18.3766 9 17.8 9H17.2C16.6234 9 16.2512 8.99922 15.9678 8.97607C15.6962 8.95388 15.5955 8.9162 15.546 8.89101C15.3578 8.79514 15.2049 8.64215 15.109 8.45399C15.0838 8.40455 15.0461 8.30383 15.0239 8.03217C15.0008 7.74883 15 7.37656 15 6.8V6.2C15 5.62345 15.0008 5.25117 15.0239 4.96784C15.0461 4.69617 15.0838 4.59546 15.109 4.54601C15.2049 4.35785 15.3578 4.20487 15.546 4.109ZM6.16146 13L6.2 13H6.8L6.83855 13C7.36569 13 7.82046 13 8.19503 13.0306C8.59037 13.0629 8.98359 13.1342 9.36197 13.327C9.92646 13.6146 10.3854 14.0735 10.673 14.638C10.8658 15.0164 10.9371 15.4096 10.9694 15.805C11 16.1795 11 16.6343 11 17.1615V17.1615V17.2V17.8V17.8385V17.8386C11 18.3657 11 18.8205 10.9694 19.195C10.9371 19.5904 10.8658 19.9836 10.673 20.362C10.3854 20.9265 9.92646 21.3854 9.36197 21.673C8.98359 21.8658 8.59037 21.9371 8.19503 21.9694C7.82049 22 7.36577 22 6.83867 22H6.83865H6.83852H6.8H6.2H6.16148H6.16136H6.16134C5.63424 22 5.17952 22 4.80497 21.9694C4.40963 21.9371 4.01641 21.8658 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2.13419 19.9836 2.06287 19.5904 2.03057 19.195C1.99997 18.8205 1.99998 18.3657 2 17.8386V17.8385V17.8V17.2V17.1615V17.1614C1.99998 16.6343 1.99997 16.1795 2.03057 15.805C2.06287 15.4096 2.13419 15.0164 2.32698 14.638C2.6146 14.0735 3.07354 13.6146 3.63803 13.327C4.01641 13.1342 4.40963 13.0629 4.80497 13.0306C5.17955 13 5.63431 13 6.16146 13ZM4.96784 15.0239C4.69617 15.0461 4.59546 15.0838 4.54601 15.109C4.35785 15.2049 4.20487 15.3578 4.109 15.546C4.0838 15.5955 4.04612 15.6962 4.02393 15.9678C4.00078 16.2512 4 16.6234 4 17.2V17.8C4 18.3766 4.00078 18.7488 4.02393 19.0322C4.04612 19.3038 4.0838 19.4045 4.109 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.59546 19.9162 4.69617 19.9539 4.96784 19.9761C5.25117 19.9992 5.62345 20 6.2 20H6.8C7.37656 20 7.74883 19.9992 8.03217 19.9761C8.30383 19.9539 8.40455 19.9162 8.45399 19.891C8.64215 19.7951 8.79514 19.6422 8.89101 19.454C8.9162 19.4045 8.95388 19.3038 8.97607 19.0322C8.99922 18.7488 9 18.3766 9 17.8V17.2C9 16.6234 8.99922 16.2512 8.97607 15.9678C8.95388 15.6962 8.9162 15.5955 8.89101 15.546C8.79514 15.3578 8.64215 15.2049 8.45399 15.109C8.40455 15.0838 8.30383 15.0461 8.03217 15.0239C7.74883 15.0008 7.37655 15 6.8 15H6.2C5.62345 15 5.25117 15.0008 4.96784 15.0239ZM17.2 13L17.1615 13C16.6343 13 16.1795 13 15.805 13.0306C15.4096 13.0629 15.0164 13.1342 14.638 13.327C14.0735 13.6146 13.6146 14.0735 13.327 14.638C13.1342 15.0164 13.0629 15.4096 13.0306 15.805C13 16.1795 13 16.6343 13 17.1615L13 17.2V17.8L13 17.8385C13 18.3657 13 18.8205 13.0306 19.195C13.0629 19.5904 13.1342 19.9836 13.327 20.362C13.6146 20.9265 14.0735 21.3854 14.638 21.673C15.0164 21.8658 15.4096 21.9371 15.805 21.9694C16.1795 22 16.6343 22 17.1614 22H17.1615H17.2H17.8H17.8385H17.8386C18.3658 22 18.8205 22 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673C20.9265 21.3854 21.3854 20.9265 21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22 18.8205 22 18.3658 22 17.8386V17.8385V17.8V17.2V17.1615V17.1614C22 16.6343 22 16.1795 21.9694 15.805C21.9371 15.4096 21.8658 15.0164 21.673 14.638C21.3854 14.0735 20.9265 13.6146 20.362 13.327C19.9836 13.1342 19.5904 13.0629 19.195 13.0306C18.8205 13 18.3657 13 17.8385 13L17.8 13H17.2ZM15.546 15.109C15.5955 15.0838 15.6962 15.0461 15.9678 15.0239C16.2512 15.0008 16.6234 15 17.2 15H17.8C18.3766 15 18.7488 15.0008 19.0322 15.0239C19.3038 15.0461 19.4045 15.0838 19.454 15.109C19.6422 15.2049 19.7951 15.3578 19.891 15.546C19.9162 15.5955 19.9539 15.6962 19.9761 15.9678C19.9992 16.2512 20 16.6234 20 17.2V17.8C20 18.3766 19.9992 18.7488 19.9761 19.0322C19.9539 19.3038 19.9162 19.4045 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20H17.2C16.6234 20 16.2512 19.9992 15.9678 19.9761C15.6962 19.9539 15.5955 19.9162 15.546 19.891C15.3578 19.7951 15.2049 19.6422 15.109 19.454C15.0838 19.4045 15.0461 19.3038 15.0239 19.0322C15.0008 18.7488 15 18.3766 15 17.8V17.2C15 16.6234 15.0008 16.2512 15.0239 15.9678C15.0461 15.6962 15.0838 15.5955 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109Z"
              ></path>
            </g>
          </svg>
          Projects
          <svg
            viewBox="-4.5 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            width="20px"
            className={`ms-4 transition ${
              toggleStates.isProjectsActive && "rotate-90"
            } `}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>arrow_right [#336]</title>{" "}
              <desc>Created with Sketch.</desc> <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-305.000000, -6679.000000)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M249.365851,6538.70769 L249.365851,6538.70769 C249.770764,6539.09744 250.426289,6539.09744 250.830166,6538.70769 L259.393407,6530.44413 C260.202198,6529.66364 260.202198,6528.39747 259.393407,6527.61699 L250.768031,6519.29246 C250.367261,6518.90671 249.720021,6518.90172 249.314072,6519.28247 L249.314072,6519.28247 C248.899839,6519.67121 248.894661,6520.31179 249.302681,6520.70653 L257.196934,6528.32352 C257.601847,6528.71426 257.601847,6529.34685 257.196934,6529.73759 L249.365851,6537.29462 C248.960938,6537.68437 248.960938,6538.31795 249.365851,6538.70769"
                      id="arrow_right-[#336]"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </li>
        {toggleStates.isProjectsActive && (
          <ul className="sub-nav">
            <li className=" ms-3">
              <Link
                className={`font-bold text-l flex items-center px-3 py-2 rounded ${
                  location.pathname === "/projects"
                    ? "bg-blue-300 text-white"
                    : ""
                }`}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className=" ms-3 mt-2">
              <Link
                to="/addProject"
                className={`font-bold text-l flex items-center px-3 py-2 rounded ${
                  location.pathname === "/addProject"
                    ? "bg-blue-300 text-white"
                    : ""
                }`}
              >
                Add new project
              </Link>
            </li>
          </ul>
        )}
        <li>
          <Link
            className={`font-bold text-l flex items-center px-3 py-2 rounded ${
              location.pathname === "/types" ? "bg-blue-300 text-white" : ""
            }`}
            to="/types"
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
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
