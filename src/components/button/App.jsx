import React from 'react';
import GoogleClassroomClone from './GoogleClassroomClone';

function App() {
  const userData = {
    name: 'John Lloyd Dingcong',
    email: 'johnlloydgwapo445@gmail.com',
  };

  const handleJoinClass = (classCode) => {
    console.log('Joining class with code:', classCode);
  };

  const handleCreateClass = (classInfo) => {
    console.log('Creating class with data:', classInfo);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GoogleClassroomClone
        userData={userData}
        onJoinClass={handleJoinClass}
        onCreateClass={handleCreateClass}
      />
    </div>
  );
}

export default App;
