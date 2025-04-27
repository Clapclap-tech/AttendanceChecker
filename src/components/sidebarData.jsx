import Class from './assets/class.svg';
import Schedule from './assets/schedule.svg';
import Calendar from './assets/calendar.svg';
import React from 'react';

export const getSidebarData = (toggleDropdown, dropdownStates) => [
    {
        id: 1,
        title: 'Classroom',
        icon: Class,
        onClick: () => {
            toggleDropdown(1);
            console.log('Classroom clicked', dropdownStates[1]);
        },
        dropdownItems: [
            { label: 'Mharben', onClick: () => console.log('Math clicked') },
            { label: 'Gwapo', onClick: () => console.log('Science clicked') },
        ],
    },
    {
        id: 2,
        title: 'Schedule',
        icon: Schedule,
        onClick: () => {
            toggleDropdown(2);
            console.log('Schedule clicked', dropdownStates[2]);
        },
        dropdownItems: [
            { label: 'Monday', onClick: () => console.log('Monday clicked') },
            { label: 'Tuesday', onClick: () => console.log('Tuesday clicked') },
        ],
    },
    {
        id: 3,
        title: 'Calendar',
        icon: Calendar,
        onClick: () => {
            toggleDropdown(3);
            console.log('Calendar clicked', dropdownStates[3]);
        },
        dropdownItems: [
            { label: 'January', onClick: () => console.log('January clicked') },
            { label: 'February', onClick: () => console.log('February clicked') },
        ],
    },
];
