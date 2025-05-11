import React from "react";
import { getSidebarData } from "./sidebarData"; 

const Sidebar = ({ isSidebarOpen }) => {
  const sidebarData = getSidebarData(); 

  return (
    <div
      className={`bg-gray-950 fixed top-23 left-0 h-screen transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "w-full sm:w-1/4" : "w-0 overflow-hidden"}
      `}
    >
      {isSidebarOpen && (
        <ul className="mt-10">
          {sidebarData.map((item, index) => (
            <li key={index}>
              <div
                className="flex flex-row justify-start items-center mt-10 ml-5 hover:cursor-pointer"
                onClick={item.onClick}
              >
                <img className="object-contain h-6 w-8" src={item.icon} alt={item.title} />
                <h1 className="text-white ml-5 text-2xl">{item.title}</h1>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
