import { useState } from 'react';
import { useClasses } from './ClassContext';
import { Pencil, Trash2 } from 'lucide-react';

function Task() {
    const {selectedClassID} = useClasses(); 
    const { classes } = useClasses();
    const cls = classes.find(c => c.id === selectedClassID);

    const [tasks, setTasks] = useState([]);

    const handleCreateTask = () => {
        setTasks(prev => [
            ...prev,
            { name: `TASK ${prev.length + 1}`, isEditing: false }
        ]);
    };

    const toggleEdit = (index) => {
        setTasks(prev =>
            prev.map((task, i) =>
                i === index ? { ...task, isEditing: !task.isEditing } : task
            )
        );
    };

    const updateTaskName = (index, value) => {
        setTasks(prev =>
            prev.map((task, i) =>
                i === index ? { ...task, name: value } : task
            )
        );
    };

    const handleDeleteTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i !== index));
    };

    if (!cls) return <p className="text-center mt-10">Class not found</p>;

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen px-4 md:px-0">
            <div className="space-y-4 max-w-lg w-full">
                <div className="bg-gray-700 text-white p-6 flex flex-col justify-start shadow-lg rounded-lg">
                    <h1 className="text-4xl font-bold">{cls.name}</h1>
                    <p className="mt-2">{cls.description}</p>
                    <div className="flex justify-between mt-4">
                        <button className="text-sm underline" onClick={handleCreateTask}>
                            CREATE CLASS ATTENDANCE
                        </button>
                        <button className="text-sm underline">
                            SEE HISTORY
                        </button>
                    </div>
                </div>
                <div className="mt-4 space-y-4">
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className="bg-gray-300 p-4 flex items-center justify-between text-2xl font-bold shadow-lg rounded-lg w-full max-w-[400px] mx-auto relative"
                        >
                            <div className="absolute top-2 right-2 flex items-center space-x-2">
                                <button
                                    onClick={() => toggleEdit(index)}
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    <Pencil size={16} />
                                </button>
                                <button
                                    onClick={() => handleDeleteTask(index)}
                                    className="text-gray-700 hover:text-gray-900"
                                    aria-label="Delete Task"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            {task.isEditing ? (
                                <input
                                    type="text"
                                    value={task.name}
                                    onChange={(e) => updateTaskName(index, e.target.value)}
                                    className="flex-1 p-2 bg-gray-200 text-black outline-none rounded" 
                                />
                            ) : (
                                <span>{task.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Task;
