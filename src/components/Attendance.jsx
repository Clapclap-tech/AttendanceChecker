import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pencil } from 'lucide-react';

const Attendance = ({ onSeeHistory }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const students = [
    { id: 1, name: 'STUDENT 1' },
    { id: 2, name: 'STUDENT 2' },
    { id: 3, name: 'STUDENT 3' },
    { id: 4, name: 'STUDENT 4' }
  ];

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">CLASS 1 ATTENDANCE</h1>
          <button 
            onClick={onSeeHistory}
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
          >
            SEE HISTORY
          </button>
        </div>

        {/* Headers */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-black text-white text-center py-3 px-4 font-medium text-sm sm:text-base">
            (DATE)
          </div>
          <div className="bg-black text-white text-center py-3 px-4 font-medium text-sm sm:text-base">
            (COURSE & SECTION)
          </div>
        </div>

        {/* Current Date and Course Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 text-center py-3 px-4 text-sm sm:text-base font-medium text-gray-700">
            {currentDate}
          </div>
          <div className="bg-gray-100 text-center py-3 px-4 text-sm sm:text-base font-medium text-gray-700">
            CS-101 Section A
          </div>
        </div>

        {/* Student Attendance List */}
        <div className="space-y-3">
          {students.map((student) => (
            <div key={student.id} className="grid grid-cols-2 gap-4 items-center">
              {/* Student Name */}
              <div className="bg-gray-600 text-white py-3 px-4 font-medium text-sm sm:text-base">
                {student.name}
              </div>
              
              {/* Excuse Button */}
              <button className="bg-white border-2 border-gray-300 hover:bg-yellow-50 hover:border-yellow-300 py-3 px-4 font-medium text-sm sm:text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                EXCUSE
              </button>
            </div>
          ))}
        </div>

        {/* End Attendance Button */}
        <div className="mt-8 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
            END ATTENDANCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;