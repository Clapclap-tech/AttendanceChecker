import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button/Button.jsx"

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('http://localhost:8888/api/check-auth.php', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setIsLoggedIn(data.loggedIn);
      } catch (error) {
        console.error('Failed to fetch auth status:', error);
        setIsLoggedIn(false); 
      }
    }

    checkAuth();
  }, []);


  return (
    <div className=" min-h-screen bg-white font-sans flex flex-col items-center justify-start text-center px-4 pt-12">
      <main className="max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <div>WELCOME TO</div>
          <div>OUR</div>
          <div>ATTENDANCE</div>
          <div>CHECKER</div>
        </h1>

        <div className="mt-6 sm:mt-8 text-gray-800 hover:text-black transition-colors text-base sm:text-lg">
          TO GET STARTED, SELECT A PLACE TO START
        </div>

        {/* Conditionally render role buttons or sign-in/sign-up buttons */}
        <div className=" flex flex-row mt-6 space-x-2 sm:space-x-1 justify-center">
          
              <button
                onClick={() => navigate("/LandingPage/Class")}
                className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                CLASSROOM
              </button>
              <button
                onClick={() => navigate("/LandingPage/ProfilePage")}
                className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                PROFILE
              </button>
              <button
                onClick={() => navigate("/LandingPage/Calendar")}
                className="bg-black text-white px-4 sm:px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                CALENDAR
              </button>
              < Button/>
          
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
