import React, { useState } from "react";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";
import Home from "./Home";
import Owners from "./Owners";
import Projects from "./Projects";
import Types from "./Types";
import Profile from "./profile/Profile";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark } = useSelector((state) => state.mode);

  return (
    <div className="flex h-screen">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex-1 flex flex-col">
        <Header onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className={`flex-1 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/types" element={<Types />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
