import { useSelector } from "react-redux";

const Home = () => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div
      className={`font-bold pb-[70px] min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    ></div>
  );
};
export default Home;
