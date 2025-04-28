import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState([])

  const currentUser1Id = 1;
  const currentUser2Id = 2;

  useEffect(() => {
    fetch('https://680cbe5f2ea307e081d4e802.mockapi.io/chat/user')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const currentUser1 = users.find(user => user.id === `${currentUser1Id}`);
  const currentUser2 = users.find(user => user.id === `${currentUser2Id}`);

  return (
    <div className="app-container">
      <div className="chat-app">
        <div className="app-header">{currentUser1 ? currentUser1.name : 'Loading...'}</div>
        <div className="main-content">
          <Sidebar
            currentUserId={currentUser1Id} users={users} />
          <ChatWindow
            currentUserId={currentUser1Id}
            message={message}
            setMessage={setMessage}
            username={currentUser2 ? currentUser2.name : "select a user"}
          />
        </div>
      </div>

      <div className="chat-app">
        <div className="app-header">{currentUser2 ? currentUser2.name : 'Loading...'}</div>
        <div className="main-content">
          <Sidebar currentUserId={currentUser2Id} users={users} />
          <ChatWindow
            currentUserId={currentUser2Id}
            message={message}
            setMessage={setMessage}
            username={currentUser1 ? currentUser1.name : "Select a user"} />
        </div>
      </div>
    </div>
  );
}

export default App;
