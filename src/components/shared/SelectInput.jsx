import React from "react";
import Select from "react-select";
import ErrorMessage from "./ErrorMessage";
import { useSelector } from "react-redux";

const SelectInput = ({
  formik,
  label,
  id,
  options,
  handleChange,
  customComponents,
}) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: isDark ? "#161D30" : "#fff",
      color: isDark ? "#fff" : "#000",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      color: isDark ? "#fff" : "#000",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDark ? "#111A21" : "#eee",
    }),
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      backgroundColor: state.isSelected
        ? isDark
          ? "#111A21"
          : "#ddd"
        : isDark
        ? "#333"
        : "#fff",
      color: state.isSelected
        ? isDark
          ? "#fff"
          : "#000"
        : isDark
        ? "#fff"
        : "#000",
    }),
    input: (provided) => ({
      ...provided,
      color: isDark ? "#fff" : "#000",
    }),
  };

  return (
    <div className="flex flex-col w-full md:w-[40%] h-[100px]">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <Select
        options={options}
        onChange={handleChange}
        isSearchable
        styles={customStyles}
        components={customComponents} // Pass customComponents here
        value={options.find((option) => option.value === formik.values[id])}
      />
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName={id}
      />
    </div>
  );
};

export default SelectInput;
