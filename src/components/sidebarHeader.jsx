import React from 'react';
import sidebarButtonIcon from './assets/sidebarButton.svg';
import user from './assets/user.svg';

function SidebarHeader({ isSidebarOpen, setIsSidebarOpen }) {
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); 
    };

    return (
        <div className={`flex flex-row justify-center items-center ${isSidebarOpen ? 'w-full' : 'w-7/7 bg-gray-700'} transition-all duration-300`}>
            <button onClick={toggleSidebar}>
                <img
                    className="object-cover h-5 w-8 ml-5 mt-5"
                    src={sidebarButtonIcon}
                    alt="sidebarButton"
                />
            </button>
            {isSidebarOpen && (
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-white mt-5 ml-5">
                        USER ACCOUNT <br /> student name
                    </h1>
                    <img
                        className="object-cover h-12 w-12 mt-5 ml-auto mr-5"
                        src={user}
                        alt="user"
                    />
                </div>
            )}
        </div>
    );
}

export default SidebarHeader;