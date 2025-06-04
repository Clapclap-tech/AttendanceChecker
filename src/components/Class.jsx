import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import { useClasses } from './ClassContext';

function ClassCard({ id }) {
    const navigate = useNavigate();
    const {setSelectedClassID} = useClasses(); 
    const { classes, updateClass } = useClasses();
    const cls = classes.find(c => c.id === id);
    const [isEditing, setIsEditing] = useState(false);

    const handleSelect = (id) => {
        setSelectedClassID(id);
        navigate('/LandingPage/Task')
    }

    return (
        <div className="bg-gray-700 text-white p-6 w-80 relative shadow-lg rounded-lg">
            <button
                className="absolute top-2 right-2 text-white hover:text-gray-300"
                onClick={() => setIsEditing(!isEditing)}
            >
                <Pencil size={16} />
            </button>

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={cls.name}
                        onChange={(e) =>
                            updateClass(id, { name: e.target.value })
                        }
                        className="bg-gray-800 text-white p-1 mb-2 rounded w-full"
                    />
                    <textarea
                        value={cls.description}
                        onChange={(e) =>
                            updateClass(id, { description: e.target.value })
                        }
                        className="bg-gray-800 text-white p-1 rounded w-full text-sm"
                    />
                </>
            ) : (
                <>
                    <button className="text-2xl font-bold hover:underline"
                        onClick={() => {handleSelect(id);
                                        console.log("Clicked");
                        }}
                    >
                        {cls.name}
                    </button>
                    <p className="text-sm">{cls.description}</p>
                </>
            )}
        </div>
    );
}

function Class() {
    const { classes } = useClasses();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="space-y-4">
                {classes.map(cls => (
                    <ClassCard key={cls.id} id={cls.id} />
                ))}
            </div>
        </div>
    );
}

export default Class;
