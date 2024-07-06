import React from "react";
import ErrorMessage from "../shared/ErrorMessage";
import { useSelector } from "react-redux";

const Attachments = ({ id, label, formik, isDisabled, handleChange }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  return (
    <div className="flex flex-col w-full md:w-[40%] h-[110px]">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="file"
        onChange={handleChange || formik.handleChange}
        onBlur={formik.handleBlur}
        disabled={isDisabled}
        className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
          isDark ? "bg-gray-900 text-white" : "border"
        } ${isDisabled ? "disabled" : null} `}
        multiple
        accept=".jpg, .jpeg, .png, .pdf" // Example: Accept specific file types
      />
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName={id}
      />
    </div>
  );
};

export default Attachments;
