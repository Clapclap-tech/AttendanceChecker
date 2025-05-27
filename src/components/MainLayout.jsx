import React, { useState } from "react";
import Header from "./Header/Header"; 
import Sidebar from "./Sidebar/sidebar"; 
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev); 
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1">
        {/* Header */}
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
