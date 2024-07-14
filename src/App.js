import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login.jsx";
import Admin from "./components/Admin.jsx";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

import { io } from "socket.io-client";

import {
  ProtectedLoginRoute,
  ProtectedRoute,
} from "./components/shared/ProtectedRoute.jsx";
import { useEffect, useState } from "react";
import { showToast } from "./helpers/toast_helper.js";

function App() {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState("");
  useEffect(() => {
    if (isLoggedIn) {
      socket?.on("notification", (message) =>
        showToast(toast, message, "success")
      );
    }
  }, [socket, user]);

  useEffect(() => {
    setSocket(io("https://api.fireeaglema.com/"));
  }, []);
  console.log("Some Changes");
  return (
    <div className={`App  ${isDark ? "bg-gray-900" : "bg-white"}  `}>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedLoginRoute>
              <Login />
            </ProtectedLoginRoute>
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-left"
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
