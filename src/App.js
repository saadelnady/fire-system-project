import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login.jsx";
import Admin from "./components/Admin.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

function App() {
  const { isDark } = useSelector((state) => state.modeReducer);
  return (
    <div className={`App  ${isDark ? "bg-gray-900" : "bg-white"}  `}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Admin />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
