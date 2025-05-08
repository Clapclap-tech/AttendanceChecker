
import { getSidebarData } from './sidebarData.jsx';
import OpenDropdown from './openDropdown.jsx';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';

function Sidebar({ isSidebarOpen, setIsSidebarOpen, toggleSidebar }) {
    const [dropdownStates, setDropdownStates] = useState({});
    

    const toggleDropdown = (id) => {
        setDropdownStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const sidebarData = getSidebarData(toggleDropdown, dropdownStates);

    return (
        <div className={`bg-gray-950 h-screen ${isSidebarOpen ? 'w-1/4' : 'overflow-hidden w-0'} flex flex-col justify-start items-start transition-all duration-300 rounded`}>
            <button className='ml-6' onClick={toggleSidebar} aria-label="Menu" >
                <Menu className='h-6 w-6 text-white mt-5' />
            </button>
            
            {isSidebarOpen && (
                <ul>
                    {sidebarData.map((val, id) => {
                        return (
                            <li key={id}>
                                <div
                                    className="flex flex-row justify-start items-center mt-10 ml-5 hover:cursor-pointer"
                                    onClick={val.onClick}
                                >
                                    <img className="object-contain h-6 w-8" src={val.icon} alt={val.title} />
                                    <h1 className="text-white ml-5 text-2xl">{val.title}</h1>
                                </div>
                                {dropdownStates[val.id] && <OpenDropdown items={val.dropdownItems} />}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default Sidebar;