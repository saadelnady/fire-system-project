import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NotFoundPage = ({ navigateTo }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  return (
    <div
      className={`font-bold overflow-x-auto min-h-[100vh] flex justify-center items-center  ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <NavLink
          to={navigateTo}
          className="border mt-5 p-4 inline-block rounded bg-gray-900 btn-danger text-white"
        >
          Home page
        </NavLink>
      </div>
    </div>
  );
};
export default NotFoundPage;
