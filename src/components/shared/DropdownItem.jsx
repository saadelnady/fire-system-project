import React from "react";

const DropdownItem = ({ children, onClick }) => {
  return (
    <div
      className=" text-sm cursor-pointer flex items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
