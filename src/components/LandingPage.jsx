import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center justify-center text-center px-4">
      <main className="max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <div>WELCOME TO</div>
          <div>OUR</div>
          <div>ATTENDANCE</div>
          <div>CHECKER</div>
        </h1>

        <div className="mt-6 sm:mt-8 text-gray-800 hover:text-black transition-colors text-base sm:text-lg">
          TO GET STARTED, SELECT A ROLE
        </div>

        <div className="flex flex-row mt-6 space-x-2 sm:space-x-4 w-full justify-center px-4 sm:px-0">
          <button 
            onClick={() => navigate("/student")}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            CLASSROOM
          </button>
          <button 
            onClick={() => navigate("/teacher")}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            SCHEDULE
          </button>
          <button 
            onClick={() => navigate("/admin")}
            className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
          >
            CALENDAR
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
