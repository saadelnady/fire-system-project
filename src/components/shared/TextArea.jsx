import { useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage";

const TextArea = ({ id, label, type, formik }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div className="flex flex-col w-full h-[110px]">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        className={`p-2 resize-none	w-full rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out  ${
          isDark ? "bg-gray-900 text-white" : "border"
        }`}
      ></textarea>
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName={id}
      />
    </div>
  );
};

export default TextArea;
