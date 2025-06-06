import { createContext, useContext, useEffect, useState } from 'react';

const ClassContext = createContext();

export function ClassProvider({ children }) {
  const [classes, setClasses] = useState([]);
  const [selectedClassID, setSelectedClassID] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/api/class.php') // Adjust URL
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setClasses(data);
        } else {
          console.error('Invalid data format received:', data);
        }
      })
      .catch(err => console.error('Failed to load classes:', err));
  }, []);

  return (
    <ClassContext.Provider value={{ classes, setSelectedClassID, selectedClassID }}>
      {children}
    </ClassContext.Provider>
  );
}

export function useClasses() {
  return useContext(ClassContext);
}
