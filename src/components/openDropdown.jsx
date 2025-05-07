import React from 'react';

function OpenDropdown({ items }) {
    return (
        <ul className="bg-gray-800 text-white rounded-md shadow-md p-2 ml-2.5">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="p-2 hover:bg-gray-700 cursor-pointer"
                    onClick={item.onClick}
                >
                    {item.label}
                </li>
            ))}
        </ul>
    );
}

export default OpenDropdown;



