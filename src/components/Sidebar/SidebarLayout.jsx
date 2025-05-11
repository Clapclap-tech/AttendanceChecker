import React, { useState } from "react";
import Sidebar from "./sidebar";
import HomePage from "../LandingPage";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    console.log(isSidebarOpen ? "Open" : "Close");
  }; //toggle sidebar state

  return (
    
    <div className="flex">
      {/* Pass state and setter to Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} />


      {/* Pass state and setter to HomePage */}
      <div className={`flex-1 ${isSidebarOpen ? "mr-4" : "mr-4"} transition-all duration-300`}>
        <HomePage isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} />
      </div> 
    </div>
  );
};

export default Layout;