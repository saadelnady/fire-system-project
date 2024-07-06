import React, { useState } from "react";
import SideBar from "./shared/SideBar";
import Header from "./shared/Header";
import Home from "./home/Home.jsx";
import Owners from "./owners/Owners.jsx";
import Owner from "./owner/Owner.jsx";
import Projects from "./projects/Projects.jsx";
import Types from "./types/Types.jsx";
import Profile from "./profile/Profile";
import AddNewOwner from "./addOwner/AddOwner.jsx";
import AddProject from "./addProject/AddProject.jsx";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div className="flex min-h-[100vh]">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="w-full flex flex-col">
        <Header onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className={` ${isDark ? "bg-gray-800" : "bg-gray-100"} px-4 `}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/owners/:ownerId" element={<Owner />} />

            <Route path="/addNewOwner" element={<AddNewOwner />} />
            <Route path="/addNewOwner/:ownerId" element={<AddNewOwner />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/addProject/:projectId" element={<AddProject />} />
            <Route path="/types" element={<Types />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
