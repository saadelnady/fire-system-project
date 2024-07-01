import React, { useState } from "react";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";
import Home from "./Home";
import Owners from "./Owners";
import Projects from "./Projects";
import Types from "./Types";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex-1 flex flex-col">
        <Header onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/types" element={<Types />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
