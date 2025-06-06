import { useNavigate } from 'react-router-dom';
import { useClasses } from './ClassContext';

function ClassCard({ id }) {
    const navigate = useNavigate();
    const { setSelectedClassID, classes } = useClasses();
    const cls = classes.find(c => c.id === id);

    const handleSelect = (id) => {
        setSelectedClassID(id);
        navigate('/LandingPage/Task');
    };

    return (
        <button
            onClick={() => handleSelect(id)}
            className="bg-gray-700 text-white p-6 w-full min-w-[350px] shadow-lg rounded-2xl text-left hover:bg-gray-600 transition"
        >
            <h2 className="text-2xl font-bold mb-1">{cls.name}</h2>
            <p className="text-sm">{cls.description}</p>
        </button>
    );
}

export default ClassCard;
