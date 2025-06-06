import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClassProvider, useClasses } from './ClassContext';
import ClassCard from './ClassCard';

function Class() {
  const { classes, setSelectedClassID, loading, error } = useClasses();
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedClassID(id);
    navigate('/LandingPage/Task');
  };

  if (loading) return <div>Loading classes...</div>;
  if (error) return <div>Error loading classes: {error}</div>;

  if (!Array.isArray(classes) || classes.length === 0)
    return <div>No classes found.</div>;

  return (
    <div className="min-h-screen flex justify-center items-start pt-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls) => (
          <ClassCard key={cls.id} id={cls.id} onSelect={() => handleSelect(cls.id)} />
        ))}
      </div>
    </div>
  );
}

export default Class;
