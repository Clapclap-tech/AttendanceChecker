import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil } from 'lucide-react';

const AttendanceHistory = () => {
  const navigate = useNavigate();
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select Date');
  const [selectedCourse, setSelectedCourse] = useState('Select Course & Section');

  const availableDates = [
    'Monday, June 3, 2025',
    'Friday, May 31, 2025',
    'Wednesday, May 29, 2025',
    'Monday, May 27, 2025',
    'Friday, May 24, 2025'
  ];

  const availableCourses = [
    'CS-101 Section A',
    'CS-101 Section B',
    'CS-102 Section A',
    'MATH-201 Section C',
    'ENG-101 Section B'
  ];

  const students = [
    { id: 1, name: 'STUDENT 1', status: 'ABSENT' },
    { id: 2, name: 'STUDENT 2', status: 'PRESENT' },
    { id: 3, name: 'STUDENT 3', status: 'ABSENT' },
    { id: 4, name: 'STUDENT 4', status: 'EXCUSED' }
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowDateDropdown(false);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setShowCourseDropdown(false);
  };

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">CLASS 1 ATTENDANCE HISTORY</h1>
          <button
            onClick={() => navigate('/LandingPage/Task')}
            className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
          >
            ← Back to Task
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

        {/* Dropdown Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Date Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowDateDropdown(!showDateDropdown);
                setShowCourseDropdown(false);
              }}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 text-left font-medium text-sm sm:text-base border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {selectedDate}
              <span className="float-right">▼</span>
            </button>

            {showDateDropdown && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg z-10 max-h-60 overflow-y-auto">
                {availableDates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {date}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Course Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowCourseDropdown(!showCourseDropdown);
                setShowDateDropdown(false);
              }}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 text-left font-medium text-sm sm:text-base border border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {selectedCourse}
              <span className="float-right">▼</span>
            </button>

            {showCourseDropdown && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg z-10 max-h-60 overflow-y-auto">
                {availableCourses.map((course, index) => (
                  <button
                    key={index}
                    onClick={() => handleCourseSelect(course)}
                    className="w-full text-left py-2 px-4 hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {course}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Student Attendance History */}
        <div className="space-y-3">
          {students.map((student) => (
            <div key={student.id} className="grid grid-cols-2 gap-4 items-center">
              {/* Student Name */}
              <div className="bg-gray-600 text-white py-3 px-4 font-medium text-sm sm:text-base">
                {student.name}
              </div>

              {/* Attendance Status */}
              <div
                className={`py-3 px-4 font-medium text-sm sm:text-base text-center border-2 ${
                  student.status === 'PRESENT'
                    ? 'bg-green-50 border-green-300 text-green-700'
                    : student.status === 'EXCUSED'
                    ? 'bg-yellow-50 border-yellow-300 text-yellow-700'
                    : 'bg-red-50 border-red-300 text-red-700'
                }`}
              >
                {student.status}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base">
            See History
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceHistory;
