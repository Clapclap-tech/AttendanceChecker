import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

const Calendar = () => {
  const [events, setEvents] = useState(() => {
    try {
      const stored = localStorage.getItem('calendarEvents');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const formatDateKey = (year, month, day) =>
    `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const handleDateClick = (day) => {
    const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
    setSelectedDate(dateKey);
    setShowEventModal(true);
  };

  const addEvent = () => {
    if (!eventTitle.trim()) return;
    const newEvent = { title: eventTitle, time: eventTime, location: eventLocation };
    setEvents(prev => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), newEvent]
    }));
    setEventTitle('');
    setEventTime('');
    setEventLocation('');
    setShowEventModal(false);
  };

  const removeEvent = (dateKey, eventIndex) => {
    setEvents(prev => {
      const updatedEvents = { ...prev };
      updatedEvents[dateKey] = updatedEvents[dateKey].filter((_, index) => index !== eventIndex);
      if (updatedEvents[dateKey].length === 0) {
        delete updatedEvents[dateKey];
      }
      return updatedEvents;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20 sm:h-24 border border-gray-200 bg-gray-50"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = formatDateKey(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
      const dayEvents = events[dateKey] || [];
      const isToday = new Date().toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();

      days.push(
        <div
          key={day}
          className={`relative h-20 sm:h-24 p-2 border border-gray-200 rounded-md hover:shadow-inner transition-all cursor-pointer ${
            isToday ? 'bg-black text-white' : 'bg-white'
          }`}
          onClick={() => handleDateClick(day)}
        >
          <div className="text-sm font-semibold">{day}</div>
          <div className="absolute bottom-1 left-1 right-1 space-y-1">
            {dayEvents.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className={`text-xs px-2 py-0.5 rounded-full truncate ${
                  isToday ? 'bg-white text-black' : 'bg-black text-white'
                }`}
              >
                <span className="font-semibold">{event.title}</span>
                {event.time && <span className="ml-1 text-xs">({event.time})</span>}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-[10px] text-right text-gray-400">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return '';
    const [year, month, day] = selectedDate.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen font-sans">
      <div className="flex items-center justify-between mb-6 bg-white shadow p-4 rounded-lg">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold tracking-tight text-gray-800">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h1>
        <button
          onClick={() => navigateMonth(1)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 bg-white text-gray-600 shadow-sm rounded-t-lg overflow-hidden">
        {daysOfWeek.map(day => (
          <div key={day} className="p-3 text-center font-medium border-b border-gray-200">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 bg-white p-2 rounded-b-lg shadow-md">
        {renderCalendarDays()}
      </div>

      {showEventModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Add Event</h2>
              <button onClick={() => setShowEventModal(false)} className="text-gray-500 hover:text-black">
                <X size={20} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-500">{formatSelectedDate()}</p>

              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Location (optional)</label>
                <input
                  type="text"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Time (optional)</label>
                <input
                  type="time"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
                />
              </div>

              {events[selectedDate]?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">Existing Events</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                    {events[selectedDate].map((event, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 rounded px-3 py-1.5 text-sm">
                        <div>
                          <span className="font-medium">{event.title}</span>
                          {event.time && <span className="text-sm text-gray-600 ml-1">({event.time})</span>}
                          {event.location && <div className="text-xs text-gray-500">📍 {event.location}</div>}
                        </div>
                        <button
                          onClick={() => removeEvent(selectedDate, index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setShowEventModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={addEvent}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-1"
                >
                  <Plus size={16} />
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
