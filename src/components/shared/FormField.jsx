import React from "react";
import ErrorMessage from "../shared/ErrorMessage";
import { useSelector } from "react-redux";

const FormField = ({ id, label, type, formik }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  return (
    <div className="flex flex-col w-full md:w-[40%] h-[100px]">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
          isDark ? "bg-gray-800 text-white" : "border"
        }`}
      />
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName={id}
      />
    </div>
  );
};

export default FormField;
