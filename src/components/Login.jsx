import React from "react";
import DarkModeToggle from "./shared/DarkModeToggle.jsx";
import { useSelector } from "react-redux";
const Login = () => {
  const { isDark } = useSelector((state) => state.mode);

  return (
    <>
      <DarkModeToggle />
      <div
        className={`h-screen flex justify-center items-center  ${
          isDark ? "bg-black" : "bg-gray-100"
        } `}
      >
        <form
          className={`flex flex-col w-screen md:w-4/5 lg:w-2/5 xl:w-1/5 rounded shadow p-6 ${
            isDark ? "bg-gray-900" : "bg-white"
          } `}
        >
          <label
            htmlFor="email"
            className={`mb-2 font-bold  ${
              isDark ? "text-gray-50" : "text-black"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
              isDark ? "bg-black text-gray-50" : "border"
            }`}
          />
          <label
            htmlFor="password"
            className={`my-2 font-bold  ${
              isDark ? "text-gray-50" : "text-black"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
              isDark ? "bg-black text-gray-50" : "border"
            }`}
          />
          <button
            className={`border mx-auto mt-4 font-bold px-4 py-2 rounded ${
              isDark ? "text-gray-50" : "text-black"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
