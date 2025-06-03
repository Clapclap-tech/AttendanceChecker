import React, { useState, useRef, useEffect } from "react";
import { Menu, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    studentID: "",
  });

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    axios
      .get("http://localhost:8888/api/get-user.php", { withCredentials: true })
      .then((res) => {
        if (res.data.status === 1) {
          const { firstName, lastName, studentID } = res.data.user;
          setUserData({ firstName, lastName, studentID });
        }
      })
      .catch((err) => {
        console.error("Failed to fetch user info:", err);
      });
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    axios
      .post("http://localhost:8888/api/logout.php", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status === 1) {
          navigate("/SignIn");
        } else {
          console.error("Logout failed:", res.data.message);
        }
      })
      .catch((error) => console.error("Logout error:", error));
  };

  const fullName = `${userData.firstName} ${userData.lastName}`.trim();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <button className="mr-4 sm:block" onClick={toggleSidebar} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
        <span className="font-medium text-sm sm:text-base">
          <Link to="/LandingPage">
            <img className="mx-auto h-15 w-auto" src="/logo.png" alt="Logo" />
          </Link>
        </span>
        <span className="font-medium ml-2 sm:ml-4 text-sm sm:text-base">
          ATTENDANCE CHECKER
        </span>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
          onClick={toggleDropdown}
          aria-label="Profile"
        >
          <User className="h-5 w-5 text-white" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="font-semibold text-sm">{fullName || "Loading..."}</p>
              <p className="text-xs text-gray-500">{userData.studentID || "—"}</p>
            </div>
            <ul className="py-1">
              <li>
                <Link
                  to="/LandingPage/ProfilePage"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Go to Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
