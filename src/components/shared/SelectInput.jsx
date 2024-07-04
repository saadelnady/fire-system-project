import { useSelector } from "react-redux";

const SelectInput = ({ options }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <select
      name=""
      id=""
      className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
        isDark ? "bg-gray-800 text-white" : "border"
      }`}
    >
      {options?.map((option) => (
        <option key={option?.id} value={option?.value}>
          {option?.name}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
