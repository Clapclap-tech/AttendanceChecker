import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, User, MoreVertical } from "lucide-react";

const HomePage = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const settingsOptions = [
    { label: "Settings", action: () => navigate("/settings") },
    { label: "Help Center", action: () => navigate("/help") },
    { label: "Logout", action: () => console.log("Logging out") },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <button 
            className="mr-4 lg:mr-6" 
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <span className="font-medium text-sm sm:text-base">(LOGO)</span>
          <span className="font-medium ml-2 sm:ml-4 text-sm sm:text-base">
            ATTENDANCE CHECKER
          </span>
        </div>
        <div className="flex items-center relative">
          <button 
            className="mr-3 sm:mr-4"
            onClick={() => navigate("/profile")}
            aria-label="Profile"
          >
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </button>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            aria-label="More options"
          >
            <MoreVertical className="h-6 w-6" />
          </button>
          {showSettings && (
            <div className="absolute right-0 top-10 sm:top-12 mt-2 w-48 bg-white shadow-lg z-10 rounded-md overflow-hidden">
              {settingsOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    option.action();
                    setShowSettings(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 text-sm sm:text-base"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <div>WELCOME TO</div>
          <div>OUR</div>
          <div>ATTENDANCE</div>
          <div>CHECKER</div>
        </h1>
        
        <div
          className="mt-6 sm:mt-8 text-gray-800 hover:text-black transition-colors"
        >
          TO GET STARTED, SELECT A ROLE
        </div>
        
        <div className="flex flex-row mt-6 space-x-2 sm:space-x-4 w-full justify-center px-4 sm:px-0">
          <button 
            onClick={() => navigate("/student")}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            STUDENT
          </button>
          <button 
            onClick={() => navigate("/teacher")}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            TEACHER
          </button>
          <button 
            onClick={() => navigate("/admin")}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            ADMIN
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;