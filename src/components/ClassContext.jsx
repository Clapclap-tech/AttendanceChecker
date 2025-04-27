import { createContext, useContext, useEffect, useState } from 'react';

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
    const [classes, setClasses] = useState(() => {
        const stored = localStorage.getItem('classes');
        return stored
            ? JSON.parse(stored)
            : [
                { id: 1, name: 'CLASS 1', description: 'CLASS DESCRIPTION' },
                { id: 2, name: 'CLASS 2', description: 'CLASS DESCRIPTION' },
                { id: 3, name: 'CLASS 3', description: 'CLASS DESCRIPTION' },
              ];
    });

    useEffect(() => {
        localStorage.setItem('classes', JSON.stringify(classes));
    }, [classes]);

    const updateClass = (id, newData) => {
        setClasses(prev =>
            prev.map(cls => (cls.id === id ? { ...cls, ...newData } : cls))
        );
    };

    return (
        <ClassContext.Provider value={{ classes, updateClass }}>
            {children}
        </ClassContext.Provider>
    );
};

export const useClasses = () => useContext(ClassContext);
