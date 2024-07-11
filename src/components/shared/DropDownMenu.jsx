import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DropDownMenu = ({ icon, children }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="cursor-pointer">{icon}</div>
      {isOpen && (
        <div
          className={`absolute right-0 origin-top-right border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 ${
            isDark ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
