import React, { useState } from "react";
import Sidebar from "./sidebar";
import HomePage from "./HomePage";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Shared state

  return (
    <div className="flex">
      {/* Pass state and setter to Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      {/* Pass state and setter to HomePage */}
      <div className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300`}>
        <HomePage isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
    </div>
  );
};

export default Layout;