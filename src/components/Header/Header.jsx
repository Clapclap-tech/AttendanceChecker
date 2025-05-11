import React from "react";
import { Menu, User, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        {/* Burger Icon */}
        <button
          className="mr-4 sm:block"  
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <span className="font-medium text-sm sm:text-base"><img className="mx-auto h-15 w-auto" src="/logo.png" alt="" /></span>
        <span className="font-medium ml-2 sm:ml-4 text-sm sm:text-base">
          ATTENDANCE CHECKER
        </span>
      </div>
      <div className="flex items-center relative">
        <button
          className="mr-3 sm:mr-4"
          onClick={() => console.log("Go to profile")}
          aria-label="Profile"
        >
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
        </button>
        <button
          onClick={() => console.log("More options clicked")}
          aria-label="More options"
        >
          <MoreVertical className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
