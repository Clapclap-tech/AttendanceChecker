import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, User, MoreVertical, Menu } from "lucide-react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");
  const [showSettings, setShowSettings] = useState(false);

  const settingsOptions = [
    { label: "Settings", action: () => navigate("/settings") },
    { label: "Help Center", action: () => navigate("/help") },
    { label: "Logout", action: () => console.log("Logging out") },
  ];

  return (
    <div className="min-h-screen bg-white font-sans pb-16">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <button 
            className="mr-4" 
            onClick={() => navigate(-1)}
            aria-label="Back"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <span className="font-medium">My Profile</span>
        </div>
        <div className="flex items-center relative">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            aria-label="More options"
          >
            <MoreVertical className="h-6 w-6" />
          </button>
          {showSettings && (
            <div className="absolute right-0 top-10 mt-2 w-48 bg-white shadow-lg z-10 rounded-md overflow-hidden border border-gray-200">
              {settingsOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    option.action();
                    setShowSettings(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-100 text-sm"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* Profile Overview */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full mb-3 flex items-center justify-center">
            <span className="text-2xl font-medium">EM</span>
          </div>
          <h2 className="text-xl font-medium">Emat</h2>
          <p className="text-gray-600">@gmail.com</p>
        </div>

        {/* Profile Form */}
        <div className="space-y-6">
          <section>
            <h3 className="font-medium mb-3">Basic Detail</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Full name</label>
                <p className="font-medium">Emat</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Date of birth</label>
                <p className="font-medium">April 32</p>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Gender</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "male"}
                      onChange={() => setGender("male")}
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "female"}
                      onChange={() => setGender("female")}
                      className="mr-2"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-medium mb-3">Contact Detail</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Mobile number</label>
                <input
                  type="text"
                  defaultValue=" "
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue=" "
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-medium mb-3">Personal Detail</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Weight (kg)</label>
                <input
                  type="number"
                  defaultValue=" "
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Height (cm)</label>
                <input
                  type="number"
                  defaultValue=" "
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </section>

          <button className="w-full bg-black text-white py-3 rounded font-medium">
            Save
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3">
        <button 
          className="flex flex-col items-center text-black"
        >
          <User className="h-5 w-5 mb-1" />
          <span className="text-xs">Profile</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Menu className="h-5 w-5 mb-1" />
          <span className="text-xs">Menu</span>
        </button>
      </nav>
    </div>
  );
};

export default ProfilePage;