import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../store/actions/mode/modeActionsCreators";

const DarkModeToggle = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const dispatch = useDispatch();
  // dark mode ?
  const darkModeIconPath =
    "M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z";
  const lightModeIconPath =
    "M12 0c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z";

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button
      onClick={handleToggle}
      className="relative align-middle rounded-md focus:ring-0 transition-all duration-500 p-4"
    >
      <svg
        className={`w-6 h-6 ${isDark ? "text-white" : "text-blue-900"} `}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={`${isDark ? darkModeIconPath : lightModeIconPath}`} />
      </svg>
    </button>
  );
};

export default DarkModeToggle;
