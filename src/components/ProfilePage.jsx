import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, User, MoreVertical, Menu } from "lucide-react";
import axios from "axios";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastName: "",
    studentID: "",
    birthdate: "",
    street: "",
    city: "",
    zip: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8888/api/get-user.php", { withCredentials: true })
      .then((res) => {
        if (res.data.status === 1) {
          const user = res.data.user;
          setProfile({
            email: user.email || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            studentID: user.studentID || "",
            birthdate: user.birthdate || "",
            street: user.streetAddress || "",
            city: user.cityAddress || "",
            zip: user.zipCode || "",
          });
        }
      })
      .catch((err) => {
        console.error("Failed to load profile:", err);
      });
  }, []);

  const handleSave = () => {
    axios
      .post("http://localhost:8888/api/update-profile.php", profile, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === 1) {
          alert("Profile updated successfully!");
        } else {
          alert("Failed to update profile.");
        }
      })
      .catch(() => alert("Error updating profile."));
  };

  const updateField = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

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
            <span className="text-2xl font-medium">
              {profile.firstName?.[0] || ""}{profile.lastName?.[0] || ""}
            </span>
          </div>
          <h2 className="text-xl font-medium">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-gray-600">{profile.email}</p>
        </div>

        {/* Profile Form */}
        <div className="space-y-6">
          <section>
            <h3 className="font-medium mb-3">Basic Detail</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profile.birthdate}
                  onChange={(e) => updateField("birthdate", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Student ID
                </label>
                <input
                  type="text"
                  value={profile.studentID}
                  onChange={(e) => updateField("studentID", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-medium mb-3">Contact Detail</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  value={profile.street}
                  onChange={(e) => updateField("street", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={profile.city}
                  onChange={(e) => updateField("city", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  value={profile.zip}
                  onChange={(e) => updateField("zip", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  disabled
                />
              </div>
            </div>
          </section>

          <button
            onClick={handleSave}
            className="w-full bg-black text-white py-3 rounded font-medium"
          >
            Save
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-3">
        <button className="flex flex-col items-center text-black">
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
