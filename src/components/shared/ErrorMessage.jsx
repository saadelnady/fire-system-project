import { useSelector } from "react-redux";

const ErrorMessage = ({ touched, errors, fieldName, condition = true }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  return touched[fieldName] && errors[fieldName] ? (
    <p
      className={`text-sm-end flex items-center ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#d3caca"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M12 8V12"
            stroke="#f05c5c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M12 16.0195V16"
            stroke="#f05c5c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#f05c5c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>{" "}
        </g>
      </svg>
      {errors[fieldName]}
    </p>
  ) : null;
};

export default ErrorMessage;
