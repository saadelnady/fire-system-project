import React, { useEffect, useState } from "react";
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
import Notifications from "./notifications/Notifications.jsx";
import Payments from "./payments/Payments.jsx";
import SingleProject from "./singleProject/SingleProject.jsx";
import OwnerPayments from "./payments/OwnerPayments.jsx";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "./shared/NotFoundPage.jsx";
import {
  checkUserLogin,
  fetchUserProfile,
} from "../store/actions/user/userActions.js";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDark } = useSelector((state) => state.modeReducer);
  const { isLoggedIn } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
    if (isLoggedIn) {
      dispatch(fetchUserProfile());
    } else {
      localStorage.removeItem("TOKEN");
    }
  }, [isLoggedIn]);
  return (
    <div className="flex relative min-h-[100vh] ">
      <SideBar
        isSidebarOpen={isSidebarOpen}
        onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="w-full flex flex-col overflow-auto">
        <Header onBurgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className={`${isDark ? "bg-gray-800" : "bg-gray-100"} px-4`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/owners/:ownerId" element={<Owner />} />

            <Route path="/addNewOwner" element={<AddNewOwner />} />
            <Route path="/addNewOwner/:ownerId" element={<AddNewOwner />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/addproject" element={<AddProject />} />
            <Route path="/addproject/:projectId" element={<AddProject />} />

            <Route path="/payments" element={<Payments />} />
            <Route path="/payments/:ownerId" element={<OwnerPayments />} />
            <Route
              path="/singleProject/:projectId"
              element={<SingleProject />}
            />
            <Route
              path="/addprojectbyOwner/:ownerId"
              element={<AddProject />}
            />

            <Route path="/types" element={<Types />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="*" element={<NotFoundPage navigateTo="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
