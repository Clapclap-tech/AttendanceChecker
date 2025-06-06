import { useNavigate } from 'react-router-dom';
import { useClasses } from './ClassContext';
import ClassCard from './ClassCard';

function Class() {
    const { classes, setSelectedClassID } = useClasses();
    const navigate = useNavigate();

    const handleSelect = (id) => {
        setSelectedClassID(id);
        navigate('/LandingPage/Task');
    };

    return (
        <div className="min-h-screen flex justify-center items-start pt-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                {classes.map(cls => (
                    <ClassCard
                        key={cls.id}
                        id={cls.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Class;
