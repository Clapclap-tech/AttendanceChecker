import { useState } from 'react';
import axios from 'axios'; // <-- import axios
import Modal from './Modal';
import AddButton from './AddButton';
import JoinClassForm from './JoinClassForm';
import CreateClassForm from './CreateClassForm';

export default function GoogleClassroomClone({
  customStyles = {},
  initialActiveView = null,
  userData,
  onJoinClass = () => {},
  onCreateClass = () => {}
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [activeView, setActiveView] = useState(initialActiveView);
  const [menuAnimation, setMenuAnimation] = useState("");
  const [classCode, setClassCode] = useState("");
  const [className, setClassName] = useState("");
  const [section, setSection] = useState("");
  const [subject, setSubject] = useState("");
  const [room, setRoom] = useState("");
  const [user] = useState(userData || {});

  const toggleMenu = () => {
    if (showMenu) {
      setMenuAnimation("animate-fade-out");
      setTimeout(() => {
        setShowMenu(false);
        setMenuAnimation("");
      }, 200);
    } else {
      setShowMenu(true);
      setMenuAnimation("animate-fade-in");
    }
  };

  const handleMenuOption = (option) => {
    setActiveView(option);
    setShowMenu(false);
  };

  const closeView = () => setActiveView(null);

  const handleJoinClass = () => {
    if (classCode.trim().length > 0) {
      onJoinClass(classCode);
      closeView();
    }
  };

  // UPDATED: POST data to PHP backend
  const handleCreateClass = () => {
    if (className.trim().length > 0) {
      axios.post('http://localhost:8888/api/create_class.php', {
        name: className,
        section,
        subject,
        room
      })
      .then(response => {
        console.log('Class created:', response.data);
        onCreateClass(response.data); // Pass created class data back
        closeView();
        // Optionally reset form fields here if you want
        setClassName('');
        setSection('');
        setSubject('');
        setRoom('');
      })
      .catch(error => {
        console.error('Failed to create class:', error);
        alert('Failed to create class: ' + (error.response?.data?.error || error.message));
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`flex flex-col items-center p-4 sm:p-6 ${customStyles.container || ''}`}>
        <div className={`w-full max-w-md md:max-w-lg lg:max-w-xl ${customStyles.wrapper || ''}`}>
          <div className={`relative mb-6 md:mb-8 flex justify-end ${customStyles.menuContainer || ''}`}>
            <AddButton toggleMenu={toggleMenu} customStyles={customStyles.addButton || ''} />
            {showMenu && (
              <div className={`absolute right-0 -top-22 md:-top-23 w-48 md:w-56 bg-white rounded-md shadow-xl z-10 overflow-hidden ${menuAnimation} ${customStyles.menu || ''}`}>
                <div className="py-1">
                  <button onClick={() => handleMenuOption('join')} className="block w-full text-left px-4 py-2 md:py-3 text-sm hover:bg-gray-100 transition-colors cursor-pointer">Join class</button>
                  <button onClick={() => handleMenuOption('create')} className="block w-full text-left px-4 py-2 md:py-3 text-sm hover:bg-gray-100 transition-colors cursor-pointer">Create class</button>
                </div>
              </div>
            )}
          </div>

          <Modal
            isOpen={activeView === 'join'}
            onClose={closeView}
            title="Join class"
            footer={
              <>
                <button onClick={closeView} className="text-blue-600 px-3 py-1 md:px-4 md:py-2 mr-2 hover:bg-blue-50 rounded transition-colors cursor-pointer">Cancel</button>
                <button onClick={handleJoinClass} disabled={classCode.trim().length === 0} className={`px-3 py-1 md:px-4 md:py-2 rounded transition-colors ${classCode.trim().length > 0 ? 'text-blue-600 hover:bg-blue-50 cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}>Join</button>
              </>
            }
          >
            <JoinClassForm user={user} classCode={classCode} setClassCode={setClassCode} />
          </Modal>

          <Modal
            isOpen={activeView === 'create'}
            onClose={closeView}
            title="Create class"
            footer={
              <>
                <button onClick={closeView} className="text-blue-600 px-3 py-1 md:px-4 md:py-2 mr-2 hover:bg-blue-50 rounded transition-colors cursor-pointer">Cancel</button>
                <button onClick={handleCreateClass} disabled={className.trim().length === 0} className={`px-3 py-1 md:px-4 md:py-2 rounded transition-colors ${className.trim().length > 0 ? 'text-blue-600 hover:bg-blue-50 cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}>Create</button>
              </>
            }
          >
            <CreateClassForm
              className={className}
              setClassName={setClassName}
              section={section}
              setSection={setSection}
              subject={subject}
              setSubject={setSubject}
              room={room}
              setRoom={setRoom}
            />
          </Modal>
        </div>
      </div>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-10px); } }
        @keyframes slideIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideOut { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.95); } }

        .animate-fade-in { animation: fadeIn 0.2s ease-out forwards; }
        .animate-fade-out { animation: fadeOut 0.2s ease-out forwards; }
        .animate-slide-in { animation: slideIn 0.2s ease-out forwards; }
        .animate-slide-out { animation: slideOut 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
}
